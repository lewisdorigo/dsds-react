declare namespace DSDS.Component {
    interface Label<Type extends HTMLElement = HTMLLabelElement> extends React.HTMLProps<Type> {
        text?: React.ReactNode,
    }
}
