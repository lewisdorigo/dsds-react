import { FormComponent, ComponentItem } from '../../utils/types';
import { Width } from '../TextInput/TextInput.type';
import { Value } from '../../utils/types/meta';

export { Width };

export interface SelectItem extends Omit<
    ComponentItem<HTMLOptionElement>,
    'content'
> {
}

export interface Select extends FormComponent<
    'select',
    HTMLSelectElement,
    SelectItem,
    Value
> {
    width?: Width,
    allowNull?: boolean,
}
