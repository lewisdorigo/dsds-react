declare namespace DSDS {
    namespace ComponentHelper {
        type CustomLookup = (component: Component | Form.FormComponent) => React.ReactNode | false;
    }
    interface ComponentHelper {
        component: React.ReactNode | Component | Form.FormComponent,
        customLookup?: CustomLookup,
    }

    interface ComponentsHelper {
        components: Components,
        customLookup?: CustomLookup,
    }
}
