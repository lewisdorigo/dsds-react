import React from 'react';
import type { Component } from '../../utils/types';
import { AspectRatio } from '../AspectBox/AspectBox.type';

interface ImageSource extends React.HTMLProps<HTMLSourceElement> {}

export interface Image extends Omit<
    Component<
        'image',
        HTMLImageElement
    >,
    'label' | 'content' | 'headingLevel'
> {
    alt?: string,
    src: string,
    srcSet?: string,
    caption?: React.ReactNode,
    ratio?: true | AspectRatio,
    sources?: ImageSource[],
}
