import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

interface ButtonWeekProps extends TouchableOpacityProps {
    title: string
    isActive?: boolean
}

export function ButtonWeek({ title, isActive = false, ...rest }: ButtonWeekProps) {
    return (
        <Container activeOpacity={0.7} isActive={isActive} {...rest}>
            <Title isActive={isActive}>
                {title}
            </Title>
        </Container>
    )
}