declare namespace DSDS.Component {
    interface Image extends React.HTMLProps<HTMLImageElement> {
        caption?: React.ReactNode,
        ratio?: true | DSDS.Component.AspectBox.AspectRatio,
    }
}
