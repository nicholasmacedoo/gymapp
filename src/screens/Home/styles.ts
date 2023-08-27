import styled from 'styled-components/native'


export const Container = styled.View`
    flex: 1;
    background: ${(props) => props.theme.colors.black};
    position: relative;
`

export const Content = styled.View`
    padding: 24px;
`

export const BackgroundImage = styled.Image`
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
`

export const FilterWeek = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 64px;
`
export const HeaderList = styled.View`
    margin-top: 32px;
    margin-bottom: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const HeaderTitle = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.bold};

`
export const HeaderTotalExercises = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.colors.label};
    font-family: ${(props) => props.theme.fonts.regular};
`