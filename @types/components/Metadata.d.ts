declare namespace DSDS.Component {
    namespace Metadata {
        interface Item {
            name: string,
            value: Date | React.ReactNode,
            hideName?: boolean,
            isLabel?: boolean,
        }
    }

    interface Metadata extends React.HTMLProps<HTMLDListElement> {
        inline?: boolean,
        items: Metadata.Item[],
        className?: string,
    }
}
