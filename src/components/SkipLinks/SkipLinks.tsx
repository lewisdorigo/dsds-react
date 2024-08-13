import React from 'react';

import classNames from '../../lib/classNames';

import type { SkipLinks } from './SkipLinks.type';

/**
 * @param {SkipLinks} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const SkipLinks:React.FC<SkipLinks> = function SkipLinks({
    mainContent = '#main-content',
    items = [],
    className,
    ...props
}) {
    return (
        <div
            className={classNames(
                'ds_skip-links',
                className,
            )}
            {...props}
        >
            <ul className="ds_skip-links__list">
                <li className="ds_skip-links__item">
                    <a href={mainContent} className="ds_skip-links__link">
                        Skip to main content
                    </a>
                </li>

                { items.map(({ href, label }, index) => {
                    const key = `skip-links-${index}`;
                    return (
                        <li
                            className="ds_skip-links__item"
                            key={key}
                        >
                            <a href={href} className="ds_skip-links__link">
                                { label }
                            </a>
                        </li>
                    );
                }) }
            </ul>
        </div>
    );
};

export default SkipLinks;
