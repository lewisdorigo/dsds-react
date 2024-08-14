import { Component } from '../../utils/types';
import { WrapperTag } from '../WrapperTag/WrapperTag.type';
import { Errors } from '../../utils/types/validation';
export interface ErrorMessage extends WrapperTag {
}
export interface ErrorMessages extends Omit<Component<'error-message', HTMLElement>, 'label' | 'content' | 'items'> {
    items?: Errors;
}
//# sourceMappingURL=ErrorMessage.type.d.ts.map