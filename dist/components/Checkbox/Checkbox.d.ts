import React from 'react';
import type { CheckboxItem, Checkbox as CheckboxGroup } from './Checkbox.type';
/**
 * @param {CheckboxItem} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export declare const Checkbox: React.FC<CheckboxItem>;
/**
 * @param {CheckboxGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
declare const CheckboxGroup: React.FC<Omit<CheckboxGroup, 'type'>>;
export default CheckboxGroup;
//# sourceMappingURL=Checkbox.d.ts.map