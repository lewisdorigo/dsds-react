declare namespace DSDS.Component {
    interface ArticleAside extends React.PropsWithChildren, WrapperTag.Tag, Component<
        'article-aside',
        HTMLDivElement,
    > {
        label?: React.ReactHTMLElement,
    }
}
