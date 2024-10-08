'use client';

import React, { useEffect, useRef } from 'react';
import ToTop from '@scottish-government/design-system/src/components/back-to-top/back-to-top';

import type * as Types from './BackToTop.type';

import { Icon } from '../Icon';

import classNames from '../../lib/classNames';

/**
 * @param {Types.BackToTop} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const BackToTop:React.FC<Types.BackToTop> = function BackToTop({
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
