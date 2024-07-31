export const parseCondition = (
    {
        fieldId: conditionalField,
        value: conditionValue,
        operator: conditionType = '===',
    }:DSDS.Meta.Conditional.Condition,
    context:DSDS.Context.Form,
) => {
    const fieldValue = context.getField(conditionalField);

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
    conditions:DSDS.Meta.Conditional.Items,
    context:DSDS.Context.Form,
    type = 'and',
) => {
    let conditionsMet = false;

    conditions.every((condition) => {
        let conditionMet = false;

        if (typeof (condition as DSDS.Meta.Condition).conditions !== 'undefined') {
            conditionMet = parseConditional(
                (condition as DSDS.Meta.Condition).conditions,
                context,
                (condition as DSDS.Meta.Condition).type,
            );
        } else {
            conditionMet = parseCondition(
                condition as DSDS.Meta.Conditional.Condition,
                context,
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
    conditions:DSDS.Meta.Condition | DSDS.Meta.Conditional.Items,
    context:DSDS.Context.Form,
) => {
    if (Array.isArray(conditions)) {
        return parseConditional(
            conditions,
            context,
        );
    }

    if (!conditions) { return true; }

    return parseConditional(
        conditions?.conditions,
        context,
        conditions?.type,
    );
};
