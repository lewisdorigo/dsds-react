declare namespace DSDS {
    namespace ComponentHelper {
        type CustomLookup = Record<string, React.FC>;
    }
    interface ComponentHelper {
        component: React.ReactNode | Component | Form.FormComponent,
        customLookup?: CustomLookup,
        headingLevel?: Meta.HeadingLevel,
    }

    interface ComponentsHelper {
        components: Components,
        customLookup?: CustomLookup,
        headingLevel?: Meta.HeadingLevel,
    }
}
