import { Component } from '../../utils/types';
import { MetadataItem } from '../Metadata/Metadata.type';
export interface Title {
    title: React.ReactNode;
    label?: React.ReactNode;
    metadata?: MetadataItem[];
}
export interface PageHeader extends Title, Omit<Component<'page-header', HTMLDivElement>, 'content' | 'items'> {
}
//# sourceMappingURL=PageHeader.type.d.ts.map