declare namespace DSDS.Component {
    namespace Button {
        type Size = import('../../src/lib/enums').ButtonSize;
        type Width = import('../../src/lib/enums').ButtonWidth;
        type Style = import('../../src/lib/enums').ButtonStyle;
        type IconPosition = import('../../src/lib/enums').ButtonIconPosition;
        type Type = import('../../src/lib/enums').ButtonType;

        interface Base extends React.PropsWithChildren {
            size?: Size,
            width?: Width,
            style?: Style,

            icon?: string,
            iconPosition?: IconPosition,
            label?: React.ReactNode,
        }

        interface Anchor extends Base, React.HTMLProps<HTMLAnchorElement> {
            type: never,
            href: string,
        }

        interface Button extends Base, React.HTMLProps<HTMLButtonElement> {
            type?: Type,
        }
    }

    type Button = Button.Anchor | Button.Button;
}
