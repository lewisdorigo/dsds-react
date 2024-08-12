import React from 'react';

import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';

import Icon from '../Icon';
import { IconSize } from '../Icon/Icon.type';

import Heading from '../Heading';

import type { ConfirmationMessage } from './ConfirmationMessage.type';

/**
 * @param {ConfirmationMessage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ConfirmationMessage:React.FC<
    Omit<ConfirmationMessage, 'type'>
> = function ConfirmationMessage({
    label,
    className,
    content,
    attributes = {},
    headingLevel = 2,
}) {
    return (
        <div
            className={classNames(
                'ds_confirmation-message',
                className,
            )}
            aria-live="polite"
            {...attributes}
        >
            <Icon
                className="ds_confirmation-message__icon"
                icon="check_circle"
                size={IconSize.TwentyFour}
            />

            <Heading
                level={headingLevel}
                className="ds_confirmation-message__title"
            >
                { htmlToReact(label, false) }
            </Heading>

            { content && (
                <div className="ds_confirmation-message__body">
                    { htmlToReact(content) }
                </div>
            )}
        </div>
    );
};

export default ConfirmationMessage;
