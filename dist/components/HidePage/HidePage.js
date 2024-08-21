'use client';
import React, { useRef, useEffect } from 'react';
import HideThisPage from '@scottish-government/design-system/src/components/hide-this-page/hide-this-page';
/**
 * @param {Types.HidePage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const HidePage = function HidePage({ link = 'http://bbc.co.uk/weather', }) {
    const ref = useRef(null);
    useEffect(() => {
        if (!ref.current || !window) {
            return;
        }
        new HideThisPage(window).init();
        document.body.classList.add('ds_has-hide-page');
    }, [ref]);
    return (React.createElement("div", { className: "ds_hide-page", ref: ref },
        React.createElement("a", { href: link, className: "ds_hide-page__button ds_button js-hide-page" },
            React.createElement("strong", null, "Hide this page"),
            React.createElement("span", { className: "visually-hidden js-enabled-text" }, "Or press escape key to hide this page")),
        React.createElement("p", { className: "ds_hide-page__text js-enabled-text" }, "(Or press Esc key)")));
};
