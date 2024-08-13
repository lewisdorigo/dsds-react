import React from 'react';

export enum Size {
    Small = 'small',
}

export enum Width {
    Flexible = 'flexible',
    Fixed = 'fixed',
    Max = 'max',
}

export enum Style {
    Primary = 'primary',
    Cancel = 'cancel',
    Secondary = 'secondary',
}

export enum IconPosition {
    Left = 'left',
    Right = 'right',
    IconOnly = 'icon-only'
}

export enum Type {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}

interface ButtonBase extends React.PropsWithChildren {
    size?: Size,
    width?: Width,
    style?: Style,

    icon?: string,
    iconPosition?: IconPosition,
    label?: React.ReactNode,
}

interface ButtonAnchor extends ButtonBase, Omit<
    React.HTMLProps<HTMLAnchorElement>,
    'content' | 'label' | 'size' | 'style' | 'width'
> {
    type: never,
    href: string,
}

interface ButtonButton extends ButtonBase, Omit<
    React.HTMLProps<HTMLButtonElement>,
    'content' | 'label' | 'size' | 'style' | 'width' | 'type'
> {
    type?: Type,
}

export type Button = ButtonAnchor | ButtonButton;
