import type { FormComponent } from '../../utils/types';
import type { Value } from '../../utils/types/meta';

export enum TextAreaSize {
    Normal,
    Small,
    Large,
}

export interface TextArea extends FormComponent<
    'textarea',
    HTMLTextAreaElement,
    never,
    Value
> {
    size?: TextAreaSize,
}
