declare namespace DSDS.Component {
    interface Html extends React.PropsWithChildren {
        type: 'html',
        content?: React.ReactNode,
    }
}
