import React from 'react';

import Metadata from './Metadata';

import classNames from '../lib/classNames';
import htmlToReact from '../lib/htmlToReact';
import { FileDownloadTypes } from '../lib/enums';

/**
 * @param {DSDS.Component.FileDownload} props - Properties for the element
 * @returns {JSX.Element} - The element
 */
const FileDownload:React.FC<Omit<DSDS.Component.FileDownload, 'type'>> = function FileDownload({
    link = '#',
    highlight = false,
    label,
    fileType = FileDownloadTypes.Generic,
    image: rawImage,
    metadata,
    className,
    id = 'file-download',
    attributes = {},
    content,
    children,
}) {
    const image = rawImage || `/design-system/images/documents/${fileType}.svg`;

    return (
        <div
            className={classNames(
                'ds_file-download',
                highlight ? 'ds_file-download--highlighted' : '',
                className,
            )}
            id={id}
            {...attributes}
        >
            <div className="ds_file-download__thumbnail">
                <a
                    className="ds_file-download__thumbnail-link"
                    aria-hidden="true"
                    tabIndex={-1}
                    href={link}
                >
                    <img
                        className="ds_file-download__thumbnail-image"
                        src={image}
                        alt="Document cover"
                    />
                </a>
            </div>

            <div className="ds_file-download__content">
                <a
                    href={link}
                    className="ds_file-download__title"
                    aria-describedby={metadata ? `${id}-details` : ''}
                >
                    { htmlToReact(label, false) }
                </a>

                { content && htmlToReact(content) }
                { children }

                { metadata && (
                    <div id={`${id}-details`} className="ds_file-download__details">
                        <Metadata
                            inline
                            items={metadata.map((item) => ({
                                ...item,
                                hideName: true,
                            }))}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileDownload;
