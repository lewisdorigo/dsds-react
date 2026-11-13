import type { FormComponent } from '../../utils/types';
import type { Value } from '../../utils/types/meta';

export type FileUpload = FormComponent<
    'file',
    HTMLInputElement,
    never,
    Value
>;
