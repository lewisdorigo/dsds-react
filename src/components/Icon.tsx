import React from 'react';

import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.Icon} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Icon:React.FC<DSDS.Component.Icon> = function Icon({
    icon,
    accessible = true,
    className,
    label = '',
    size,
    pathToSvg = '/public/images/icons/icons.stack.svg',
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
                href={`${pathToSvg}#${icon}`}
            />
        </svg>
    );
};

export default Icon;
