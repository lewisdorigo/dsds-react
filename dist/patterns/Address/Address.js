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
export const Address = function Address({ id, state: rawState, lookup, items: { postcodeLookup, addressSelect, address1, address2, city, county, country, postcode, }, labels: { fullAddressBtn = 'Or type in your full address', returnToLookupBtn = 'Return to postcode lookup', fullAddress = 'Tell us your full address', } = {}, }) {
    const stateParam = useMemo(() => `${id}-state`, [id]);
    const initialState = useMemo(() => {
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
    const [formState, setFormState] = useState({
        message: '',
        postcode: postcodeLookup.value,
        addresses: addressSelect.items,
        error: undefined,
        state: initialState,
    });
    const { state, error: lookupError, postcode: enteredPostcode, } = formState;
    const handleLookup = (event) => {
        event.preventDefault();
        const { value } = document.getElementById(postcodeLookup.id);
        const formData = new FormData();
        formData.set(postcodeLookup.id, value);
        if (typeof lookup === 'function') {
            lookup(formState, formData)
                .then((result) => {
                setFormState(result);
            });
        }
    };
    const typeFullAddressButton = (React.createElement(Link, { href: `?${stateParam}=address`, className: "ds_no-margin", onClick: (event) => {
            event.preventDefault();
            setFormState({
                ...formState,
                postcode: '',
                error: undefined,
                state: Types.AddressState.EnterAddress,
            });
        } }, fullAddressBtn));
    switch (state) {
        case Types.AddressState.EnterAddress:
            return (React.createElement(React.Fragment, null,
                React.createElement("p", null,
                    React.createElement(Link, { href: "?", className: "ds_link ds_no-margin", onClick: (event) => {
                            event.preventDefault();
                            setFormState({
                                ...formState,
                                postcode: '',
                                error: undefined,
                                state: Types.AddressState.PostcodeLookup,
                            });
                        } }, returnToLookupBtn)),
                React.createElement("fieldset", null,
                    React.createElement("legend", null, fullAddress),
                    React.createElement(Question, { field: {
                            ...address1,
                            label: (React.createElement(React.Fragment, null,
                                "Building and street",
                                ' ',
                                React.createElement("span", { className: "visually-hidden" }, "line 1 of 2"))),
                        } },
                        React.createElement(TextInput, { ...address1 })),
                    React.createElement(Question, { field: {
                            ...address2,
                            label: {
                                label: (React.createElement(React.Fragment, null,
                                    "Building and street",
                                    ' ',
                                    React.createElement("span", { className: "visually-hidden" }, "line 2 of 2"))),
                                hidden: true,
                            },
                        } },
                        React.createElement(TextInput, { ...address2 })),
                    React.createElement(Question, { field: {
                            ...city,
                            label: 'City or town',
                        } },
                        React.createElement(TextInput, { ...city })),
                    county && (React.createElement(Question, { field: {
                            ...county,
                            label: 'County',
                        } },
                        React.createElement(TextInput, { ...county }))),
                    country && (React.createElement(Question, { field: {
                            ...country,
                            label: 'County',
                        } },
                        React.createElement(Select, { ...country }))),
                    React.createElement(Question, { field: postcode },
                        React.createElement(TextInput, { width: InputTypes.Width.Fixed10, ...postcode })))));
        case Types.AddressState.SelectAddress:
            return (React.createElement(React.Fragment, null,
                React.createElement(PrefilledValues, { items: [
                        {
                            id: 'entered-postcode',
                            label: 'Postcode',
                            value: enteredPostcode,
                            actions: [
                                (React.createElement(Link, { href: "?", key: "entered-postcode-action", className: "ds_prefilled-value-list__value-actions", onClick: (e) => {
                                        e.preventDefault();
                                        setFormState({
                                            ...formState,
                                            postcode: '',
                                            error: undefined,
                                            state: Types.AddressState.PostcodeLookup,
                                        });
                                    } },
                                    "Change",
                                    ' ',
                                    React.createElement("span", { className: "visually-hidden" },
                                        "your answer for:",
                                        ' ',
                                        React.createElement("q", null, "Postcode")))),
                            ],
                        },
                    ] }),
                React.createElement(Question, { field: addressSelect },
                    React.createElement(Select, { ...addressSelect, width: InputTypes.Width.Fixed20 })),
                React.createElement("p", null, typeFullAddressButton)));
        default:
            return (React.createElement(React.Fragment, null,
                React.createElement("fieldset", null,
                    React.createElement(Question, { field: {
                            ...postcodeLookup,
                            error: (lookupError
                                ? [lookupError]
                                : postcodeLookup.error),
                        } },
                        React.createElement(TextInput, { width: InputTypes.Width.Fixed10, ...postcodeLookup, value: enteredPostcode, error: lookupError
                                ? [lookupError]
                                : postcodeLookup.error, attributes: {
                                ...postcodeLookup.attributes,
                                /**
                                 * @param {React.KeyboardEvent} event - The event
                                 * @returns {boolean} - False if event should stop propagating,
                                 *  otherwise true.
                                 */
                                onKeyDown(event) {
                                    if ((event.code === 'Enter'
                                        || event.key === 'Enter'
                                        || event.which === 13)
                                        && !event.altKey
                                        && !event.ctrlKey) {
                                        handleLookup(event);
                                        return false;
                                    }
                                    return true;
                                },
                            } })),
                    React.createElement(Button, { type: ButtonTypes.Type.Submit, className: "ds_no-margin--top", onClick: handleLookup }, "Find address")),
                React.createElement("p", null, typeFullAddressButton)));
    }
};
