import React, { useState } from 'react'
import { SafeAreaView } from 'react-native';
import { BackgroundImage, Container, Content, FilterWeek, HeaderList, HeaderTitle, HeaderTotalExercises } from "./styles";
import { Profile } from '../../components/Profile';
import backgroundImg from '../../assets/background.png'
import { ButtonWeek } from '../../components/ButtonWeek';
import { getWeekDays } from '../../utils/get-week-days';
import { CardExercise } from '../../components/CardExercise';

export function Home() {
    const [weekdayActive, setWeekdayActive] = useState<string | null>(null)
    const weekdays = getWeekDays()

    return (
        <Container>
            <SafeAreaView>
                <Content>
                    <Profile />
                    <FilterWeek>
                        {
                            weekdays.map(weekday => (
                                <ButtonWeek 
                                    key={weekday} 
                                    title={weekday} 
                                    isActive={weekday === weekdayActive} 
                                    onPress={() => {
                                        console.log('aaa')
                                        setWeekdayActive(weekday)
                                    }} 
                                />
                            ))
                        }
                    </FilterWeek>
                    <HeaderList>
                        <HeaderTitle>Exercícios do dia</HeaderTitle>
                        <HeaderTotalExercises>4</HeaderTotalExercises>
                    </HeaderList>
                    <CardExercise />
                    <CardExercise />
                    <CardExercise />
                </Content>
            </SafeAreaView>
            <BackgroundImage source={backgroundImg} />
        </Container>
    )
}