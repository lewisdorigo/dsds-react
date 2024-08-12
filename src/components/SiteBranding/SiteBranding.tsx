import React from 'react';

import Link from '../Link';

import htmlToReact from '../../lib/htmlToReact';

import type { SiteBranding } from './SiteBranding.type';

/**
 * @param {SiteBranding} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteBranding:React.FC<SiteBranding> = function SiteBranding({
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

export default SiteBranding;
