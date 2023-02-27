import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConvertScreen from '../../Screens/ConvertStack/ConvertStack';

const ConvertStack = createNativeStackNavigator();

export default function ConvertStackScreens() {
    return (
        <ConvertStack.Navigator >
            <ConvertStack.Screen name="Convert" component={ConvertScreen} />
        </ConvertStack.Navigator>
    );
}