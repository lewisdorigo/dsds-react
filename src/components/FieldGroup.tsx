import React, { forwardRef } from 'react';

import Heading from './Heading';
import HintText from './HintText';
import WrapperTag from './WrapperTag';
import { ComponentsHelper } from './ComponentHelper'; // eslint-disable-line import/no-cycle

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * Wraps any given children in a given `tag`.
 *
 * @param {DSDS.Component.FieldGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
// eslint-disable-next-line prefer-arrow-callback
const FieldGroup = forwardRef<HTMLElement, DSDS.Component.FieldGroup>(function FieldGroup({
    type = 'group',
    tag: rawTag,
    className,
    children,
    content,
    id,
    label = '',
    headingLevel = 2,
    inline = false,
    hintText,
    items,
    attributes = {},
}, ref) {
    let tag;

    if (rawTag) {
        tag = rawTag;
    } else {
        tag = type === 'group' ? 'div' : 'fieldset';
    }

    return (
        <WrapperTag
            {...attributes}
            id={id}
            tag={tag as keyof JSX.IntrinsicElements}
            className={classNames(
                'ds_field-group',
                inline ? 'ds_field-group--inline' : '',
                className,
            )}
            ref={ref}
        >
            { label && (
                <Heading
                    level={headingLevel}
                    isLegend={type === 'fieldset'}
                >
                    { label }
                </Heading>
            )}

            { content && htmlToReact(content) }
            { hintText && <HintText content={hintText} /> }
            { children }

            { items && <ComponentsHelper components={items} /> }
        </WrapperTag>
    );
});

export default FieldGroup;
