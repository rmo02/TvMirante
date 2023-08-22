import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";


export function MenuButton() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  }

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Container>
        <Feather name="menu" size={24} color="white" />
      </Container>
    </TouchableOpacity>
  );
}
