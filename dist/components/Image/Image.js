"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AspectBox_1 = __importDefault(require("../AspectBox"));
const htmlToReact_1 = __importDefault(require("../../lib/htmlToReact"));
/**
 * @param {ImageProps} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const Image = function Image({ id = 'image', caption, ratio, src, srcSet, alt = '', sources = [], attributes = {}, }) {
    let image = (react_1.default.createElement("img", { src: src, alt: alt, srcSet: srcSet, loading: "lazy", ...attributes }));
    if (sources.length > 0) {
        image = (react_1.default.createElement("picture", null,
            sources.map((source, index) => {
                const key = `${id}-source-${index}`;
                return react_1.default.createElement("source", { key: key, ...source });
            }),
            image));
    }
    if (ratio) {
        image = (react_1.default.createElement(AspectBox_1.default, { ratio: typeof ratio !== 'boolean' ? ratio : undefined }, image));
    }
    if (!caption) {
        return image;
    }
    return (react_1.default.createElement("figure", null,
        image,
        react_1.default.createElement("figcaption", null, (0, htmlToReact_1.default)(caption))));
};
exports.default = Image;
