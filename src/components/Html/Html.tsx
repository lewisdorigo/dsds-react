import React from 'react';

import { Heading } from '../Heading';

import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './Html.type';

/**
 * @param {Types.Html} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Html:React.FC<Types.Html> = function Html({
    label,
    headingLevel,
    content,
    children,
}) {
    return (
        <>
            { label && <Heading level={headingLevel}>{ label }</Heading>}
            { content && htmlToReact(content) }
            { children }
        </>
    );
};
