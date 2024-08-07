declare namespace DSDS.Layout {
    namespace Layout {
        type Types = import('../../src/lib/enums').LayoutTypes;
    }

    interface Layout extends DSDS.Component.WrapperTag {
        layout?: Types,

        header?: React.ReactNode,
        partner?: React.ReactNode,
        navigation?: React.ReactNode,
        content?: React.ReactNode,
        list?: React.ReactNode,
        grid?: React.ReactNode,
        footer?: React.ReactNode,
        sidebar?: React.ReactNode,
        feedback?: React.ReactNode,

        hasHidePage?: boolean,
    }
}
