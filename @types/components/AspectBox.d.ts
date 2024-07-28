declare namespace DSDS.Component {
    namespace AspectBox {
        type AspectRatio = import('../../src/lib/enums').AspectRatio;
    }

    interface AspectBox extends WrapperTag<HTMLDivElement> {
        ratio?: AspectBox.AspectRatio,
    }
}
