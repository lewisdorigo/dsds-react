import React from 'react';
import { Component } from '../../utils/types';
import type { HasTag } from '../../utils/types/meta';

export interface InsetText extends React.PropsWithChildren, HasTag, Component<
    'inset',
    HTMLDivElement
> {}
