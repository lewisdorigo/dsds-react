import React from 'react';
import { Heading } from '../Heading';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.Html} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Html = function Html({ label, headingLevel, content, children, }) {
    return (React.createElement(React.Fragment, null,
        label && React.createElement(Heading, { level: headingLevel }, label),
        content && htmlToReact(content),
        children));
};
