import React from 'react';

import { WrapperTag } from '../WrapperTag';

import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';

import type * as Types from './HintText.type';

/**
 * @param {Types.HintText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const HintText:React.FC<Types.HintText> = function HintText({
    className,
    content,
    children,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_hint-text',
                className,
            )}
            {...props}
        >
            { content && htmlToReact(content) }
            { children }
        </WrapperTag>
    );
};
