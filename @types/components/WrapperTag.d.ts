declare namespace DSDS.Component {
    interface WrapperTag<
        Tag extends HTMLOrSVGElement = HTMLOrSVGElement,
    > extends React.PropsWithChildren, React.HTMLAttributes<Tag> {
        tag?: keyof JSX.IntrinsicElements,
        ref?: React.Ref,
    }
}
