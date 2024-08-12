import React from 'react';

import type { Component } from '../../utils/types';
import type { HasTag } from '../../utils/types/meta';
import type { Button } from '../Button/Button.type';

export interface ButtonGroup extends React.PropsWithChildren, HasTag, Omit<
    Component<
        'button-group',
        HTMLDivElement,
        Button
    >,
    'content'
> { }
