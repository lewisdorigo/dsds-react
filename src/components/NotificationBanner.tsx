'use client';

import React, { useState, useMemo } from 'react';

// import Notification from '@scottish-government/design-system/src/components/notification-banner/notification-banner';

import Wrapper from './Wrapper';
import Heading from './Heading';
import Icon from './Icon';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';
import { IconSize } from '../lib/enums';

/**
 * @param {DSDS.Component.NotificationBanner} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const NotificationBanner:React.FC<
    Omit<DSDS.Component.NotificationBanner, 'type'>
> = function NotificationBanner({
    id = 'notification-banner',
    label = 'Information',
    icon: hasIcon,
    content,
    children,
    hasClose = true,
    className,
    headingLevel,
    attributes: {
        'aria-label': ariaLabel = 'Notification',
        ...attributes
    } = {},
}) {
    const [isVisible, setVisible] = useState<boolean>(true);

    // const ref = useRef(null);

    const icon = useMemo(() => {
        if (typeof hasIcon === 'string') {
            return hasIcon;
        }

        return hasIcon ? 'priority_high' : false;
    }, [hasIcon]);

    if (!isVisible) {
        return false;
    }

    return (
        <div
            className={classNames(
                'ds_notification',
                'ds_reversed',
                className,
            )}
            id={id}
            aria-label={ariaLabel}
            {...attributes}
        >
            <Wrapper>
                <div
                    className={classNames(
                        'ds_notification__content',
                        hasClose ? 'ds_notification__content--has-close' : '',
                    )}
                >
                    { label && (
                        <Heading
                            level={headingLevel}
                            className="visually-hidden"
                        >
                            { htmlToReact(label, false) }
                        </Heading>
                    )}
                    { icon && (
                        <span
                            className={classNames(
                                'ds_notification__icon',
                                'ds_notification__icon--inverse',
                                'ds_notification__icon--colour',
                            )}
                            aria-hidden="true"
                        >
                            <Icon icon={icon} size={IconSize.Fill} accessible={false} />
                        </span>
                    )}
                    <div className="ds_notification__text">
                        { content && htmlToReact(content) }
                        { children }
                    </div>

                    { hasClose && (
                        <button
                            className={classNames(
                                'ds_notification__close',
                                'js-close-notification',
                            )}
                            type="button"
                            aria-controls={id}
                            onClick={(e) => {
                                e.preventDefault();
                                setVisible(false);
                            }}
                            // ref={notification}
                        >
                            <span className="visually-hidden">Close this notification</span>
                            <Icon icon="close" size={IconSize.Fill} accessible={false} />
                        </button>
                    )}
                </div>
            </Wrapper>
        </div>
    );
};

export default NotificationBanner;
