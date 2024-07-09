import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import Edit from './pages/Edit';
import CadUser from './pages/CadUser';

const Stack = createNativeStackNavigator();

export default function Telas() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="NewUser" component={NewUser} options={{ title: 'Novo Contato' }} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="CadUser" component={CadUser} options={{ title: 'Novo Usuario' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
