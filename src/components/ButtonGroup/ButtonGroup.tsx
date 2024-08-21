import React from 'react';

import { WrapperTag } from '../WrapperTag';
import { Heading } from '../Heading';

import classNames from '../../lib/classNames';
import { Button } from '../Button';

import type * as Types from './ButtonGroup.type';

/**
 * @param {Types.ButtonGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ButtonGroup:React.FC<Omit<Types.ButtonGroup, 'type'>> = function ButtonGroup({
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
                id={id}
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
                        <React.Fragment key={key}>
                            <Button {...item} />
                            {' '}
                        </React.Fragment>
                    );
                })}

                { children }
            </WrapperTag>
        </>
    );
};
