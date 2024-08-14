import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/authScreens/GetStarted';
import SocialLogin from '../screens/authScreens/SocialLogin';
import EmailLogin from '../screens/authScreens/EmailLogin';
import Signup from '../screens/authScreens/Signup';

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='getStarted'>
            <Stack.Screen name="getStarted" component={GetStarted} />
            <Stack.Screen name="socialLogin" component={SocialLogin} />
            <Stack.Screen name="emailLogin" component={EmailLogin} />
            <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
    );
}

export default AuthStack