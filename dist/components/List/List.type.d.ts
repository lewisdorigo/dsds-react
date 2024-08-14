import React from 'react';
import { Component } from '../../utils/types';
export interface List extends Omit<Component<'list', HTMLOListElement | HTMLUListElement, React.ReactNode>, 'label' | 'content' | 'headingLevel'> {
    ordered?: boolean;
    id?: string;
}
//# sourceMappingURL=List.type.d.ts.map