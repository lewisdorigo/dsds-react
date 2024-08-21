import React from 'react';
export declare enum Size {
    Sixteen = 16,
    Twenty = 20,
    TwentyFour = 24,
    TwentyEight = 28,
    ThirtyTwo = 32,
    ThirtySix = 36,
    Fourty = 40,
    FourtyFour = 44,
    FourtyEight = 48,
    Fill = "fill"
}
export interface Icon extends React.SVGProps<SVGSVGElement> {
    icon: string;
    label?: string;
    accessible?: boolean;
    size?: Size;
    pathToSvg?: string;
}
//# sourceMappingURL=Icon.type.d.ts.map