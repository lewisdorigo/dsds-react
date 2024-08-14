import { Component } from '../../utils/types';
import type { HasTag } from '../../utils/types/meta';
import { FieldErrors } from '../../utils/types/validation';
export interface ErrorSummary extends HasTag, Omit<Component<'error-summary', HTMLDivElement, FieldErrors>, 'content'> {
}
//# sourceMappingURL=ErrorSummary.type.d.ts.map