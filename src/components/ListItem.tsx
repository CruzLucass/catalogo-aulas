import React from 'react';
import { Column } from './Column'
import { Row } from './Row';
import { Text } from './Text';

export type ListItemProps = {
    id: number;
    nome: string
};

export const ListItem: React.FC<ListItemProps> = ({ id, nome }) => {
    return (
        <Column width="100%" bg="#fff" p="20px" mb="10px" borderRadius="4px" borderLeft="6px solid #fff">

            <Row>
                <Text flex={1}>{nome}</Text>
            </Row>

        </Column>
    )
}