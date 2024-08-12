import type { FieldsType } from '../context/FormContext/FormContext.type';
import {
    Item as ConditionItem,
    Items as ConditionItems,
    Condition,
    ConditionType,
    FieldConditions,
} from '../utils/types/conditional';

export const parseCondition = (
    {
        fieldId: conditionalField,
        value: conditionValue,
        operator: conditionType = '===',
    }:ConditionItem,
    formValues:FieldsType,
) => {
    const fieldValue = formValues[conditionalField];

    switch (conditionType) {
        case '>':
        case 'gt':
            return (conditionValue as number) > (fieldValue as number);

        case '<':
        case 'lt':
            return (conditionValue as number) < (fieldValue as number);

        case '>=':
        case 'gte':
            return (conditionValue as number) >= (fieldValue as number);

        case '<=':
        case 'lte':
            return (conditionValue as number) <= (fieldValue as number);

        case 'contains':
        case 'includes':
            return (
                Array.isArray(fieldValue)
                    ? fieldValue.includes(conditionValue)
                    : String(fieldValue).includes(String(conditionValue))
            );

        default:
            return conditionValue === fieldValue;
    }
};

export const parseConditional = (
    conditions:ConditionItems,
    formValues:FieldsType,
    type = ConditionType.And,
) => {
    let conditionsMet = false;

    conditions.every((condition) => {
        let conditionMet = false;

        if (typeof (condition as Condition).conditions !== 'undefined') {
            conditionMet = parseConditional(
                (condition as Condition).conditions,
                formValues,
                (condition as Condition).type,
            );
        } else {
            conditionMet = parseCondition(
                condition as ConditionItem,
                formValues,
            );
        }

        if (!conditionMet && type === 'and') {
            conditionsMet = false;
            return false;
        }

        if (conditionMet) {
            conditionsMet = true;
            return true;
        }

        return true;
    });

    return conditionsMet;
};

export const parseConditions = (
    conditions:FieldConditions,
    formValues:FieldsType,
) => {
    if (Array.isArray(conditions)) {
        return parseConditional(
            conditions,
            formValues,
        );
    }

    if (!conditions) { return true; }

    return parseConditional(
        conditions?.conditions,
        formValues,
        conditions?.type,
    );
};
