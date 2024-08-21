'use client';
import React from 'react';
import { Wrapper } from '../Wrapper';
import { WrapperTag } from '../WrapperTag';
import { Tag } from '../Tag';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.PhaseBanner} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const PhaseBanner = function PhaseBanner({ phase = 'alpha', className, children, text, ...props }) {
    return (React.createElement(WrapperTag, { className: classNames('ds_phase-banner', className), ...props },
        React.createElement(Wrapper, null,
            React.createElement("div", { className: "ds_phase-banner__content" },
                React.createElement(Tag, { className: "ds_phase-banner__tag", tag: "strong" }, phase),
                React.createElement("span", { className: "ds_phase-banner__text" },
                    text && htmlToReact(text, false),
                    children)))));
};
