import React from 'react';
import { Component } from '../../utils/types';
import { Button } from '../Button/Button.type';
export interface NotificationBanner extends Component<'notification-banner', HTMLDivElement>, React.PropsWithChildren {
    label?: React.ReactNode;
    icon?: boolean | string;
    actions?: Button[];
    hasClose?: boolean;
    closeAction?: React.MouseEventHandler<HTMLButtonElement>;
}
//# sourceMappingURL=NotificationBanner.type.d.ts.map