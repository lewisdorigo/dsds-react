import React from 'react';

import Heading from './Heading';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';

/**
 * @param {DSDS.Component.NotificationPanel} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const NotificationPanel:React.FC<
    Omit<DSDS.Component.NotificationPanel, 'type'>
> = function NotificationPanel({
    label = 'Thank you',
    content,
    children,
    success = true,
    className,
    headingLevel = 2,
    attributes = {},
}) {
    return (
        <div
            className={classNames(
                'ds_notification-panel',
                success ? 'ds_notification-panel--success' : '',
                className,
            )}
            {...attributes}
        >
            { label && (
                <Heading
                    level={headingLevel}
                    className="ds_notification-panel__title"
                >
                    { htmlToReact(label, false) }
                </Heading>
            )}
            <div className="ds_notification-panel__content">
                { content && htmlToReact(content) }
                { children }
            </div>
        </div>
    );
};

export default NotificationPanel;
