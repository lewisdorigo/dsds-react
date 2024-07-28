declare namespace DSDS.Component {
    namespace Icon {
        type Size = import('../../src/lib/enums').IconSize;
    }

    interface Icon extends React.AllHTMLAttributes<HTMLOrSVGElement> {
        icon: string,
        accessible?: boolean,
        size?: Icon.Size,
        pathToSvg?: string,
    }
}
