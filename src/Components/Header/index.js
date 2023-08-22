import { Image, View } from "react-native";
import jm1 from '../../../assets/jm1.png'

export function Header(){
    return (
        <View style={{with:'100%', height:100, backgroundColor:'red'}}>
            <Image
            style={{width:'100%', height:'100%', resizeMode:'cover'}} 
            source={jm1}
            />
        </View>
    );
}