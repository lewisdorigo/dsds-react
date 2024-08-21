'use client';

import React from 'react';

import { Wrapper } from '../Wrapper';
import { WrapperTag } from '../WrapperTag';
import { Tag } from '../Tag';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import type * as Types from './PhaseBanner.type';

/**
 * @param {Types.PhaseBanner} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const PhaseBanner:React.FC<Types.PhaseBanner> = function PhaseBanner({
    phase = 'alpha',
    className,
    children,
    text,
    ...props
}) {
    return (
        <WrapperTag
            className={classNames(
                'ds_phase-banner',
                className,
            )}
            {...props}
        >
            <Wrapper>
                <div className="ds_phase-banner__content">
                    <Tag className="ds_phase-banner__tag" tag="strong">
                        { phase }
                    </Tag>

                    <span className="ds_phase-banner__text">
                        { text && htmlToReact(text, false) }
                        { children }
                    </span>
                </div>
            </Wrapper>
        </WrapperTag>
    );
};
