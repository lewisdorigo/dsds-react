import type React from 'react';
import type { SummaryList, SummaryListActions } from '../SummaryList/SummaryList.type';
export interface SummaryCard extends Omit<SummaryListActions, 'itemId'>, Omit<SummaryList<HTMLDivElement>, 'type' | 'content'> {
    type: 'summary-card';
    label: React.ReactNode;
}
//# sourceMappingURL=SummaryCard.type.d.ts.map