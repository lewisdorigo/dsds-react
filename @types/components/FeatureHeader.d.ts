declare namespace DSDS.Component {
    namespace FeatureHeader {
        type Style = import('../../src/lib/enums').FeatureHeaderStyle;
    }

    interface FeatureHeader extends React.PropsWithChildren, Omit<
        Component<
            'feature-header',
            HTMLDivElement
        >,
        'label'
    > {
        title: React.ReactNode,
        image?: Omit<DSDS.Component.Image, 'type'>,
        hasBackground?: boolean,
        style: FeatureHeader.Style,
    }
}
