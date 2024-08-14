import type { FormComponent } from '../../utils/types';
import type { Error } from '../../utils/types/validation';
import type { TextInput } from '../../components/TextInput/TextInput.type';
import type { Select, SelectItem } from '../../components/Select/Select.type';
export type AddressLookupFunction = (state: AddressFormState, data: FormData) => Promise<AddressFormState>;
export declare enum AddressState {
    PostcodeLookup = 0,
    SelectAddress = 1,
    EnterAddress = 2
}
export interface AddressItem {
    postcodeLookup: TextInput;
    addressSelect: Select;
    address1: TextInput;
    address2: TextInput;
    city: TextInput;
    county?: TextInput;
    country?: Select;
    postcode: TextInput;
}
export interface AddressFormState {
    message: string;
    postcode?: string;
    addresses?: SelectItem[];
    error?: Error;
    state: AddressState;
}
export interface Address extends Omit<FormComponent<'address', HTMLElement>, 'label' | 'value' | 'items' | 'name'> {
    state?: AddressState;
    items: AddressItem;
    lookup?: AddressLookupFunction;
    labels: {
        fullAddressBtn?: string;
        returnToLookupBtn?: string;
        fullAddress?: string;
    };
}
//# sourceMappingURL=Address.type.d.ts.map