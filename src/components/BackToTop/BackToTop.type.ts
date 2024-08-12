import React from 'react';

export interface BackToTop extends React.HTMLProps<HTMLDivElement> {
    top?: string,
    footer?: string,
    content?: string,
}
