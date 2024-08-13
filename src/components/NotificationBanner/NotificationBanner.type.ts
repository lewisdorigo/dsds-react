import React from 'react';
import { Component } from '../../utils/types';

export interface NotificationBanner extends Component<
    'notification-banner',
    HTMLDivElement
>, React.PropsWithChildren {
    label?: React.ReactNode,
    icon?: boolean | string,
    hasClose?: boolean,
}
