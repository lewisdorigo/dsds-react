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

        type LookupFunction = (postcode:string) => Promise<
            DSDS.Meta.Error
            | DSDS.Component.Select.Item[]
        >;
    }

    interface Address extends FormComponent<
        'address',
        HTMLElement,
        never,
    > {
        state?: Address.State,
        items: Address.Items,
        lookup: Address.LookupFunction,
    }
}
