'use client';

import React, { useRef, useEffect } from 'react';
import CharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';

import WrapperTag from '../components/WrapperTag';

import Label from './Label';
import HintText from './HintText';
import { ErrorMessages } from './ErrorMessage';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Form.Question} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Question:React.FC<DSDS.Form.Question> = function Question({
    className,
    children,
    field,
}) {
    const ref = useRef<HTMLDivElement>(null);

    const {
        label: rawLabel,
        id,
        type,
        hintText,
        content,
        error,
        required,
        attributes: {
            maxLength = 0,
        } = {},
    } = field;

    let label:React.ReactNode;
    let labelHidden:boolean = false;

    if (
        rawLabel
        && typeof (rawLabel as DSDS.Meta.Label).label !== 'undefined'
    ) {
        label = htmlToReact((rawLabel as DSDS.Meta.Label).label);
        labelHidden = (rawLabel as DSDS.Meta.Label).hidden || false;
    } else {
        label = htmlToReact(rawLabel as React.ReactNode);
    }

    label = (
        <>
            { label }
            { !required && (
                <>
                    {' '}
                    <span className="sss_optional-label">(optional)</span>
                </>
            )}
        </>
    );

    let tag:keyof JSX.IntrinsicElements = 'div';

    switch (type) {
        case 'radio':
        case 'checkbox':
            tag = 'fieldset';
            break;

        case 'date':
            tag = (field as DSDS.Form.DatePicker).multiple ? 'fieldset' : 'div';
            break;

        default:
    }

    useEffect(() => {
        if (typeof window === 'undefined') { return; }

        if (maxLength) {
            const characterCount = new CharacterCount(ref.current);
            characterCount.init();
        }
    }, [ref, maxLength]);

    return (
        <WrapperTag
            tag={tag}
            id={`${id}-question`}
            className={classNames(
                'ds_question',
                error ? 'ds_question--error' : '',
                className,
            )}
            data-module={maxLength ? 'ds-character-count' : undefined}
            ref={ref}
        >
            {(
                tag === 'div'
                    ? (
                        <Label
                            className={labelHidden ? 'visually-hidden' : ''}
                            htmlFor={id}
                        >
                            { label }
                        </Label>
                    )
                    : (
                        <legend
                            className={classNames(
                                'ds_label',
                                labelHidden ? 'visually-hidden' : '',
                            )}
                        >
                            { label }
                        </legend>
                    )
            )}
            { content && htmlToReact(content) }
            { hintText && <HintText text={hintText} id={`${id}-hintText`} /> }
            { error && <ErrorMessages errors={error} /> }
            { children }
        </WrapperTag>
    );
};

export default Question;
