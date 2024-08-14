import { FormComponent, ComponentItem } from '../../utils/types';
import { InputWidth } from '../TextInput/TextInput.type';
import { Value } from '../../utils/types/meta';
export interface SelectItem extends Omit<ComponentItem<HTMLOptionElement>, 'content'> {
}
export interface Select extends FormComponent<'select', HTMLSelectElement, SelectItem, Value> {
    width?: InputWidth;
    allowNull?: boolean;
}
//# sourceMappingURL=Select.type.d.ts.map