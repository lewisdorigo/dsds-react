import React from 'react';
import NextLink from 'next/link';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.Link} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Link:React.FC<DSDS.Component.Link> = function Link({
    content,
    href,
    type,
    target,
    className,
    baseClass = 'ds_link',
    rel,
    children,
    tabText = true,
    ...props
}) {
    const linkRel = (
        href
        && (
            target === '_blank'
            || target === '_new'
        )
            ? 'noreferrer noopener'
            : ''
    );
    const newTabText = (
        typeof tabText === 'string'
            ? tabText
            : '(opens in a new tab)'
    );

    const linkContent = (
        <>
            { content && htmlToReact(content, false) }
            { children }
            { (target === '_blank' || target === '_new') && (
                <>
                    { tabText && ` ${newTabText}` }
                    { !tabText && <span className="visually-hidden">{ newTabText }</span> }
                </>
            )}
        </>
    );

    if (href) {
        return (
            <NextLink
                {...props as React.HTMLProps<HTMLAnchorElement>}
                className={classNames(
                    baseClass,
                    className,
                )}
                href={href}
                target={target}
                rel={rel || linkRel}
            >
                { linkContent }
            </NextLink>
        );
    }

    return (
        <button
            {...props as React.HTMLProps<HTMLButtonElement>}
            type={type}
            className={classNames(
                baseClass,
                className,
            )}
        >
            { linkContent }
        </button>
    );
};

export default Link;
