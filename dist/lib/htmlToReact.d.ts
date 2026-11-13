/**
 * Replaces double line-breaks with paragraph elements.
 *
 * A group of regex replaces used to identify text formatted with newlines and
 * replace double line-breaks with HTML paragraph tags. The remaining
 * line-breaks after conversion become `<br />` tags, unless `br` is set to '0'
 * or 'false'.
 * @param {string} text - The text which has to be formatted.
 * @param {bool} [br] - If set, this will convert all remaining line-breaks after paragraphing.
 * @returns {string} - Text which has been converted into correct paragraph tags.
 */
export declare const autop: (text: string, br?: boolean) => string;
/**
 * Replaces double line-breaks with paragraph elements.
 *
 * A group of regex replaces used to identify text formatted with newlines and
 * replace double line-breaks with HTML paragraph tags. The remaining
 * line-breaks after conversion become `<br />` tags, unless `br` is set to '0'
 * or 'false'.
 * @param {React.ReactNode} text - The text which has to be formatted.
 * @param {bool} [useAutoP] - If set, will add paragraph tags using the `autop` function.
 * @param {bool} [br] - If set, this will convert all remaining line-breaks after paragraphing.
 * @returns {JSX.Element} - Text which has been converted into correct paragraph tags.
 */
declare const htmlToReact: (text?: React.ReactNode, useAutoP?: boolean, br?: boolean) => string | number | bigint | boolean | Iterable<import("node_modules/@types/react").ReactNode> | Promise<string | number | bigint | boolean | import("node_modules/@types/react").ReactPortal | import("node_modules/@types/react").ReactElement<unknown, string | import("node_modules/@types/react").JSXElementConstructor<any>> | Iterable<import("node_modules/@types/react").ReactNode> | null | undefined> | import("node_modules/@types/react").JSX.Element | import("node_modules/@types/react").JSX.Element[] | null;
export default htmlToReact;
//# sourceMappingURL=htmlToReact.d.ts.map