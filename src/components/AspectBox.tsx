import React from 'react';

import WrapperTag from './WrapperTag';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.AspectBox} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const AspectBox:React.FC<Omit<DSDS.Component.AspectBox, 'type'>> = function AspectBox({
    tag = 'div',
    ratio,
    children,
    content,
    attributes = {},
}) {
    return (
        <WrapperTag
            tag={tag}
            className={classNames(
                'ds_aspect-box',
                ratio ? `ds_aspect-box--${ratio}` : '',
            )}
            {...attributes}
        >
            { content && htmlToReact(content) }
            { children }
        </WrapperTag>
    );
};

export default AspectBox;
