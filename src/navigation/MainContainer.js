import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import ChatScreen from './screens/ChatScreen';
import SnapScreen from './screens/SnapScreen';
import ProfilesScreen from './screens/ProfilesScreen';

export const MainContainer = () => {


  //Screen names
  const chatName = "Chat";
  const snapName = "Snap";
  const profilesName = "Profiles";

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={snapName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === chatName) {
              iconName = focused ? 'chatbox' : 'chatbox-outline';

            } else if (rn === snapName) {
              iconName = focused ? 'camera' : 'camera-outline';

            } else if (rn === profilesName) {
              iconName = focused ? 'person' : 'md-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
            "tabBarActiveTintColor": "tomato",
            "tabBarInactiveTintColor": "grey",
            "tabBarLabelStyle": {
              "paddingBottom": 10,
              "fontSize": 10
            },
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
        })}>

        <Tab.Screen name={chatName} component={ChatScreen} />
        <Tab.Screen name={snapName} component={SnapScreen} />
        <Tab.Screen name={profilesName} component={ProfilesScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};
