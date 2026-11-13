import { cloneElement, isValidElement } from 'react';
import classNames from './classNames';

/**
 * Add class to a react element.
 * @param {React.ReactNode} item The react element to add classes to
 * @param {string[]} classToAdd An arbitrary number of classes to add
 * @returns {React.ReactNode} The element with classes added
 */
const addClassToElement = function addClassToElement(item:React.ReactNode, ...classToAdd:string[]) {
    if (
        !item
        || typeof item !== 'object'
        || !isValidElement(item)
    ) {
        return item;
    }

    const reactElem = item as React.ReactElement<React.HTMLProps<HTMLElement>>;

    return cloneElement(reactElem, {
        className: classNames(
            ...classToAdd,
            (
                reactElem.props
                && reactElem.props.className
                    ? reactElem.props.className
                    : null
            ),
        ),
    });
};

export default addClassToElement;
