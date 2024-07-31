import React from 'react';

import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.Html} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Html:React.FC<DSDS.Component.Html> = function Html({
    content,
    children,
}) {
    return (
        <>
            { content && htmlToReact(content) }
            { children }
        </>
    );
};

export default Html;
