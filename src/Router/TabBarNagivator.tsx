import HomeStackScreens from "./Stacks/HomeStackScreens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConvertStackScreens from "./Stacks/ConvertStackScreens";

const Tab = createBottomTabNavigator();

export default function TabBarNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStackScreens} />
            <Tab.Screen name="Convert" component={ConvertStackScreens} />
        </Tab.Navigator>
    );
}