'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

import ButtonGroup from '../../components/ButtonGroup';
import Button from '../../components/Button';

import htmlToReact from '../../lib/htmlToReact';

import type { FormNav } from './FormNav.type';
import {
    Type as ButtonType,
    IconPosition as ButtonIconPosition,
    Style as ButtonStyle,
} from '../../components/Button/Button.type';

const FormNav:React.FC<Omit<FormNav, 'type'>> = function FormNav({
    back = true,
    next = true,
}) {
    const status = useFormStatus();

    let backEnabled;
    let backLabel;
    let backHref;

    let nextEnabled;
    let nextLabel;
    let nextHref;

    switch (typeof back) {
        case 'string':
            backEnabled = true;
            backLabel = back;
            break;

        case 'object':
            backEnabled = typeof back.enabled === 'boolean' ? back.enabled : true;
            backLabel = back?.label ? htmlToReact(back.label, false) : undefined;
            backHref = back?.href;
            break;

        default:
            backEnabled = !!back;
            break;
    }

    switch (typeof next) {
        case 'string':
            nextEnabled = true;
            nextLabel = next;
            break;

        case 'object':
            nextEnabled = typeof next.enabled === 'boolean' ? next.enabled : true;
            nextLabel = next?.label ? htmlToReact(next.label, false) : undefined;
            nextHref = next?.href;
            break;

        default:
            nextEnabled = !!next;
            break;
    }

    return (
        <ButtonGroup tag="nav">
            { backEnabled && (
                <Button
                    style={ButtonStyle.Cancel}
                    icon="chevron_left"
                    iconPosition={ButtonIconPosition.Left}
                    href={backHref}
                    type={!backHref ? ButtonType.Button : undefined}
                    onClick={!backHref ? (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault();
                        window.history.back();
                    } : undefined}
                >
                    { backLabel || 'Back' }
                </Button>
            )}
            { nextEnabled && (
                <Button
                    icon="chevron_right"
                    href={nextHref}
                    type={!nextHref ? ButtonType.Submit : undefined}
                    aria-disabled={status?.pending}
                    disabled={status?.pending}
                >
                    { nextLabel || 'Save and continue' }
                </Button>
            )}
        </ButtonGroup>
    );
};

export default FormNav;
