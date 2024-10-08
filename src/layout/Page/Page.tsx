import React from 'react';

import { Wrapper } from '../../components/Wrapper';
import { WrapperTag } from '../../components/WrapperTag';
import { BackToTop } from '../../components/BackToTop';
import { SkipLinks } from '../../components/SkipLinks';
import { JSEnabled } from '../../helpers/JSEnabled';

import classNames from '../../lib/classNames';

import type * as Types from './Page.type';

/**
 * @param {Types.Page} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Page:React.FC<Types.Page> = function Page({
    tag = 'div',
    className,
    children,

    top,
    middle,
    bottom,

    wrapMiddle = true,
    includeBackToTop = true,
    includeSkipLinks = true,
    hasHidePage = false,
}) {
    return (
        <>
            <JSEnabled />
            { hasHidePage && (
                <div className="visually-hidden ds_hide-page">
                    <p>
                        To leave the page quickly, press the escape key.
                    </p>
                </div>
            ) }
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
                        {(
                            wrapMiddle
                                ? (
                                    <Wrapper>
                                        { middle }
                                        { children }
                                    </Wrapper>
                                )
                                : (
                                    <>
                                        { middle }
                                        { children }
                                    </>
                                )
                        )}
                    </div>
                )}
                { includeBackToTop && <BackToTop /> }
                { bottom && <div className="ds_page__bottom">{ bottom }</div> }
            </WrapperTag>
        </>
    );
};
