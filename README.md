# React Components for the Scottish Government Design System

This contains React (NextJS) implementations for components that are supplied by the
[Scottish Government Design System][dsds].

You can include it in your project by running:

```bash
npm i -S github:lewisdorigo/dsds-react
```

You can then import components into your project like this:
```typescript
import TextInput from 'dsds-react/dist/form/TextInput';
```

> ⚠️ This is very much a work in progress and quite experimental. Be careful about using it in live
> projects.

----

## `app/layout.tsx`
Use the `<Page>` component to set up your site structure. It's got slots for the different areas.

The middle area can be filled using either the `middle` property, or children.

```tsx
return (
    <Page
        top={<SiteHeader />}
        bottom={<SiteFooter />}
    >
        { children }
    </Page>
);
```

## `app/page.tsx`
Use the `<Layout>` component to set up your page layout. It's got slots for each of the different
areas supported:
- `header`
- `partner`
- `navigation`
- `content`
- `list`
- `grid`
- `footer`
- `sidebar`
- `feedback`

The “content” area can be filled using either the `content` property, or children.

```tsx
import { LayoutTypes } from 'dsds-react/dist/lib/enums';
// [...]

return (
    <Layout
        layout={LayoutTypes.Questions}
        header={<PageHeader />}
        feedback={<Feedback />}
    >
        Your content can go here.
    </Layout>
);
```

## ComponentHelper
You can use the component helper to parse JSON into components. This is useful for parsing content
retrieved from an API or content management system.

It accepts an array of components that can either be JSX nodes, strings that include HTML, or
component objects.

```tsx
import { ComponentsHelper } from 'dsds-react/dist/components/ComponentHelper';
// [...]

const components = [
    (
        <p>
            It works with an array that can include
            {' '}
            <abbr title="JavaScript Syntax Extension">JSX</abbr>
            {' '}
            code.
        </p>
    ),
    'As well as strings that have <abbr title="HyperText Markup Language">HTML</abbr>',
    {
        type: 'text',
        id: 'text-input',
        label: 'Text Input',
        hintText: 'You can add hint text',
    }
];

return (
    <Layout
        layout={LayoutTypes.Questions}
        header={<PageHeader />}
        feedback={<Feedback />}
    >
        <ComponentsHelper
            components={components}
        />
    </Layout>
)
```

[dsds]: https://designsystem.gov.scot
