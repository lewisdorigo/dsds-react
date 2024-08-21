import React from 'react';
import { WrapperTag } from '../WrapperTag';
import { Heading } from '../Heading';
import classNames from '../../lib/classNames';
import { Button } from '../Button';
/**
 * @param {Types.ButtonGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const ButtonGroup = function ButtonGroup({ id, tag = 'nav', className, label, headingLevel, items = [], children, attributes = {}, }) {
    return (React.createElement(React.Fragment, null,
        label && (React.createElement(Heading, { level: headingLevel }, label)),
        React.createElement(WrapperTag, { id: id, tag: tag, className: classNames('ds_button-group', className), ...attributes },
            items && items.map((item, index) => {
                const key = `${id}-button-${index}`;
                return (React.createElement(React.Fragment, { key: key },
                    React.createElement(Button, { ...item }),
                    ' '));
            }),
            children)));
};
