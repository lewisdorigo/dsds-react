"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseConditions = exports.parseConditional = exports.parseCondition = void 0;
const conditional_1 = require("../utils/types/conditional");
const parseCondition = ({ fieldId: conditionalField, value: conditionValue, operator: conditionType = '===', }, formValues) => {
    const fieldValue = formValues[conditionalField];
    switch (conditionType) {
        case '>':
        case 'gt':
            return conditionValue > fieldValue;
        case '<':
        case 'lt':
            return conditionValue < fieldValue;
        case '>=':
        case 'gte':
            return conditionValue >= fieldValue;
        case '<=':
        case 'lte':
            return conditionValue <= fieldValue;
        case 'contains':
        case 'includes':
            return (Array.isArray(fieldValue)
                ? fieldValue.includes(conditionValue)
                : String(fieldValue).includes(String(conditionValue)));
        default:
            return conditionValue === fieldValue;
    }
};
exports.parseCondition = parseCondition;
const parseConditional = (conditions, formValues, type = conditional_1.ConditionType.And) => {
    let conditionsMet = false;
    conditions.every((condition) => {
        let conditionMet = false;
        if (typeof condition.conditions !== 'undefined') {
            conditionMet = (0, exports.parseConditional)(condition.conditions, formValues, condition.type);
        }
        else {
            conditionMet = (0, exports.parseCondition)(condition, formValues);
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
exports.parseConditional = parseConditional;
const parseConditions = (conditions, formValues) => {
    if (Array.isArray(conditions)) {
        return (0, exports.parseConditional)(conditions, formValues);
    }
    if (!conditions) {
        return true;
    }
    return (0, exports.parseConditional)(conditions?.conditions, formValues, conditions?.type);
};
exports.parseConditions = parseConditions;
