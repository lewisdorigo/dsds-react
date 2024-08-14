'use client';

import React, { useState, useMemo } from 'react';

import Question from '../../components/Question';
import TextInput from '../../components/TextInput';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Link from '../../components/Link';
import PrefilledValues from '../../components/PrefilledValues';

import type { Address } from './Address.type';
import { AddressState, AddressFormState } from './Address.type';
import { InputWidth } from '../../components/TextInput/TextInput.type';
import { Type as ButtonType } from '../../components/Button/Button.type';

/**
 * @param {Address} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Address:React.FC<Omit<Address, 'type'>> = function Address({
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

    const initialState:AddressState = useMemo(() => {
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

    const [formState, setFormState] = useState<AddressFormState>({
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
                    state: AddressState.EnterAddress,
                });
            }}
        >
            { fullAddressBtn }
        </Link>
    );

    switch (state) {
        case AddressState.EnterAddress:
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
                                    state: AddressState.PostcodeLookup,
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
                                                    state: AddressState.PostcodeLookup,
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
                            width={InputWidth.Fixed20}
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
                            type={ButtonType.Submit}
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

export default Address;
