declare namespace DSDS.Component {
    interface SummaryCard extends Omit<DSDS.Component.SummaryList.Actions, 'itemId'>, Omit<
        DSDS.Component.SummaryList<HTMLDivElement>,
        'content',
    > {
        label: React.ReactNode,
    }
}