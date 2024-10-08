import React from 'react';
import { Component } from '../../utils/types';
import { Image } from '../Image/Image.type';
export declare enum Style {
    Wide = "wide"
}
export interface FeatureHeader extends React.PropsWithChildren, Omit<Component<'feature-header', HTMLDivElement>, 'label'> {
    title: React.ReactNode;
    image?: Omit<Image, 'type'>;
    hasBackground?: boolean;
    style: Style;
}
//# sourceMappingURL=FeatureHeader.type.d.ts.map