import React from 'react';
import { Metadata } from '../Metadata';
import classNames from '../../lib/classNames';
import htmlToReact from '../../lib/htmlToReact';
import * as Types from './FileDownload.type';
/**
 * @param {Types.FileDownload} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
export const FileDownload = function FileDownload({ link = '#', highlight = false, label, fileType = Types.FileType.Generic, image: rawImage, metadata, className, id = 'file-download', attributes = {}, content, children, }) {
    const image = rawImage || `/design-system/images/documents/${fileType}.svg`;
    return (React.createElement("div", { className: classNames('ds_file-download', highlight ? 'ds_file-download--highlighted' : '', className), id: id, ...attributes },
        React.createElement("div", { className: "ds_file-download__thumbnail" },
            React.createElement("a", { className: "ds_file-download__thumbnail-link", "aria-hidden": "true", tabIndex: -1, href: link },
                React.createElement("img", { className: "ds_file-download__thumbnail-image", src: image, alt: "Document cover" }))),
        React.createElement("div", { className: "ds_file-download__content" },
            React.createElement("a", { href: link, className: "ds_file-download__title", "aria-describedby": metadata ? `${id}-details` : '' }, htmlToReact(label, false)),
            content && htmlToReact(content),
            children,
            metadata && (React.createElement("div", { id: `${id}-details`, className: "ds_file-download__details" },
                React.createElement(Metadata, { inline: true, items: metadata.map((item) => ({
                        ...item,
                        hideName: true,
                    })) }))))));
};
