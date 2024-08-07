declare namespace DSDS.Layout {
    interface Page extends DSDS.Component.WrapperTag {
        top?: React.ReactNode,
        middle?: React.ReactNode,
        bottom?: React.ReactNode,

        includeBackToTop?: boolean,
        includeSkipLinks?: boolean,
        wrapMiddle?: boolean,
        hasHidePage?: boolean,
    }
}
