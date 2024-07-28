declare namespace DSDS.Context {
    namespace Form {
        interface Provider extends React.PropsWithChildren {
            initial?: Record<string, unknown>,
        }
    }

    interface Form {
        setFields: React.SetStateAction,
        setField: <Type = unknown>(name:string, value:Type) => void,
        getField: <Type = unknown>(name:string) => Type,
        fields: Record<string, unknown>,
    }
}
