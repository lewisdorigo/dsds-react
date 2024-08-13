import type React from 'react';
import type { HasTag } from '../../utils/types/meta';

export interface WrapperTag<
    Type extends HTMLOrSVGElement = HTMLOrSVGElement,
> extends HasTag, React.PropsWithChildren, React.HTMLAttributes<Type> {
    ref?: React.Ref<Type>,
}
