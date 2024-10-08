import React from 'react';

import { WrapperTag } from '../../components/WrapperTag';
import { HidePage } from '../../components/HidePage';

import classNames from '../../lib/classNames';

import * as Types from './Layout.type';

/**
 * @param {Types.Layout} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Layout:React.FC<Types.Layout> = function Layout({
    tag = 'main',
    id = 'main-content',
    layout = Types.Type.Article,
    className,
    children,

    header,
    partner,
    navigation,
    content,
    list,
    grid,
    footer,
    sidebar,
    feedback,

    hasHidePage = false,
}) {
    return (
        <WrapperTag
            tag={tag}
            id={id}
            className={classNames(
                'ds_layout',
                layout ? `ds_layout--${layout}` : '',
                className,
            )}
        >
            { header && <div className="ds_layout__header">{ header }</div> }
            { partner && <div className="ds_layout__partner">{ partner }</div> }
            { navigation && <div className="ds_layout__navigation">{ navigation }</div> }
            { (content || children) && (
                <div className="ds_layout__content">
                    { content }
                    { children }
                </div>
            )}
            { list && <div className="ds_layout__list">{ list }</div> }
            { grid && <div className="ds_layout__grid">{ grid }</div> }
            { footer && <div className="ds_layout__footer">{ footer }</div> }
            { (sidebar || hasHidePage) && (
                <div className="ds_layout__sidebar">
                    { hasHidePage && <HidePage /> }
                    { sidebar }
                </div>
            )}
            { feedback && <div className="ds_layout__feedback">{ feedback }</div> }
        </WrapperTag>
    );
};
