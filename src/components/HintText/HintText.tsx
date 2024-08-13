import React from 'react';

import WrapperTag from '../WrapperTag';

import htmlToReact from '../../lib/htmlToReact';
import classNames from '../../lib/classNames';

import type { HintText } from './HintText.type';

/**
 * @param {HintText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const HintText:React.FC<HintText> = function HintText({
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

export default HintText;
