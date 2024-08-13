type Equals = '==' | '===' | 'equals';
type GreaterThan = '>' | 'gt';
type LessThan = '<' | 'lt';
type GreaterThanEqualTo = '>=' | 'gte';
type LessThanEqualTo = '<=' | 'lte';
type Contains = 'contains' | 'includes';

export type ConditionOperator = (
    Equals
    | GreaterThan
    | LessThan
    | GreaterThanEqualTo
    | LessThanEqualTo
    | Contains
);

export interface Item {
    fieldId: string,
    value: unknown,
    operator?: ConditionOperator,
}

export enum ConditionType {
    And = 'and',
    Or = 'or'
}

export interface Condition {
    type?: ConditionType,
    conditions: Items,
}

export type Items = (Item | Condition)[];
export type FieldConditions = Condition | Items;
