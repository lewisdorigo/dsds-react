declare namespace DSDS.Pattern {
    namespace Address {
        type State = import('../../src/lib/enums').AddressState;

        interface Items {
            postcodeLookup: DSDS.Component.TextInput,
            addressSelect: DSDS.Component.Select,

            address1: DSDS.Component.TextInput,
            address2: DSDS.Component.TextInput,
            city: DSDS.Component.TextInput,
            county?: DSDS.Component.TextInput,
            country?: DSDS.Component.Select,
            postcode: DSDS.Component.TextInput,
        }

        interface FormState {
            message: string,
            postcode?: string,
            addresses?: DSDS.Component.Select.Item[],
            error?: DSDS.Meta.Error,
            state: State,
        }

        type LookupFunction = (state:FormState, data:FormData) => Promise<FormState>;
    }

    interface Address extends Omit<
        FormComponent<
            'address',
            HTMLElement,
            never,
        >,
        'label' | 'value'
    > {
        state?: Address.State,
        items: Address.Items,
        lookup: Address.LookupFunction,

        labels: {
            fullAddressBtn?: string,
            returnToLookupBtn?: string,
            fullAddress?: string,
        },
    }
}
