import React from 'react';
import { Component } from '../../utils/types';

export interface Html extends React.PropsWithChildren, Omit<
    Component,
    'id' | 'className' | 'attributes'
> {
}
