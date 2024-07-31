declare namespace DSDS.Component {
    interface List {
        type: 'list',
        ordered?: boolean,
        items?: React.ReactNode[],
        id?: string,
        className?: string,
        attributes?: React.HTMLProps<HTMLOListElement | HTMLUListElement>,
    }
}
