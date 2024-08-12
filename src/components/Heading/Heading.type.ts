import type { WrapperTag } from '../WrapperTag/WrapperTag.type';
import type { HeadingLevel } from '../../utils/types/meta';

export interface Heading extends WrapperTag<HTMLHeadingElement | HTMLLegendElement> {
    level?: HeadingLevel,
    isLegend?: boolean,
}
