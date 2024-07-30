import React from 'react';

import Wrapper from './Wrapper';
import SiteBranding from './SiteBranding';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.SiteHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteHeader:React.FC<ScotGov.Component.SiteHeader> = function SiteHead({
    className,
    branding,
    'aria-label': ariaLabel = 'Site Header',
    ...props
}) {
    return (
        <header
            className={classNames(
                'ds_site-header',
                className,
            )}
            aria-label={ariaLabel}
            {...props}
        >
            <Wrapper>
                <div className="ds_site-header__content">
                    <SiteBranding {...branding} />
                </div>
            </Wrapper>
        </header>
    );
};

export default SiteHeader;
