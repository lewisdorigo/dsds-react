'use client';

import React, { useEffect } from 'react';

/**
 * Adds 'js-enabled' class to `<html>` on mount and removes on unmount. Does not render content.
 *
 * @returns {null} Null, as it renders nothing.
 */
export const JSEnabled:React.FC = function JSEnabled() {
    useEffect(() => {
        const element = document.querySelector('html');

        if (element) {
            element.classList.add('js-enabled');
        }

        return () => {
            if (element) {
                element.classList.remove('js-enabled');
            }
        };
    });

    return null;
};
