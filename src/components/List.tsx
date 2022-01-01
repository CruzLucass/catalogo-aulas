import React from 'react';
import { Column } from './Column'
import { ListItem, ListItemProps } from './ListItem';
import { IModulo } from '../interfaces/IModulo'

type ListProps = {
    items: IModulo[];
};

export const List: React.FC<ListProps> = ({ items }) => {
    return (
        <Column>
            {items.map((item, index) => (
                <ListItem key={index} {...item} />
            ))}
        </Column>
    )
}