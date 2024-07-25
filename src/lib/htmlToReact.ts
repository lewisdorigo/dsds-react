import parse from 'html-react-parser';

/**
 * Replaces double line-breaks with paragraph elements.
 *
 * A group of regex replaces used to identify text formatted with newlines and
 * replace double line-breaks with HTML paragraph tags. The remaining
 * line-breaks after conversion become `<br />` tags, unless `br` is set to '0'
 * or 'false'.
 *
 * @param {string} text - The text which has to be formatted.
 * @param {bool} [br=true] - If set, this will convert all remaining line-breaks after paragraphing.
 * @returns {string} - Text which has been converted into correct paragraph tags.
 */
export const autop = function autop(text:string, br = true) {
    let para = text;
    const preTags:{[key:string]: string} = {};

    if (!para || para.trim() === '') {
        return '';
    }

    para += '\n'; // just to make things a little easier, pad the end

    if (para.indexOf('<pre') > -1) {
        const paraParts = para.split('</pre>');
        const lastpara = paraParts.pop();
        para = '';

        paraParts.forEach((paraPart, index) => {
            const start = paraPart.indexOf('<pre');

            // Malformed html?
            if (start === -1) {
                para += paraPart;
                return;
            }

            const name = `<pre wp-pre-tag-"${index}"></pre>`;
            preTags[name] = `${paraPart.substr(start)}</pre>`;
            para += paraPart.substr(0, start) + name;
        });

        para += lastpara;
    }

    para = para.replace(/<br \/>\s*<br \/>/, '\n\n');

    // Space things out a little
    const allblocks = '(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)';

    para = para.replace(new RegExp(`(<${allblocks}[^>]*>)`, 'gmi'), '\n$1');
    para = para.replace(new RegExp(`(</${allblocks}>)`, 'gmi'), '$1\n\n');
    para = para.replace(/\r\n|\r/, '\n'); // cross-platform newlines

    if (para.indexOf('<option') > -1) {
        // no P/BR around option
        para = para.replace(/\s*<option'/gmi, '<option');
        para = para.replace(/<\/option>\s*/gmi, '</option>');
    }

    if (para.indexOf('</object>') > -1) {
        // no P/BR around param and embed
        para = para.replace(/(<object[^>]*>)\s*/gmi, '$1');
        para = para.replace(/\s*<\/object>/gmi, '</object>');
        para = para.replace(/\s*(<\/?(?:param|embed)[^>]*>)\s*/gmi, '$1');
    }

    if (para.indexOf('<source') > -1 || para.indexOf('<track') > -1) {
        // no P/BR around source and track
        para = para.replace(/([<[](?:audio|video)[^>\]]*[>\]])\s*/gmi, '$1');
        para = para.replace(/\s*([<[]\/(?:audio|video)[>\]])/gmi, '$1');
        para = para.replace(/\s*(<(?:source|track)[^>]*>)\s*/gmi, '$1');
    }

    para = para.replace(/\n\n+/gmi, '\n\n'); // take care of duplicates

    // make paragraphs, including one at the end
    const paras = para.split(/\n\s*\n/);
    para = '';
    paras.forEach((tinkle) => {
        para += `<p>${tinkle.replace(/^\s+|\s+$/g, '')}</p>\n`;
    });

    para = para.replace(/<p>\s*<\/p>/gmi, ''); // under certain strange conditions it could create a P of entirely whitespace
    para = para.replace(/<p>([^<]+)<\/(div|address|form)>/gmi, '<p>$1</p></$2>');
    para = para.replace(new RegExp(`<p>\\s*(</?${allblocks}[^>]*>)\\s*</p>`, 'gmi'), '$1'); // don't para all over a tag
    para = para.replace(/<p>(<li.+?)<\/p>/gmi, '$1'); // problem with nested lists
    para = para.replace(/<p><blockquote([^>]*)>/gmi, '<blockquote$1><p>');
    para = para.replace(/<\/blockquote><\/p>/gmi, '</p></blockquote>');
    para = para.replace(new RegExp(`<p>\\s*(</?${allblocks}[^>]*>)`, 'gmi'), '$1');
    para = para.replace(new RegExp(`(</?${allblocks}[^>]*>)\\s*</p>`, 'gmi'), '$1');

    if (br) {
        para = para.replace(/<(script|style)(?:.|\n)*?<\/\\1>/gmi, (matches) => matches[0].replace('\n', '<WPPreserveNewline />')); // /s modifier from php PCRE regexp replaced with (?:.|\n)
        para = para.replace(/(<br \/>)?\s*\n/gmi, '<br />\n'); // optionally make line breaks
        para = para.replace('<WPPreserveNewline />', '\n');
    }

    para = para.replace(new RegExp(`(</?${allblocks}[^>]*>)\\s*<br />`, 'gmi'), '$1');
    para = para.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/gmi, '$1');
    para = para.replace(/\n<\/p>$/gmi, '</p>');

    if (Object.keys(preTags).length) {
        para = para.replace(new RegExp(Object.keys(preTags).join('|'), 'gi'), (matched) => preTags[matched]);
    }

    return para;
};

/**
 * Replaces double line-breaks with paragraph elements.
 *
 * A group of regex replaces used to identify text formatted with newlines and
 * replace double line-breaks with HTML paragraph tags. The remaining
 * line-breaks after conversion become `<br />` tags, unless `br` is set to '0'
 * or 'false'.
 *
 * @param {React.ReactNode} text - The text which has to be formatted.
 * @param {bool} [useAutoP=true] - If set, will add paragraph tags using the `autop` function.
 * @param {bool} [br=true] - If set, this will convert all remaining line-breaks after paragraphing.
 * @returns {JSX.Element} - Text which has been converted into correct paragraph tags.
 */
const htmlToReact = function htmlToReact(
    text:React.ReactNode = '',
    useAutoP:boolean = true,
    br:boolean = true,
) {
    if (typeof text === 'string') {
        return parse(useAutoP ? autop(text, br) : text);
    }

    return text;
};

export default htmlToReact;
