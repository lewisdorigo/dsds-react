declare namespace DSDS.Component {
    interface Pagination extends Omit<
        Component<
            'pagination',
            HTMLDivElement,
            string,
        >,
        'label' | 'content'
    > {
        currentIndex?: number,
        eachSideOfCurrent?: number,
    }
}
