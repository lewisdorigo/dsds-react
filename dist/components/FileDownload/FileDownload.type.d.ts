import React from 'react';
import { Component } from '../../utils/types';
import { MetadataItem } from '../Metadata/Metadata.type';
export declare enum FileDownloadTypes {
    CSV = "csv",
    Excel = "excel",
    File = "file",
    Generic = "generic",
    GeoData = "geodata",
    Image = "image",
    PDF = "pdf",
    PowerPoint = "ppt",
    RichText = "rtf",
    PlainText = "text",
    Word = "word",
    XML = "xml"
}
export interface FileDownload extends Component<'download', HTMLDivElement>, React.PropsWithChildren {
    link: string;
    label: React.ReactNode;
    fileType?: FileDownloadTypes;
    image?: string;
    metadata?: MetadataItem[];
    highlight?: boolean;
}
//# sourceMappingURL=FileDownload.type.d.ts.map