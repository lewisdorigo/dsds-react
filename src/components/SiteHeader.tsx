import React from 'react';

import Wrapper from './Wrapper';
import SiteBranding from './SiteBranding';
import PhaseBanner from './PhaseBanner';
import SiteNavigation from './SiteNavigation';

import classNames from '../lib/classNames';

/**
 * @param {ScotGov.Component.SiteHeader} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SiteHeader:React.FC<ScotGov.Component.SiteHeader> = function SiteHead({
    className,
    'aria-label': ariaLabel = 'Site Header',

    branding,
    phase,
    menuItems,

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
                    { menuItems && (
                        <SiteNavigation
                            mobile
                            id="mobile-navigation"
                            aria-label=""
                            menuItems={menuItems}
                        />
                    )}
                </div>
            </Wrapper>
            { phase && <PhaseBanner {...phase} />}
            { menuItems && (
                <div className="ds_site-header__navigation">
                    <Wrapper>
                        <SiteNavigation
                            mobile={false}
                            id="site-navigation"
                            aria-label="Main Menu"
                            menuItems={menuItems}
                        />
                    </Wrapper>
                </div>
            )}
        </header>
    );
};

export default SiteHeader;
