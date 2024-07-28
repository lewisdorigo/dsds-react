declare namespace DSDS.Component {
    interface Label<
        Type extends HTMLElement = HTMLLabelElement
    > extends React.AllHTMLAttributes<Type> {
        text?: React.ReactNode,
    }
}
