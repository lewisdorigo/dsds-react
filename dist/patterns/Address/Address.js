'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Question_1 = __importDefault(require("../../components/Question"));
const TextInput_1 = __importDefault(require("../../components/TextInput"));
const Select_1 = __importDefault(require("../../components/Select"));
const Button_1 = __importDefault(require("../../components/Button"));
const Link_1 = __importDefault(require("../../components/Link"));
const PrefilledValues_1 = __importDefault(require("../../components/PrefilledValues"));
const Address_type_1 = require("./Address.type");
const TextInput_type_1 = require("../../components/TextInput/TextInput.type");
const Button_type_1 = require("../../components/Button/Button.type");
/**
 * @param {Address} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Address = function Address({ id, state: rawState, lookup, items: { postcodeLookup, addressSelect, address1, address2, city, county, country, postcode, }, labels: { fullAddressBtn = 'Or type in your full address', returnToLookupBtn = 'Return to postcode lookup', fullAddress = 'Tell us your full address', } = {}, }) {
    const stateParam = (0, react_1.useMemo)(() => `${id}-state`, [id]);
    const initialState = (0, react_1.useMemo)(() => {
        if (rawState) {
            return rawState;
        }
        if (address1.value) {
            return Address_type_1.AddressState.EnterAddress;
        }
        if (addressSelect.value) {
            return Address_type_1.AddressState.SelectAddress;
        }
        return Address_type_1.AddressState.PostcodeLookup;
    }, [rawState, addressSelect.value, address1.value]);
    const [formState, setFormState] = (0, react_1.useState)({
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
    const typeFullAddressButton = (react_1.default.createElement(Link_1.default, { href: `?${stateParam}=address`, className: "ds_no-margin", onClick: (event) => {
            event.preventDefault();
            setFormState({
                ...formState,
                postcode: '',
                error: undefined,
                state: Address_type_1.AddressState.EnterAddress,
            });
        } }, fullAddressBtn));
    switch (state) {
        case Address_type_1.AddressState.EnterAddress:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("p", null,
                    react_1.default.createElement(Link_1.default, { href: "?", className: "ds_link ds_no-margin", onClick: (event) => {
                            event.preventDefault();
                            setFormState({
                                ...formState,
                                postcode: '',
                                error: undefined,
                                state: Address_type_1.AddressState.PostcodeLookup,
                            });
                        } }, returnToLookupBtn)),
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement("legend", null, fullAddress),
                    react_1.default.createElement(Question_1.default, { field: {
                            ...address1,
                            label: (react_1.default.createElement(react_1.default.Fragment, null,
                                "Building and street",
                                ' ',
                                react_1.default.createElement("span", { className: "visually-hidden" }, "line 1 of 2"))),
                        } },
                        react_1.default.createElement(TextInput_1.default, { ...address1 })),
                    react_1.default.createElement(Question_1.default, { field: {
                            ...address2,
                            label: {
                                label: (react_1.default.createElement(react_1.default.Fragment, null,
                                    "Building and street",
                                    ' ',
                                    react_1.default.createElement("span", { className: "visually-hidden" }, "line 2 of 2"))),
                                hidden: true,
                            },
                        } },
                        react_1.default.createElement(TextInput_1.default, { ...address2 })),
                    react_1.default.createElement(Question_1.default, { field: {
                            ...city,
                            label: 'City or town',
                        } },
                        react_1.default.createElement(TextInput_1.default, { ...city })),
                    county && (react_1.default.createElement(Question_1.default, { field: {
                            ...county,
                            label: 'County',
                        } },
                        react_1.default.createElement(TextInput_1.default, { ...county }))),
                    country && (react_1.default.createElement(Question_1.default, { field: {
                            ...country,
                            label: 'County',
                        } },
                        react_1.default.createElement(Select_1.default, { ...country }))),
                    react_1.default.createElement(Question_1.default, { field: postcode },
                        react_1.default.createElement(TextInput_1.default, { width: TextInput_type_1.InputWidth.Fixed10, ...postcode })))));
        case Address_type_1.AddressState.SelectAddress:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(PrefilledValues_1.default, { items: [
                        {
                            id: 'entered-postcode',
                            label: 'Postcode',
                            value: enteredPostcode,
                            actions: [
                                (react_1.default.createElement(Link_1.default, { href: "?", key: "entered-postcode-action", className: "ds_prefilled-value-list__value-actions", onClick: (e) => {
                                        e.preventDefault();
                                        setFormState({
                                            ...formState,
                                            postcode: '',
                                            error: undefined,
                                            state: Address_type_1.AddressState.PostcodeLookup,
                                        });
                                    } },
                                    "Change",
                                    ' ',
                                    react_1.default.createElement("span", { className: "visually-hidden" },
                                        "your answer for:",
                                        ' ',
                                        react_1.default.createElement("q", null, "Postcode")))),
                            ],
                        },
                    ] }),
                react_1.default.createElement(Question_1.default, { field: addressSelect },
                    react_1.default.createElement(Select_1.default, { ...addressSelect, width: TextInput_type_1.InputWidth.Fixed20 })),
                react_1.default.createElement("p", null, typeFullAddressButton)));
        default:
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("fieldset", null,
                    react_1.default.createElement(Question_1.default, { field: {
                            ...postcodeLookup,
                            error: (lookupError
                                ? [lookupError]
                                : postcodeLookup.error),
                        } },
                        react_1.default.createElement(TextInput_1.default, { width: TextInput_type_1.InputWidth.Fixed10, ...postcodeLookup, value: enteredPostcode, error: lookupError
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
                    react_1.default.createElement(Button_1.default, { type: Button_type_1.Type.Submit, className: "ds_no-margin--top", onClick: handleLookup }, "Find address")),
                react_1.default.createElement("p", null, typeFullAddressButton)));
    }
};
exports.default = Address;
