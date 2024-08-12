import type { FormComponent } from '../../utils/types';
import type { Value } from '../../utils/types/meta';

export enum InputWidth {
    Fixed20 = 'fixed-20',
    Fixed10 = 'fixed-10',
    Fixed5 = 'fixed-5',
    Fixed4 = 'fixed-4',
    Fixed3 = 'fixed-3',
    Fixed2 = 'fixed-2',

    FluidThreeQuarter = 'fluid-three-quarters',
    FluidTwoThirds = 'fluid-two-thirds',
    FluidHalf = 'fluid-half',
    FluidThird = 'fluid-one-third',
    FluidQuarter = 'fluid-one-quarter',
}

export enum InputTypes {
    Color = 'color',
    Date = 'date',
    DateTime = 'datetime-local',
    Email = 'email',
    Month = 'month',
    Number = 'number',
    Password = 'password',
    Search = 'search',
    Telephone = 'tel',
    Text = 'text',
    Time = 'time',
    Url = 'url',
    Week = 'week',
}

export enum InputModes {
    None = 'none',
    Text = 'text',
    Telephone = 'tel',
    Url = 'url',
    Email = 'email',
    Numeric = 'numeric',
    Decimal = 'decimal',
    Search = 'search',
}

export interface TextInput extends FormComponent<
    string | InputTypes,
    HTMLInputElement,
    never,
    Value
> {
    width?: InputWidth,
}
