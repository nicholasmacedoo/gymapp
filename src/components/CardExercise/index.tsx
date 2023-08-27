import React from 'react';
import { Container, Content, Description, Image, Info, Title } from './styles';
import Feather from '@expo/vector-icons/Feather'
import { useTheme } from 'styled-components/native';

export function CardExercise() {
    const { colors } = useTheme()

    return (
        <Container>
            <Content>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7S2g-PskAwr8eRET-7XQTGSJjU5U3o1qroV30TPBXhHGCxIgXAyn2W1jlj9RhswcP5o&usqp=CAU' }} />
                <Info>
                    <Title>Puxada frontal</Title>
                    <Description>3 séries x 12 repetições</Description>
                </Info>
            </Content>
            <Feather name='chevron-right' size={24} color={colors.label} />
        </Container>
    );
}