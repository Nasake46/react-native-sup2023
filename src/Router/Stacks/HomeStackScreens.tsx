import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeStack/HomeScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreens() {
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}