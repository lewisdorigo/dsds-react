declare namespace DSDS.Component {
    namespace PrefilledValues {
        interface Item extends Omit<
            DSDS.Meta.Item,
            'attributes' | 'content',
        > {
            actions: React.ReactNode[],
        }
    }

    interface PrefilledValues extends Omit<
        Component<
            'prefilled-values',
            HTMLDListElement,
            PrefilledValues.Item
        >,
        'label' | 'content' | 'headingLevel'
    > {
        label?: string,
    }
}
