import type React from 'react';

export interface Error {
    fieldId: string,
    href?: string,
    message: React.ReactNode,
    fieldMessage?: React.ReactNode,
}

export type FieldErrors = string | Error;
export type Errors = FieldErrors | FieldErrors[];

export type Validation = (value:unknown, formData?: FormData) => boolean | string;
