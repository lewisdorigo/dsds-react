declare namespace DSDS.Component {
    namespace CategoryList {
        type Layout = import('../../src/lib/enums').CategoryListLayout;
        type Spacing = import('../../src/lib/enums').CategoryListSpacing;
    }

    interface CategoryList extends WrapperTag.Tag, Omit<
        Component<
            'category-list' | 'category-grid' | 'card-list' | 'card-grid',
            HTMLElement,
            DSDS.Component.CategoryItem | DSDS.Component.Card,
        >,
        'label' | 'content'
    > {
        layout?: CategoryList.Layout,
        spacing?: CategoryList.Spacing,
    }
}
