'use client';
import React, { useRef, useEffect } from 'react';
import CharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';
import { WrapperTag } from '../WrapperTag';
import { Label } from '../Label';
import { HintText } from '../HintText';
import { ErrorMessages } from '../ErrorMessage';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.Question} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Question = function Question({ className, children, field, }) {
    const ref = useRef(null);
    const { label: rawLabel, id, type, hintText, content, error, required, attributes: { maxLength = 0, } = {}, } = field;
    let label;
    let labelHidden = false;
    if (rawLabel
        && typeof rawLabel.label !== 'undefined') {
        label = htmlToReact(rawLabel.label, false);
        labelHidden = rawLabel.hidden || false;
    }
    else {
        label = htmlToReact(rawLabel, false);
    }
    label = (React.createElement(React.Fragment, null,
        label,
        !required && (React.createElement(React.Fragment, null,
            ' ',
            React.createElement("span", { className: "sss_optional-label" }, "(optional)")))));
    let tag = 'div';
    switch (type) {
        case 'radio':
        case 'checkbox':
            tag = 'fieldset';
            break;
        case 'date':
            tag = field.multiple ? 'fieldset' : 'div';
            break;
        default:
    }
    useEffect(() => {
        if (!!ref.current || typeof window === 'undefined') {
            return;
        }
        if (maxLength) {
            new CharacterCount(ref.current).init();
        }
    }, [ref, maxLength]);
    return (React.createElement(WrapperTag, { tag: tag, id: `${id}-question`, className: classNames('ds_question', error ? 'ds_question--error' : '', className), "data-module": maxLength ? 'ds-character-count' : undefined, ref: ref },
        (tag === 'div'
            ? (React.createElement(Label, { className: labelHidden ? 'visually-hidden' : '', htmlFor: id }, label))
            : (React.createElement("legend", { className: classNames('ds_label', labelHidden ? 'visually-hidden' : '') }, label))),
        content && htmlToReact(content),
        hintText && React.createElement(HintText, { content: hintText, id: `${id}-hint-text` }),
        error && React.createElement(ErrorMessages, { items: error, id: `${id}-errors` }),
        children));
};
