import React from 'react';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

import { IconSize } from '../lib/enums';

import Icon from './Icon';

/**
 * @param {DSDS.Component.ConfirmationMessage} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const ConfirmationMessage:React.FC<Omit<DSDS.Component.ConfirmationMessage, 'type'>> = (
    function ConfirmationMessage({
        label,
        className,
        content,
        attributes = {},
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

                <h2
                    className="ds_confirmation-message__title"
                >
                    { htmlToReact(label, false) }
                </h2>
                { content && (
                    <div className="ds_confirmation-message__body">
                        { htmlToReact(content) }
                    </div>
                )}
            </div>
        );
    }
);

export default ConfirmationMessage;
