import React from 'react';
import { WrapperTag } from '../WrapperTag/WrapperTag.type';

export interface PhaseBanner extends WrapperTag {
    phase: string,
    text?: React.ReactNode,
}
