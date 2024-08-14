import { createStackNavigator } from '@react-navigation/stack';
import SelectService from '../screens/mainScreens/SelectService';
import About from '../screens/mainScreens/About';
import Welcome from '../screens/mainScreens/Welcome';
import Appointment from '../screens/mainScreens/Appointment';
import Payment from '../screens/mainScreens/Payment';
import DietSleep from '../screens/mainScreens/DietSleep';
import Workout from '../screens/mainScreens/Workout';
import Chat from '../screens/mainScreens/Chat';


const Stack = createStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='selectService'>
            <Stack.Screen name="selectService" component={SelectService} />
            <Stack.Screen name="about" component={About} />
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="appointment" component={Appointment} />
            <Stack.Screen name="payment" component={Payment} />
            <Stack.Screen name="dietSleep" component={DietSleep} />
            <Stack.Screen name="workout" component={Workout} />
            <Stack.Screen name="chat" component={Chat} />
        </Stack.Navigator>
    );
}

export default MainStack