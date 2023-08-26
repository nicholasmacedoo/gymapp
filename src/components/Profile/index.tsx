import { Avatar, Container, ContainerDescription, Title, Username } from "./styles";

export function Profile() {
    return (
        <Container>
            <Avatar source={{ uri: "https://github.com/nicholasmacedoo.png" }} />

            <ContainerDescription>
                <Title>Bom dia,</Title>
                <Username>Nicholas Macedo.</Username>
            </ContainerDescription>
        </Container>
    )
}