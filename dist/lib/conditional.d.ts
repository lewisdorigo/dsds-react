import type { FieldsType } from '../context/FormContext/FormContext.type';
import { Item as ConditionItem, Items as ConditionItems, ConditionType, FieldConditions } from '../utils/types/conditional';
export declare const parseCondition: ({ fieldId: conditionalField, value: conditionValue, operator: conditionType, }: ConditionItem, formValues: FieldsType) => boolean;
export declare const parseConditional: (conditions: ConditionItems, formValues: FieldsType, type?: ConditionType) => boolean;
export declare const parseConditions: (conditions: FieldConditions, formValues: FieldsType) => boolean;
//# sourceMappingURL=conditional.d.ts.map