import type React from 'react';
import type { Component } from '../../utils/types';
export interface FormNavButton {
    enabled?: boolean;
    label?: React.ReactNode;
    href?: string;
}
export interface FormNav extends Omit<Component<'form-nav', HTMLDivElement>, 'label' | 'content'> {
    back: boolean | FormNavButton;
    next: boolean | FormNavButton;
}
//# sourceMappingURL=FormNav.type.d.ts.map