'use client';

import React, { useState, useMemo } from 'react';

import { Question } from '../../components/Question';
import { TextInput, Types as InputTypes } from '../../components/TextInput';
import { Select } from '../../components/Select';
import { Button, Types as ButtonTypes } from '../../components/Button';
import { Link } from '../../components/Link';
import { PrefilledValues } from '../../components/PrefilledValues';

import * as Types from './Address.type';

/**
 * @param {Types.Address} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Address:React.FC<Omit<Types.Address, 'type'>> = function Address({
    id,
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
    } = {},
}) {
    const stateParam = useMemo(() => `${id}-state`, [id]);

    const initialState:Types.AddressState = useMemo(() => {
        if (rawState) {
            return rawState;
        }

        if (address1.value) {
            return Types.AddressState.EnterAddress;
        }

        if (addressSelect.value) {
            return Types.AddressState.SelectAddress;
        }

        return Types.AddressState.PostcodeLookup;
    }, [rawState, addressSelect.value, address1.value]);

    const [formState, setFormState] = useState<Types.AddressFormState>({
        message: '',
        postcode: postcodeLookup.value,
        addresses: addressSelect.items,
        error: undefined,
        state: initialState,
    });

    const {
        state,
        error: lookupError,
        postcode: enteredPostcode,
    } = formState;

    const handleLookup = (
        event:React.KeyboardEvent<HTMLInputElement>|React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
        const { value } = (document.getElementById(postcodeLookup.id) as HTMLInputElement);

        const formData = new FormData();
        formData.set(postcodeLookup.id, value);

        if (typeof lookup === 'function') {
            lookup(formState, formData)
                .then((result) => {
                    setFormState(result);
                });
        }
    };

    const typeFullAddressButton = (
        <Link
            href={`?${stateParam}=address`}
            className="ds_no-margin"
            onClick={(event:React.MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
                setFormState({
                    ...formState,
                    postcode: '',
                    error: undefined,
                    state: Types.AddressState.EnterAddress,
                });
            }}
        >
            { fullAddressBtn }
        </Link>
    );

    switch (state) {
        case Types.AddressState.EnterAddress:
            return (
                <>
                    <p>
                        <Link
                            href="?"
                            className="ds_link ds_no-margin"
                            onClick={(event:React.MouseEvent<HTMLAnchorElement>) => {
                                event.preventDefault();
                                setFormState({
                                    ...formState,
                                    postcode: '',
                                    error: undefined,
                                    state: Types.AddressState.PostcodeLookup,
                                });
                            }}
                        >
                            { returnToLookupBtn }
                        </Link>
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
                                width={InputTypes.Width.Fixed10}
                                {...postcode}
                            />
                        </Question>
                    </fieldset>
                </>
            );

        case Types.AddressState.SelectAddress:
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
                                        <Link
                                            href="?"
                                            key="entered-postcode-action"
                                            className="ds_prefilled-value-list__value-actions"
                                            onClick={(e:React.MouseEvent<HTMLAnchorElement>) => {
                                                e.preventDefault();
                                                setFormState({
                                                    ...formState,
                                                    postcode: '',
                                                    error: undefined,
                                                    state: Types.AddressState.PostcodeLookup,
                                                });
                                            }}
                                        >
                                            Change
                                            {' '}
                                            <span className="visually-hidden">
                                                your answer for:
                                                {' '}
                                                <q>Postcode</q>
                                            </span>
                                        </Link>
                                    ),
                                ],
                            },
                        ]}
                    />
                    <Question field={addressSelect}>
                        <Select
                            {...addressSelect}
                            width={InputTypes.Width.Fixed20}
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
                                width={InputTypes.Width.Fixed10}
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
                                    onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
                                        if (
                                            (
                                                event.code === 'Enter'
                                                || event.key === 'Enter'
                                                || event.which === 13
                                            )
                                            && !event.altKey
                                            && !event.ctrlKey
                                        ) {
                                            handleLookup(event);
                                            return false;
                                        }

                                        return true;
                                    },
                                }}
                            />
                        </Question>
                        <Button
                            type={ButtonTypes.Type.Submit}
                            className="ds_no-margin--top"
                            onClick={handleLookup}
                        >
                            Find address
                        </Button>
                    </fieldset>
                    <p>{ typeFullAddressButton }</p>
                </>
            );
    }
};
