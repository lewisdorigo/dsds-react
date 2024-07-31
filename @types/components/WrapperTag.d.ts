declare namespace DSDS.Component {
    namespace WrapperTag {
        interface Tag {
            tag?: keyof JSX.IntrinsicElements,
        }
    }
    interface WrapperTag<
        Tag extends HTMLOrSVGElement = HTMLOrSVGElement,
    > extends WrapperTag.Tag, React.PropsWithChildren, React.HTMLAttributes<Tag> {
        ref?: React.Ref<Tag>,
    }
}
