import React from 'react';
import { WrapperTag } from '../WrapperTag/WrapperTag.type';

export interface HintText extends Omit<WrapperTag, 'content'> {
    content?: React.ReactNode,
}
