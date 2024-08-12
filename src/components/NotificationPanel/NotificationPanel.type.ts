import React from 'react';
import { Component } from '../../utils/types';

export interface NotificationPanel extends Component<
    'notification-panel',
    HTMLDivElement
>, React.PropsWithChildren {
    label?: React.ReactNode,
    success?: boolean,
}
