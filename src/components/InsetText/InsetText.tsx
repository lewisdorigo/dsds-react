import React from 'react';

import { WrapperTag } from '../WrapperTag';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './InsetText.type';

/**
 * @param {Types.InsetText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const InsetText:React.FC<Omit<Types.InsetText, 'type'>> = function InsetText({
    id,
    tag = 'div',
    content,
    children,
    className,
    attributes,
}) {
    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_inset-text',
                className,
            )}
            id={id}
            {...attributes}
        >
            <div className="ds_inset-text__text">
                { content ? htmlToReact(content) : null }
                { children }
            </div>
        </WrapperTag>
    );
};
