# React Components for the Scottish Government Design System

This contains React (NextJS) implementations for components that are supplied by the
[Scottish Government Design System][dsds].

You can include it in your project by running:

```bash
npm i -S github:lewisdorigo/dsds-react
```
<small>Maybe I'll publish into npm at some point…</small>

You can then import components into your project like this:
```typescript
import TextInput from 'dsds-react/dist/form/TextInput';
```

> ⚠️ This is very much a work in progress and quite experimental. Be careful about using it in live
> projects.

To ensure things like icons are properly visible, make sure that you copy the design system's “dist”
folder into your project's public directory:
```bash
cp -r ./node_modules/@scottish-government/design-system/dist/ ./public/design-system
```

Document icons for the `<FileDownload>` component aren't included in the `/dist` directory, so
should be copied separately:
```bash
cp -r ./node_modules/@scottish-government/design-system/src/images/documents/svg/ ./public/design-system/images/documents
```

> ℹ️ You could add a `postinstall` script to your `package.json` to do this in your project, to keep
> the design system assets up-to-date.

> ℹ️ The above is assuming that you'll be using NextJS. The components that make use of these
> components and reference them by URL don't expect `/public` to be in it. E.g., the icons should be
> accessible at `/design-system/images/icons/icons.stack.svg`.

----
## Setting up the stylesheet
Set up a `styles` folder in your project root, and create a `globals.scss` and a `settings.scss`.

`settings.scss`, should include any variables that are needed for your site E.g.:
```scss
$iconsfile: '/design-system/images/icons/icons.stack.svg';

$site-logo__height: 48px;
$site-logo__height--medium: 64px;
```

Your `globals.scss` should then import your settings, and the design system:
```scss
@import './settings';
@import '../node_modules/@scottish-government/design-system/src/design-system';
```

In your project's `/app/layout.tsx`, you can then import your base styles:
```tsx
import React, { PropsWithChildren } from 'react';
import '../styles/globals.scss';


/**
 * The main app
 *
 * @param {React.PropsWithChildren} props - Properties for the page
 * @returns {JSX.Element} - The page
 */
const Layout:React.FC<React.PropsWithChildren> = function Layout({ children }) {
   // Your layout goes here
};
```

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
