declare namespace DSDS.Component {
    interface CategoryItem extends Component<
        'category-item',
        HTMLElement,
    >, React.PropsWithChildren {
        tag?: keyof JSX.IntrinsicElements,
        label: React.ReactNode,
        link?: Omit<DSDS.Component.Link, 'content' | 'children'>,
    }
}
