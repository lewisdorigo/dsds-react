'use client';

import React, { useRef, useEffect } from 'react';

import HideThisPage from '@scottish-government/design-system/src/components/hide-this-page/hide-this-page';

/**
 * @param {DSDS.Component.HidePage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const HidePage:React.FC<DSDS.Component.HidePage> = function HidePage({
    link = 'http://bbc.co.uk/weather',
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current || !window) {
            return;
        }

        new HideThisPage(window).init();
        document.body.classList.add('ds_has-hide-page');
    }, [ref]);

    return (
        <div
            className="ds_hide-page"
            ref={ref}
        >
            <a
                href={link}
                className="ds_hide-page__button ds_button js-hide-page"
            >
                <strong>Hide this page</strong>
                <span className="visually-hidden js-enabled-text">
                    Or press escape key to hide this page
                </span>
            </a>
            <p className="ds_hide-page__text js-enabled-text">(Or press Esc key)</p>
        </div>
    );
};

export default HidePage;
