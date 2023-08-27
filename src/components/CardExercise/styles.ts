import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
   background: rgba(245, 245, 245, 0.10);
   padding: 8px;
   border-radius: 8px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 16px;
`;

export const Content = styled.View`
    flex-direction: row;
    gap: 16px;
    object-fit: cover;
    object-position: center;
`
export const Image = styled.Image`
    height: 67px;
    width: 67px;
    border-radius: 6px;
`

export const Info = styled.View`
    gap: 8px;
`
export const Title = styled.Text`
    font-size: 18px;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.bold};
`
export const Description = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.colors.label};
    font-family: ${props => props.theme.fonts.regular};
`