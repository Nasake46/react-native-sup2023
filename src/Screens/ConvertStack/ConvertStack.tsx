import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import ConvertChangeItem from "../../Components/ConvertChangeItem";

export default function ConvertScreen() {

    let navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Convert Stack</Text>
            <ConvertChangeItem></ConvertChangeItem>
        </View>
      );
}