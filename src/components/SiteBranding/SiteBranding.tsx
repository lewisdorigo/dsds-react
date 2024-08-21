import React from 'react';

import { Link } from '../Link';

import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './SiteBranding.type';

/**
 * @param {Types.SiteBranding} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const SiteBranding:React.FC<Types.SiteBranding> = function SiteBranding({
    title,
    logo,
    smallLogo,
    siteName,
}) {
    return (
        <div className="ds_site-branding">
            <Link
                className="ds_site-branding__logo ds_site-branding__link"
                href="/"
            >
                {(
                    smallLogo
                        ? (
                            <picture>
                                <source srcSet={logo} media="(min-width: 768px)" />
                                <img
                                    className="ds_site-branding__logo-image"
                                    src={smallLogo}
                                    alt={siteName}
                                />
                            </picture>
                        )
                        : (
                            <img
                                className="ds_site-branding__logo-image"
                                src={logo}
                                alt={siteName}
                            />
                        )
                )}
            </Link>
            {title && (
                <div className="ds_site-branding__title">
                    { htmlToReact(title, false) }
                </div>
            )}
        </div>
    );
};
