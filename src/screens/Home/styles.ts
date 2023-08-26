import styled from 'styled-components/native'


export const Container = styled.View`
    flex: 1;
    background: #121214;
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
    /* gap: 8px; */
    margin-top: 64px;
`
