declare namespace DSDS.Component {
    namespace Icon {
        type Size = import('../../src/lib/enums').IconSize;
    }

    interface Icon extends React.SVGProps<SVGSVGElement> {
        icon: string,
        label?: string,
        accessible?: boolean,
        size?: Icon.Size,
        pathToSvg?: string,
    }
}
