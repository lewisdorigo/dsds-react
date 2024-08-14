import type React from 'react';
export type FieldsType = Record<string, unknown>;
export interface FormProvider extends React.PropsWithChildren {
    initial?: FieldsType;
}
export interface FormContext {
    setFields: React.Dispatch<React.SetStateAction<FieldsType>>;
    setField: <Type = unknown>(name: string, value: Type) => void;
    getField: <Type = unknown>(name: string) => Type;
    fields: FieldsType;
}
//# sourceMappingURL=FormContext.type.d.ts.map