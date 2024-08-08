'use client';

import React, { useState, useMemo } from 'react';

import Question from '../components/Question';
import TextInput from '../components/TextInput';
import Select from '../components/Select';
import Button from '../components/Button';
import PrefilledValues from '../components/PrefilledValues';

import { InputWidth, ButtonType, AddressState } from '../lib/enums';

/**
 * @param {DSDS.Pattern.Address} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Address:React.FC<Omit<DSDS.Pattern.Address, 'type'>> = function Address({
    state: rawState,
    lookup,
    items: {
        postcodeLookup,
        addressSelect,

        address1,
        address2,
        city,
        county,
        country,
        postcode,
    },
    labels: {
        fullAddressBtn = 'Or type in your full address',
        returnToLookupBtn = 'Return to postcode lookup',
        fullAddress = 'Tell us your full address',
    },
}) {
    const initialState = useMemo(() => {
        if (rawState) {
            return rawState;
        }

        if (address1.value) {
            return AddressState.EnterAddress;
        }

        if (addressSelect.value) {
            return AddressState.SelectAddress;
        }

        return AddressState.PostcodeLookup;
    }, [rawState, addressSelect.value, address1.value]);

    const [state, setState] = useState<AddressState>(initialState);
    const [lookupError, setLookupError] = useState<DSDS.Meta.Error | undefined>();
    const [enteredPostcode, setEnteredPostcode] = useState<string>(postcodeLookup.value);
    const [addresses, setAddresses] = useState<DSDS.Component.Select.Item[]>(
        addressSelect
            ? addressSelect.items || []
            : [],
    );

    const typeFullAddressButton = (
        <button
            type="button"
            className="ds_link ds_no-margin"
            onClick={(event) => {
                event.preventDefault();
                setEnteredPostcode('');
                setLookupError(undefined);
                setState(AddressState.EnterAddress);
            }}
        >
            { fullAddressBtn }
        </button>
    );

    const lookupPostcode = async () => {
        const postcodeVal = (document.getElementById(postcodeLookup.id) as HTMLInputElement).value;

        if (!postcodeVal) {
            setLookupError({
                fieldId: postcodeLookup.id,
                message: 'Enter a valid postcode',
            });
            return;
        }

        setEnteredPostcode(postcodeVal);

        lookup(postcodeVal.trim())
            .then((results) => {
                if (Array.isArray(results)) {
                    setAddresses(results);
                    setLookupError(undefined);
                    setState(AddressState.SelectAddress);

                    return results;
                }

                setLookupError(results);
                setState(AddressState.PostcodeLookup);
                return results;
            });
    };

    switch (state) {
        case AddressState.EnterAddress:
            return (
                <>
                    <p>
                        <button
                            className="ds_link ds_no-margin"
                            onClick={(e) => {
                                e.preventDefault();
                                setEnteredPostcode('');
                                setLookupError(undefined);
                                setState(AddressState.PostcodeLookup);
                            }}
                        >
                            { returnToLookupBtn }
                        </button>
                    </p>
                    <fieldset>
                        <legend>{ fullAddress }</legend>

                        <Question
                            field={{
                                ...address1,
                                label: (
                                    <>
                                        Building and street
                                        {' '}
                                        <span className="visually-hidden">
                                            line 1 of 2
                                        </span>
                                    </>
                                ),
                            }}
                        >
                            <TextInput {...address1} />
                        </Question>
                        <Question
                            field={{
                                ...address2,
                                label: {
                                    label: (
                                        <>
                                            Building and street
                                            {' '}
                                            <span className="visually-hidden">
                                                line 2 of 2
                                            </span>
                                        </>
                                    ),
                                    hidden: true,
                                },
                            }}
                        >
                            <TextInput {...address2} />
                        </Question>
                        <Question
                            field={{
                                ...city,
                                label: 'City or town',
                            }}
                        >
                            <TextInput {...city} />
                        </Question>
                        { county && (
                            <Question
                                field={{
                                    ...county,
                                    label: 'County',
                                }}
                            >
                                <TextInput {...county} />
                            </Question>
                        )}
                        { country && (
                            <Question
                                field={{
                                    ...country,
                                    label: 'County',
                                }}
                            >
                                <Select {...country} />
                            </Question>
                        )}
                        <Question field={postcode}>
                            <TextInput
                                width={InputWidth.Fixed10}
                                {...postcode}
                            />
                        </Question>
                    </fieldset>
                </>
            );

        case AddressState.SelectAddress:
            return (
                <>
                    <PrefilledValues
                        items={[
                            {
                                id: 'entered-postcode',
                                label: 'Postcode',
                                value: enteredPostcode,
                                actions: [
                                    (
                                        <button
                                            key="entered-postcode-action"
                                            type="button"
                                            className="ds_link ds_prefilled-value-list__value-actions"
                                            onClick={(e) => {
                                                e.preventDefault();

                                                setEnteredPostcode('');
                                                setLookupError(undefined);
                                                setState(AddressState.PostcodeLookup);
                                            }}
                                        >
                                            Change
                                            {' '}
                                            <span className="visually-hidden">
                                                your answer for:
                                                {' '}
                                                <q>Postcode</q>
                                            </span>
                                        </button>
                                    ),
                                ],
                            },
                        ]}
                    />
                    <Question field={addressSelect}>
                        <Select
                            {...addressSelect}
                            width={InputWidth.Fixed20}
                            items={addresses}
                        />
                    </Question>
                    <p>{ typeFullAddressButton }</p>
                </>
            );

        default:
            return (
                <>
                    <fieldset>
                        <Question
                            field={{
                                ...postcodeLookup,
                                error: (
                                    lookupError
                                        ? [lookupError]
                                        : postcodeLookup.error
                                ),
                            }}
                        >
                            <TextInput
                                width={InputWidth.Fixed10}
                                {...postcodeLookup}
                                value={enteredPostcode}
                                error={
                                    lookupError
                                        ? [lookupError]
                                        : postcodeLookup.error
                                }
                                attributes={{
                                    ...postcodeLookup.attributes,
                                    /**
                                     * @param {React.KeyboardEvent} event - The event
                                     * @returns {boolean} - False if event should stop propagating,
                                     *  otherwise true.
                                     */
                                    onKeyUp(event) {
                                        if (
                                            (
                                                event.code === 'Enter'
                                                || event.key === 'Enter'
                                                || event.which === 13
                                            )
                                            && !event.altKey
                                            && !event.ctrlKey
                                        ) {
                                            event.preventDefault();
                                            lookupPostcode();
                                            return false;
                                        }

                                        return true;
                                    },
                                }}
                            />
                        </Question>
                        <Button
                            type={ButtonType.Button}
                            onClick={lookupPostcode}
                            className="ds_no-margin"
                        >
                            Find address
                        </Button>
                    </fieldset>
                    <p>{ typeFullAddressButton }</p>
                </>
            );
    }
};

export default Address;
