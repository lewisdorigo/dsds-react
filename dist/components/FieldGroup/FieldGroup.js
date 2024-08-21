import React, { forwardRef } from 'react';
import { Heading } from '../Heading';
import { HintText } from '../HintText';
import { WrapperTag } from '../WrapperTag';
import { ComponentsHelper } from '../ComponentHelper/ComponentHelper'; // eslint-disable-line import/no-cycle
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
/**
 * Wraps any given children in a given `tag`.
 *
 * @param {Types.FieldGroup} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
// eslint-disable-next-line prefer-arrow-callback
export const FieldGroup = forwardRef(function FieldGroup({ type = 'group', tag: rawTag, className, children, content, id, label = '', headingLevel = 2, inline = false, hintText, items, attributes = {}, }, ref) {
    let tag;
    if (rawTag) {
        tag = rawTag;
    }
    else {
        tag = type === 'group' ? 'div' : 'fieldset';
    }
    return (React.createElement(WrapperTag, { ...attributes, id: id, tag: tag, className: classNames('ds_field-group', inline ? 'ds_field-group--inline' : '', className), ref: ref },
        label && (React.createElement(Heading, { level: headingLevel, isLegend: type === 'fieldset' }, label)),
        content && htmlToReact(content),
        hintText && React.createElement(HintText, { content: hintText }),
        children,
        items && React.createElement(ComponentsHelper, { components: items, headingLevel: headingLevel })));
});
