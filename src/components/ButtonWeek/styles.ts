import styled from 'styled-components/native'

interface ButtonWeekProps {
    isActive?: boolean
}

export const Container = styled.TouchableOpacity<ButtonWeekProps>`
    background: ${props => props.isActive ? props.theme.colors.green : 'rgba(225,225,255,0.10)'};
    padding: 10px 14px;
    border-radius: 4px;
`

export const Title = styled.Text<ButtonWeekProps>`
    color: ${props => props.isActive ? props.theme.colors.black : props.theme.colors.label};
    font-size: 10px;
    text-transform: uppercase;

`