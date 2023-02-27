import { View, Button, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import LatestChangeItem from "../../Components/LatestChangeItem";

export default function HomeScreen() {

    let navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <LatestChangeItem></LatestChangeItem>
        </View>
      );
}