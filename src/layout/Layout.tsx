import React from 'react';

import WrapperTag from '../components/WrapperTag';

import { LayoutTypes } from '../lib/enums';
import classNames from '../lib/classNames';

/**
 * @param {DSDS.Layout.Layout} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Layout:React.FC<DSDS.Layout.Layout> = function Layout({
    tag = 'main',
    id = 'main-content',
    layout = LayoutTypes.Article,
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
            { sidebar && <div className="ds_layout__sidebar">{ sidebar }</div> }
            { feedback && <div className="ds_layout__feedback">{ feedback }</div> }
        </WrapperTag>
    );
};

export default Layout;
