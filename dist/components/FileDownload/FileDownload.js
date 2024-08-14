"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Metadata_1 = __importDefault(require("../Metadata"));
const classNames_1 = __importDefault(require("../../lib/classNames"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
const FileDownload_type_1 = require("./FileDownload.type");
/**
 * @param {FileDownload} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FileDownload = function FileDownload({ link = '#', highlight = false, label, fileType = FileDownload_type_1.FileDownloadTypes.Generic, image: rawImage, metadata, className, id = 'file-download', attributes = {}, content, children, }) {
    const image = rawImage || `/design-system/images/documents/${fileType}.svg`;
    return (react_1.default.createElement("div", { className: (0, classNames_1.default)('ds_file-download', highlight ? 'ds_file-download--highlighted' : '', className), id: id, ...attributes },
        react_1.default.createElement("div", { className: "ds_file-download__thumbnail" },
            react_1.default.createElement("a", { className: "ds_file-download__thumbnail-link", "aria-hidden": "true", tabIndex: -1, href: link },
                react_1.default.createElement("img", { className: "ds_file-download__thumbnail-image", src: image, alt: "Document cover" }))),
        react_1.default.createElement("div", { className: "ds_file-download__content" },
            react_1.default.createElement("a", { href: link, className: "ds_file-download__title", "aria-describedby": metadata ? `${id}-details` : '' }, (0, htmlToReact_1.default)(label, false)),
            content && (0, htmlToReact_1.default)(content),
            children,
            metadata && (react_1.default.createElement("div", { id: `${id}-details`, className: "ds_file-download__details" },
                react_1.default.createElement(Metadata_1.default, { inline: true, items: metadata.map((item) => ({
                        ...item,
                        hideName: true,
                    })) }))))));
};
exports.default = FileDownload;
