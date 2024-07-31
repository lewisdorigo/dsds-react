import React from 'react';

import WrapperTag from './WrapperTag';
import Heading from './Heading';
import { ComponentsHelper } from './ComponentHelper'; // eslint-disable-line import/no-cycle

import classNames from '../lib/classNames';

/**
 * @param {DSDS.Component.ButtonGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ButtonGroup:React.FC<Omit<DSDS.Component.ButtonGroup, 'type'>> = function ButtonGroup({
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
                { items && <ComponentsHelper components={items as DSDS.Components} /> }
                { children }
            </WrapperTag>
        </>
    );
};

export default ButtonGroup;
