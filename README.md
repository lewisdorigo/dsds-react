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
----

## Supported Components
- [Accordion]
- ArticleAside
  - not documented in design system docs
- [AspectBox]
- [BackToTop]
- [Breadcrumbs]
- [Button]
  - ButtonGroup
- [Card / Category Lists][NavigationPage]
  - Card
  - CategoryItem
  - CategoryList
- [ConfirmationMessage]
- [Details]
- [FeatureHeader]
- [FileDownload]
- [InsetText]
- [Metadata][PageMetadata]
- [NotificationBanner]
- [NotificationPanel]
- [PageHeader]
- [Pagination]
- [PhaseBanner]
- [SequentialNavigation]
- [SideNavigation]
- [SiteFooter]
- [SiteHeader]
    - SiteBranding
- [SiteNavigation]
- [SkipLinks]
- [SummaryList]
  - SummaryCards
- [Tabs]
- [Tag]
- [TaskList]
  - TaskListGroup
- [WarningText]

### Supported Form Components
- [Checkbox]
  - CheckboxGroup
- [DatePicker]
- [ErrorMessage]
- [ErrorSummary]
- [Question]
  - [CharacterCount]
- [Radio]
  - RadioGroup
- [Select]
- [TextArea]
- [TextInput]
  - Currency

### Other Supplied Components
- [Page][PageTemplate] (`.ds_page`)
- [Layout][PageLayout] (`.ds_layout`)
- Wrapper (`.ds_wrapper`)
- Link (`.ds_link`) - with automatic insertion of “(opens in new tab)” text
- FieldGroup (`.ds_fieldgroup`)
- [Icon] (`.ds_icon`)

## Not Currently Supported
- [AutoComplete]
- [ContactDetails]
- [CookieBanner]
- [HidePage]
- [SiteSearch]
  - [SearchResults]
- [TextInput] (with associated button)

[dsds]: https://designsystem.gov.scot

[PageTemplate]: https://designsystem.gov.scot/styles/page-template
[PageLayout]: https://designsystem.gov.scot/styles/layout
[Icon]: https://designsystem.gov.scot/styles/icons

[Accordion]: https://designsystem.gov.scot/components/accordion
[AspectBox]: https://designsystem.gov.scot/components/aspect-box
[AutoComplete]: https://designsystem.gov.scot/components/autocomplete
[BackToTop]: https://designsystem.gov.scot/components/back-to-top
[Breadcrumbs]: https://designsystem.gov.scot/components/breadcrumbs
[Button]: https://designsystem.gov.scot/components/button
[Checkbox]: https://designsystem.gov.scot/components/checkboxes
[CharacterCount]: https://designsystem.gov.scot/components/character-count
[ContactDetails]: https://designsystem.gov.scot/components/contact-details
[CookieBanner]: https://designsystem.gov.scot/components/cookie-banner
[DatePicker]: https://designsystem.gov.scot/components/date-picker
[ErrorMessage]: https://designsystem.gov.scot/components/error-message
[ErrorSummary]: https://designsystem.gov.scot/components/error-summary
[ConfirmationMessage]: https://designsystem.gov.scot/components/confirmation-message
[Details]: https://designsystem.gov.scot/components/details
[FeatureHeader]: https://designsystem.gov.scot/components/feature-header
[FileDownload]: https://designsystem.gov.scot/components/file-download
[HidePage]: https://designsystem.gov.scot/components/hide-this-page
[InsetText]: https://designsystem.gov.scot/components/inset-text
[NavigationPage]: https://designsystem.gov.scot/patterns/navigational-pages
[NotificationBanner]: https://designsystem.gov.scot/components/notification-banner
[NotificationPanel]: https://designsystem.gov.scot/components/notification-panel
[PageHeader]: https://designsystem.gov.scot/components/page-header
[PageMetadata]: https://designsystem.gov.scot/components/page-metadata
[Pagination]: https://designsystem.gov.scot/components/pagination
[PhaseBanner]: https://designsystem.gov.scot/components/phase-banner
[Question]: https://designsystem.gov.scot/components/question
[Radio]: https://designsystem.gov.scot/components/radio-buttons
[SearchResults]: https://designsystem.gov.scot/patterns/search-results
[Select]: https://designsystem.gov.scot/components/select
[SequentialNavigation]: https://designsystem.gov.scot/components/sequential-navigation
[SideNavigation]: https://designsystem.gov.scot/components/side-navigation
[SiteFooter]: https://designsystem.gov.scot/patterns/site-footer
[SiteHeader]: https://designsystem.gov.scot/patterns/site-header
[SiteNavigation]: https://designsystem.gov.scot/components/site-navigation
[SiteSearch]: https://designsystem.gov.scot/components/site-search
[SkipLinks]: https://designsystem.gov.scot/components/skip-links
[SummaryList]: https://designsystem.gov.scot/components/summary-list
[Tabs]: https://designsystem.gov.scot/components/tabs
[Tag]: https://designsystem.gov.scot/components/tag
[TaskList]: https://designsystem.gov.scot/patterns/task-list
[TextArea]: https://designsystem.gov.scot/components/text-input
[TextInput]: https://designsystem.gov.scot/components/textarea
[WarningText]: https://designsystem.gov.scot/components/warning-text
