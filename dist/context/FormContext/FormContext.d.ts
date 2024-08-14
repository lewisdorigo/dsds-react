import React from 'react';
import type { FormContext as FormContextProps, FormProvider } from './FormContext.type';
declare const FormContext: React.Context<FormContextProps>;
/**
 * React context provider. Should be wrapped around your form so that form fields can be updated.
 *
 * @param {FormProvider} params - The form props.
 * @returns {JSX.Element} - The context provider.
 */
export declare const Provider: React.FC<FormProvider>;
export default FormContext;
//# sourceMappingURL=FormContext.d.ts.map