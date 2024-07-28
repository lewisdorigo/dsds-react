import React from 'react';

import WrapperTag from '../components/WrapperTag';
import BackToTop from '../components/BackToTop';
import SkipLinks from '../components/SkipLinks';

import classNames from '../lib/classNames';

/**
 * @param {DSDS.Layout.Page} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Page:React.FC<DSDS.Layout.Page> = function Page({
    tag = 'div',
    className,
    children,

    top,
    middle,
    bottom,

    includeBackToTop = true,
    includeSkipLinks = true,
}) {
    return (
        <>
            { includeSkipLinks && <SkipLinks /> }
            <span id="page-top" />
            <WrapperTag
                tag={tag}
                className={classNames(
                    'ds_page',
                    className,
                )}
            >
                { top && <div className="ds_page__top">{ top }</div> }
                { (middle || children) && (
                    <div className="ds_page__middle">
                        { middle }
                        { children }
                    </div>
                )}
                { includeBackToTop && <BackToTop /> }
                { bottom && <div className="ds_page__bottom">{ bottom }</div> }
            </WrapperTag>
        </>
    );
};

export default Page;
