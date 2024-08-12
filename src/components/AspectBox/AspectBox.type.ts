import type { Component } from '../../utils/types';
import type { HasTag } from '../../utils/types/meta';

export enum AspectRatio {
    Square = 'square',
    FourByThree = '43',
    SixteenByNine = '169',
    TwentyOneByNine = '219',
}

export interface AspectBox extends React.PropsWithChildren, HasTag, Component<
    'aspect-box',
    HTMLDivElement
> {
    ratio?: AspectRatio,
}
