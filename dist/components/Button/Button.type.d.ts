import React from 'react';
export declare enum Size {
    Small = "small"
}
export declare enum Width {
    Flexible = "flexible",
    Fixed = "fixed",
    Max = "max"
}
export declare enum Style {
    Primary = "primary",
    Cancel = "cancel",
    Secondary = "secondary"
}
export declare enum IconPosition {
    Left = "left",
    Right = "right",
    IconOnly = "icon-only"
}
export declare enum Type {
    Button = "button",
    Submit = "submit",
    Reset = "reset"
}
interface ButtonBase extends React.PropsWithChildren {
    size?: Size;
    width?: Width;
    style?: Style;
    icon?: string;
    iconPosition?: IconPosition;
    label?: React.ReactNode;
}
interface ButtonAnchor extends ButtonBase, Omit<React.HTMLProps<HTMLAnchorElement>, 'content' | 'label' | 'size' | 'style' | 'width'> {
    type: never;
    href: string;
}
interface ButtonButton extends ButtonBase, Omit<React.HTMLProps<HTMLButtonElement>, 'content' | 'label' | 'size' | 'style' | 'width' | 'type'> {
    type?: Type;
}
export type Button = ButtonAnchor | ButtonButton;
export {};
//# sourceMappingURL=Button.type.d.ts.map