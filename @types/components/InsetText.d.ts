declare namespace DSDS.Component {
    interface InsetText extends Component<
        'inset',
        HTMLDivElement,
    >, React.PropsWithChildren {
        tag?: keyof JSX.IntrinsicElements,
    }
}
