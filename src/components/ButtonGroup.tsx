import React from 'react';

import WrapperTag from './WrapperTag';
import Heading from './Heading';

import classNames from '../lib/classNames';
import Button from './Button';

/**
 * @param {DSDS.Component.ButtonGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ButtonGroup:React.FC<Omit<DSDS.Component.ButtonGroup, 'type'>> = function ButtonGroup({
    id,
    tag = 'nav',
    className,
    label,
    headingLevel,
    items = [],
    children,
    attributes = {},
}) {
    return (
        <>
            { label && (
                <Heading level={headingLevel}>{ label }</Heading>
            )}
            <WrapperTag
                tag={tag}
                className={classNames(
                    'ds_button-group',
                    className,
                )}
                {...attributes}
            >
                { items && items.map((item, index) => {
                    const key = `${id}-button-${index}`;
                    return (
                        <Button key={key} {...item} />
                    );
                })}

                { children }
            </WrapperTag>
        </>
    );
};

export default ButtonGroup;
