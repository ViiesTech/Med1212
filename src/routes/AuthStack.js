import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/authScreens/GetStarted';
import Login from '../screens/authScreens/Login';

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='getStarted'>
            <Stack.Screen name="getStarted" component={GetStarted} />
            <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
    );
}

export default AuthStack