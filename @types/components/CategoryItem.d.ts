declare namespace DSDS.Component {
    interface CategoryItem extends React.PropsWithChildren, WrapperTag.Tag, Component<
        'category-item',
        HTMLElement,
    > {
        label: React.ReactNode,
        link?: Omit<DSDS.Component.Link, 'content' | 'children'>,
    }
}
