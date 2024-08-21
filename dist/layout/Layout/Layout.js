import React from 'react';
import { WrapperTag } from '../../components/WrapperTag';
import { HidePage } from '../../components/HidePage';
import classNames from '../../lib/classNames';
import * as Types from './Layout.type';
/**
 * @param {Types.Layout} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Layout = function Layout({ tag = 'main', id = 'main-content', layout = Types.Type.Article, className, children, header, partner, navigation, content, list, grid, footer, sidebar, feedback, hasHidePage = false, }) {
    return (React.createElement(WrapperTag, { tag: tag, id: id, className: classNames('ds_layout', layout ? `ds_layout--${layout}` : '', className) },
        header && React.createElement("div", { className: "ds_layout__header" }, header),
        partner && React.createElement("div", { className: "ds_layout__partner" }, partner),
        navigation && React.createElement("div", { className: "ds_layout__navigation" }, navigation),
        (content || children) && (React.createElement("div", { className: "ds_layout__content" },
            content,
            children)),
        list && React.createElement("div", { className: "ds_layout__list" }, list),
        grid && React.createElement("div", { className: "ds_layout__grid" }, grid),
        footer && React.createElement("div", { className: "ds_layout__footer" }, footer),
        (sidebar || hasHidePage) && (React.createElement("div", { className: "ds_layout__sidebar" },
            hasHidePage && React.createElement(HidePage, null),
            sidebar)),
        feedback && React.createElement("div", { className: "ds_layout__feedback" }, feedback)));
};
