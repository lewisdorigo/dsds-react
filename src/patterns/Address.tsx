'use client';

import React, { useState } from 'react';

import Question from '../components/Question';
import TextInput from '../components/TextInput';
import Select from '../components/Select';
import Button from '../components/Button';

import { InputWidth, ButtonType, AddressState } from '../lib/enums';

/**
 * @param {DSDS.Pattern.Address} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Address:React.FC<DSDS.Pattern.Address> = function Address({
    state: rawState = AddressState.PostcodeLookup,
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
}) {
    const [state, setState] = useState<AddressState>(rawState);
    const [lookupError, setLookupError] = useState<DSDS.Meta.Error>();
    const [addresses, setAddresses] = useState<DSDS.Component.Select.Item[]>([]);

    const typeFullAddressButton = (
        <button
            type="button"
            className="ds_link ds_no-margin"
            onClick={(event) => {
                event.preventDefault();
                setState(AddressState.EnterAddress);
            }}
        >
            Or type in your full address
        </button>
    );

    const lookupPostcode = async () => {
        const postcodeVal = (document.getElementById(postcodeLookup.id) as HTMLInputElement).value;

        lookup(postcodeVal.trim())
            .then((results) => {
                if (Array.isArray(results)) {
                    setAddresses(results);
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
                        <button className="ds_link ds_no-margin">
                            Return to postcode lookup
                        </button>
                    </p>
                    <fieldset>
                        <legend>Tell us your full address</legend>

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
                                                line 1 of 2
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
                        <Question
                            field={{
                                width: InputWidth.Fixed10,
                                ...postcode,
                            }}
                        >
                            <TextInput {...postcode} />
                        </Question>
                    </fieldset>
                </>
            );

        case AddressState.SelectAddress:
            return (
                <>
                    <Question field={addressSelect}>
                        <Select
                            {...addressSelect}
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
                                {...postcodeLookup}
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
