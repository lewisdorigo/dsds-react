import React from 'react';
import { Wrapper } from '../../components/Wrapper';
import { WrapperTag } from '../../components/WrapperTag';
import { BackToTop } from '../../components/BackToTop';
import { SkipLinks } from '../../components/SkipLinks';
import { JSEnabled } from '../../helpers/JSEnabled';
import classNames from '../../lib/classNames';
/**
 * @param {Types.Page} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Page = function Page({ tag = 'div', className, children, top, middle, bottom, wrapMiddle = true, includeBackToTop = true, includeSkipLinks = true, hasHidePage = false, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(JSEnabled, null),
        hasHidePage && (React.createElement("div", { className: "visually-hidden ds_hide-page" },
            React.createElement("p", null, "To leave the page quickly, press the escape key."))),
        includeSkipLinks && React.createElement(SkipLinks, null),
        React.createElement("span", { id: "page-top" }),
        React.createElement(WrapperTag, { tag: tag, className: classNames('ds_page', className) },
            top && React.createElement("div", { className: "ds_page__top" }, top),
            (middle || children) && (React.createElement("div", { className: "ds_page__middle" }, (wrapMiddle
                ? (React.createElement(Wrapper, null,
                    middle,
                    children))
                : (React.createElement(React.Fragment, null,
                    middle,
                    children))))),
            includeBackToTop && React.createElement(BackToTop, null),
            bottom && React.createElement("div", { className: "ds_page__bottom" }, bottom))));
};
