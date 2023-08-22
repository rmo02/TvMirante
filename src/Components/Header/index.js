import { Image, View } from "react-native";
import jm1 from '../../../assets/jm1.png'
import { MenuButton } from "../MenuButton";
import { Container, Logo } from "./styles";


export function Header(){
    
    return (
        <Container>
            <Logo 
            source={jm1}
            />
            <MenuButton />
        </Container>
    );
}