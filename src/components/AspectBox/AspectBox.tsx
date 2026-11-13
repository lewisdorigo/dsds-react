import React from 'react';

import { WrapperTag } from '../WrapperTag';

import addClassToElement from '../../lib/addClass';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './AspectBox.type';

/**
 * @param {Types.AspectBox} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const AspectBox:React.FC<Omit<Types.AspectBox, 'type'>> = function AspectBox({
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
            { content && React.Children.map<React.ReactNode, React.ReactNode>(
                htmlToReact(content),
                (item) => addClassToElement(item, 'ds_aspect-box__inner'),
            )}

            { React.Children.map<React.ReactNode, React.ReactNode>(
                children,
                (item) => addClassToElement(item, 'ds_aspect-box__inner'),
            )}
        </WrapperTag>
    );
};
