declare namespace DSDS.Component {
    namespace FileDownload {
        type Types = import('../../src/lib/enums').FileDownloadTypes;
    }

    interface FileDownload extends DSDS.Component<
        'download',
        HTMLDivElement,
    >, React.PropsWithChildren {
        link: string,
        label: React.ReactNode,
        type?: FileDownload.Types,
        image?: string,
        metadata?: DSDS.Component.Metadata.Item[],
        highlight?: boolean,
    }
}
