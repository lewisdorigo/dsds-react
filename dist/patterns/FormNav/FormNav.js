'use client';
import React from 'react';
import { ButtonGroup } from '../../components/ButtonGroup';
import { Button, Types as ButtonTypes } from '../../components/Button';
import htmlToReact from '../../lib/htmlToReact';
/**
 * @param {Types.FormNav} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const FormNav = function FormNav({ back = true, next = true, }) {
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
    return (React.createElement(ButtonGroup, { tag: "nav" },
        backEnabled && (React.createElement(Button, { style: ButtonTypes.Style.Cancel, icon: "chevron_left", iconPosition: ButtonTypes.IconPosition.Left, href: backHref, type: !backHref ? ButtonTypes.Type.Button : undefined, onClick: !backHref ? (e) => {
                e.preventDefault();
                window.history.back();
            } : undefined }, backLabel || 'Back')),
        nextEnabled && (React.createElement(Button, { icon: "chevron_right", href: nextHref, type: !nextHref ? ButtonTypes.Type.Submit : undefined }, nextLabel || 'Save and continue'))));
};
