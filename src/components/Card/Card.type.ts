import type { CategoryItem } from '../CategoryItem/CategoryItem.type';
import type { Image } from '../Image/Image.type';

export interface Card extends Omit<CategoryItem, 'type'> {
    type: 'card',
    image?: Omit<Image, 'type'>,
}
