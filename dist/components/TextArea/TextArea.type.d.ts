import type { FormComponent } from '../../utils/types';
import type { Value } from '../../utils/types/meta';
export declare enum TextAreaSize {
    Normal = 0,
    Small = 1,
    Large = 2
}
export interface TextArea extends FormComponent<'textarea', HTMLTextAreaElement, never, Value> {
    size?: TextAreaSize;
}
//# sourceMappingURL=TextArea.type.d.ts.map