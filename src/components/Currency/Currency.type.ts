import { TextInput, Width, Type } from '../TextInput/TextInput.type';

export { Width, Type };
export interface Currency extends TextInput {
    symbol?: string,
}
