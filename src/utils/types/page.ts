import type React from 'react';
import type { Components } from './index';
import type { Value } from './meta';
import type { Title } from '../../components/PageHeader/PageHeader.type';
import type { LayoutTypes } from '../../layout/Layout/Layout.type';
import type { FormNavButton } from '../../patterns/FormNav/FormNav.type';

interface NextPageOptionsBase {
    fieldName: string,
    page: string,
}

interface NextPageOptionsValue extends NextPageOptionsBase {
    value: Value,
    method: undefined,
    isNull: undefined,
}

interface NextPageOptionsMethod extends NextPageOptionsBase {
    method: (formData:FormData) => boolean,
    value: undefined,
    isNull: undefined,
}

interface NextPageOptionsNull extends NextPageOptionsBase {
    isNull: boolean,
    value: undefined,
    method: undefined,
}

type NextPageOptions = NextPageOptionsValue | NextPageOptionsMethod | NextPageOptionsNull;

interface NextPage {
    default: string,
    options?: NextPageOptions[],
}

export interface Page {
    pageHeader: Title,
    pageTitle?: string | string[],
    layout?: LayoutTypes,
    route?: string,
    partOf?: {
        label: React.ReactNode,
        link?: string,
    },

    content: Components,

    header?: Components,
    partner?: Components,
    navigation?: Components,
    list?: Components,
    grid?: Components,
    footer?: Components,
    sidebar?: Components,
    feedback?: Components,

    nextPage?: string | NextPage,

    nextButton?: boolean | FormNavButton,
    backButton?: boolean | FormNavButton,
}
