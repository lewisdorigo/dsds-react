import React from 'react';

import WrapperTag from './WrapperTag';

import htmlToReact from '../lib/htmlToReact';
import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.HintText} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const HintText:React.FC<DSDS.Component.HintText> = function HintText({
    className,
    text,
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
            { text && htmlToReact(text) }
            { children }
        </WrapperTag>
    );
};

export default HintText;