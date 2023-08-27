import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-top: 32px;
`
export const Avatar = styled.Image`
    height: 64px;
    width: 64px;
    border-radius: 64px;
`

export const ContainerDescription = styled.View`
    flex-direction: column;
`

export const Title = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.colors.label};
    font-family: ${props => props.theme.fonts.regular};
`

export const Username = styled.Text`
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    font-family: ${props => props.theme.fonts.bold};
`