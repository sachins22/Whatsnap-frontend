import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  GestureHandlerRootView } from 'react-native-gesture-handler';



import Login from './Log/Login';
import Otp from './Log/OTP';
import Name from './Log/Name';
import TopBottom from './chat/TopBottom';
import Map from './App/Map';
import InnerChat from "./chat/InnerChat";
import Agree from './Log/Agree';
import Updates from './updates/Updates';
import Authcontext from './utils/Authcontext';
import CHATS from './chat/ChatsData';
import Calls from './Calls/Calls';
import Group from './PageS/Group';
import Addcontact from './PageS/Addcontact';
import AddCont from './PageS/AddCont';
import Camera from  './Camera/Camera'
import NewBroadcast from './PageS/NewBroadcast';
import Started from './PageS/Started';
import Settings from './PageS/Settings';
import Profile from './Settings/Profile';
import Account from './Settings/Account';
import { Back_uri } from './Server/Server';
import Test from './Server/test';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  // let loggedIn= false;



  const [loggedIn, setloggedIn] = React.useState(false)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>


<Authcontext.Provider value={{
loggedIn,
setloggedIn,
   CHATS,
   Back_uri,
 
}} >
      <NavigationContainer>
        <Stack.Navigator >
         {loggedIn?
         <>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />

          <Stack.Screen name="InnerChat" component={InnerChat} options={{ headerShown: false }} />
       <Stack.Screen name="Group" component={Group} options={{ headerShown: false }} />
       <Stack.Screen name="Addcontact" component={Addcontact} options={{ headerShown: false }} />
       <Stack.Screen name="AddCont" component={AddCont} options={{ headerShown: false }} />
       <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
       <Stack.Screen name="NewBroadcast" component={NewBroadcast} options={{ headerShown: false }} />
       <Stack.Screen name="Started" component={Started} options={{ headerShown: false }} />
       <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
       <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
       <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
       <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} />

         </>:
         <>
        <Stack.Screen name="Agree" component={Agree} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
            <Stack.Screen name="Name" component={Name} options={{ headerShown: false }} />
            
         </>
         }
       
       {/* <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} /> */}
       
        </Stack.Navigator>
      </NavigationContainer>
      </Authcontext.Provider>

    </GestureHandlerRootView>
  );
}

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text style={{
              color: focused ? 'green' : color,
              fontWeight: focused ? 'bold' : 'normal',
            }}>
              {route.name}
            </Text>
          );
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          switch (route.name) {
            case 'Message':
              iconName = 'android-messages';
              return <MaterialCommunityIcons name={iconName} size={size} color={focused ? 'green' : color} />;
            case 'Updates':
              iconName = 'spinner';
              return <FontAwesome5 name={iconName} size={size} color={focused ? 'green' : color} />;
            case 'Map':
              iconName = 'map-marked';
              return <FontAwesome5 name={iconName} size={size} color={focused ? 'green' : color} />;
            case 'Calls':
              iconName = 'call-outline';
              return <Ionicons name={iconName} size={size} color={focused ? 'green' : color} />;
            default:
              return null;
          }
        },
      })}>
      <Tab.Screen name="Message" component={TopBottom} />
      <Tab.Screen name="Updates" component={Updates} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}
