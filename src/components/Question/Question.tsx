'use client';

import React, { useRef, useEffect } from 'react';
import CharacterCount from '@scottish-government/design-system/src/forms/character-count/character-count';

import { WrapperTag } from '../WrapperTag';

import { Label, Types as LabelTypes } from '../Label';
import { Types as DatePickerTypes } from '../DatePicker';
import { HintText } from '../HintText';
import { ErrorMessages } from '../ErrorMessage';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './Question.type';

/**
 * @param {Types.Question} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Question:React.FC<Types.Question> = function Question({
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
        && typeof (rawLabel as LabelTypes.Label).label !== 'undefined'
    ) {
        label = htmlToReact((rawLabel as LabelTypes.Label).label, false);
        labelHidden = (rawLabel as LabelTypes.Label).hidden || false;
    } else {
        label = htmlToReact(rawLabel as React.ReactNode, false);
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
            tag = (field as DatePickerTypes.DatePicker).multiple ? 'fieldset' : 'div';
            break;

        default:
    }

    useEffect(() => {
        if (!!ref.current || typeof window === 'undefined') { return; }

        if (maxLength) {
            new CharacterCount(ref.current).init();
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
            { hintText && <HintText content={hintText} id={`${id}-hint-text`} /> }
            { error && <ErrorMessages items={error} id={`${id}-errors`} /> }
            { children }
        </WrapperTag>
    );
};
