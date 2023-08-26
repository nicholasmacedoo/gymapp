import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
`
export const Avatar = styled.Image`
    height: 64px;
    width: 64px;
    border-radius: 100%;
`

export const ContainerDescription = styled.View`
    flex-direction: column;
`

export const Title = styled.Text`
    font-size: 16px;
    color: #6D6D6D;
`

export const Username = styled.Text`
    color: #E1E1E6;
    font-size: 16px;
    font-weight: bold;
`