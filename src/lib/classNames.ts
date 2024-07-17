/**
 * Takes an aribitrary number of class names and combines them into a single class name.
 *
 * @param {(string|undefined|null)[]} className - Any number of class names
 * @returns {string} - The class names, with null or falsy values removed.
 */
const classNames = function classNames(
    ...className:(string|undefined|null)[]
):string {
    return className.filter((v) => v).join(' ');
};

export default classNames;
