import type React from 'react';

import type { Component } from '../../utils/types';

export interface WarningText extends Component<
    'warning',
    HTMLDivElement
>, React.PropsWithChildren {
    label?: React.ReactNode,
    symbol?: string,
}
