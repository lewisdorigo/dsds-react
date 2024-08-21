import React from 'react';

import { Link } from '../Link';
import { Wrapper } from '../Wrapper';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './SiteFooter.type';

/**
 * @param {Types.SiteFooterLinks} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooterLinks:React.FC<
    Types.SiteFooterLinks
> = function SiteFooterLinks({
    menuItems,
}) {
    return (
        <ul className="ds_site-footer__site-items">
            {
                menuItems && menuItems.map((link, index) => {
                    if (!link.href) { return []; }
                    const key = `site-foot-links-${index}`;

                    return (
                        <li className="ds_site-items__item" key={key}>
                            <Link {...link} tabText={false} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

/**
 * @param {Types.SiteFooterCopyright} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooterCopyright:React.FC<
    Types.SiteFooterCopyright
> = function SiteFooterCopyright({
    logo: {
        link,
        ...logo
    } = {},
    content,
}) {
    let logoElement;

    if (logo && logo.src && link) {
        logoElement = (
            <a
                className="copyrightText ds_site-footer-logo"
                href={link}
            >
                <img alt="" {...logo} />
            </a>
        );
    } else if (logo && logo.src) {
        logoElement = (
            <span className="copyrightText ds_site-footer-logo">
                <img alt="" {...logo} />
            </span>
        );
    }

    return (
        <div
            className={classNames(
                'ds_site-footer__copyright',
                `ds_site-footer__copyright--${!logoElement ? 'no' : 'has'}-logo`,
            )}
        >
            { logoElement }
            { content && htmlToReact(content) }
        </div>
    );
};

/**
 * @param {Types.SiteFooterOrganisation} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooterOrganisation:React.FC<
    Types.SiteFooterOrganisation
> = function SiteFooterOrg({
    logo: {
        link,
        ...logo
    },
}) {
    const logoElem:React.ReactNode = (
        <img alt="" {...logo} />
    );

    let logoElement:React.ReactNode;

    if (link) {
        logoElement = (
            <a className="ds_site-footer__org-link" href={link}>
                {logoElem}
            </a>
        );
    } else {
        logoElement = logoElem;
    }

    return (
        <div className="ds_site-footer__org">
            { logoElement }
        </div>
    );
};

/**
 * @param {Types.SiteFooter} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteFooter:React.FC<Types.SiteFooter> = function SiteFooter({
    menuItems,
    copyright,
    organisation,
    className,
    'aria-label': ariaLabel = 'Site Footer',
    ...props
}) {
    return (
        <footer
            className={classNames(
                'ds_site-footer',
                className,
            )}
            aria-label={ariaLabel}
            {...props}
        >
            <Wrapper>
                <div className="ds_site-footer__content">
                    { menuItems && menuItems.length > 0 && (
                        <SiteFooterLinks menuItems={menuItems} />
                    )}
                    { copyright && <SiteFooterCopyright {...copyright} /> }
                    { organisation && <SiteFooterOrganisation {...organisation} /> }
                </div>
            </Wrapper>
        </footer>
    );
};
