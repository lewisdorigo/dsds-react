import React from 'react';

import classNames from '../../lib/classNames';

import type * as Types from './Icon.type';

/**
 * @param {Types.Icon} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const Icon:React.FC<Types.Icon> = function Icon({
    icon,
    accessible = true,
    className,
    label = '',
    size,
    pathToSvg = '/design-system/images/icons/icons.stack.svg',
    ...props
}) {
    return (
        <svg
            className={classNames(
                'ds_icon',
                `ds_icon--${icon}`,
                size ? `ds_icon--${size}` : '',
                className,
            )}
            role="img"
            aria-hidden={accessible ? 'false' : 'true'}
            aria-label={label}
            {...props}
        >
            <use
                xlinkHref={`${pathToSvg}#${icon}`}
            />
        </svg>
    );
};
