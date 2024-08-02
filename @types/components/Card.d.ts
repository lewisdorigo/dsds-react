declare namespace DSDS.Component {
    interface Card extends Omit<DSDS.Component.CategoryItem, 'type'> {
        type: 'card',
        image?: DSDS.Component.Image,
    }
}
