declare namespace DSDS.Component {
    interface Heading extends WrapperTag<HTMLHeadingElement | HTMLLegendElement> {
        level?: 1 | 2 | 3 | 4 | 5 | 6,
        isLegend?: boolean,
    }
}
