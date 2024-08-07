'use client';

import React, { useEffect, useRef } from 'react';

import ToTop from '@scottish-government/design-system/src/components/back-to-top/back-to-top';

import Icon from './Icon';

import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.BackToTop} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const BackToTop:React.FC<DSDS.Component.BackToTop> = function BackToTop({
    top = '#page-top',
    footer = '.ds_site-footer',
    content = 'Back to top',
    className,
    ...props
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current || !window) {
            return;
        }

        new ToTop(
            ref.current,
            window,
            { footerElSelector: footer },
        ).init();
    }, [ref, footer]);

    return (
        <div
            className={classNames(
                'ds_back-to-top',
                className,
            )}
            {...props}
            ref={ref}
        >
            <a
                href={top}
                className="ds_back-to-top__button"
            >
                { content }
                <Icon
                    className="ds_back-to-top__icon"
                    icon="arrow_upward"
                />
            </a>
        </div>
    );
};

export default BackToTop;
