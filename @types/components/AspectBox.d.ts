declare namespace DSDS.Component {
    namespace AspectBox {
        type AspectRatio = import('../../src/lib/enums').AspectRatio;
    }

    interface AspectBox extends React.PropsWithChildren, WrapperTag.Tag, Component<
        'aspect-box',
        HTMLDivElement,
    > {
        ratio?: AspectBox.AspectRatio,
    }
}
