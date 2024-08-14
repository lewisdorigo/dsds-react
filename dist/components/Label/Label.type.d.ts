import type React from 'react';
export interface Label<Type extends HTMLElement = HTMLLabelElement> extends Omit<React.HTMLProps<Type>, 'content'> {
    content?: React.ReactNode;
}
//# sourceMappingURL=Label.type.d.ts.map