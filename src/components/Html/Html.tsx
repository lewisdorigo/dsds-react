import React from 'react';

import Heading from '../Heading';

import htmlToReact from '../../lib/htmlToReact';

import type { Html } from './Html.type';

/**
 * @param {Html} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Html:React.FC<Html> = function Html({
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

export default Html;
