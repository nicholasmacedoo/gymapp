import React from 'react'
import { BackgroundImage, Container, Content, FilterWeek } from "./styles";
import { Profile } from '../../components/Profile';
import { SafeAreaView } from 'react-native';
import backgroundImg from '../../assets/background.png'
import { ButtonWeek } from '../../components/ButtonWeek';

export function Home() {
    return (
        <Container>
            <SafeAreaView>
                <Content>
                    <Profile />
                    <FilterWeek>
                        <ButtonWeek/>
                        <ButtonWeek/>
                        <ButtonWeek/>
                        <ButtonWeek/>
                        <ButtonWeek/>
                        <ButtonWeek/>
                        <ButtonWeek/>
                    </FilterWeek>
                </Content>
            </SafeAreaView>
            <BackgroundImage source={backgroundImg} />
        </Container>
    )
}