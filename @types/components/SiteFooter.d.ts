declare namespace DSDS.Component {
    namespace SiteFooter {
        interface Links {
            menuItems: ScotGov.Link[],
        }

        interface Logo extends React.HTMLProps<HTMLImageElement> {
            link?: string,
        }

        interface Copyright {
            logo?: Logo,
            content: React.ReactNode,
        }

        interface Organisation {
            logo: Logo,
        }
    }

    interface SiteFooter extends React.HTMLProps<HTMLDivElement> {
        menuItems?: Link[],
        copyright?: SiteFooter.Copyright,
        organisation?: Organisation,
        className?: string,
        'aria-label'?: string,
    }
}
