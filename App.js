import 'react-native-gesture-handler';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';
import Styles from './src/Styles';

import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserRegistration } from './src/UserRegistration';
import { UserLogIn } from './src/UserLogIn';
import { HelloUser } from './src/HelloUser';
import { UserLogOut } from './src/UserLogOut';




//Initializing the SDK. 
Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys 
Parse.initialize('F2yoxOhbIEiGN4kDrPfHpYPYjcAkhMTVttkfSiKG','ZoPEZcFjXi1vLc6QbbnD8GyiJpLvoLxetRAy3B3k');
Parse.serverURL = 'https://parseapi.back4app.com/';

function UserRegistrationScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' User registration'}
          </Text>
        </View>
        <UserRegistration />
      </SafeAreaView>
    </>
  );
}

function UserLogInScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' User login'}
          </Text>
        </View>
        <UserLogIn />
      </SafeAreaView>
    </>
  );
}

function HomeScreen() {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={Styles.login_container}>
        <View style={Styles.login_header}>
          <Image
            style={Styles.login_header_logo}
            source={require('./assets/logo-back4app.png')}
          />
          <Text style={Styles.login_header_text}>
            <Text style={Styles.login_header_text_bold}>
              {'React Native on Back4App - '}
            </Text>
            {' Home'}
          </Text>
        </View>
        <HelloUser />
        <UserLogOut />
      </SafeAreaView>
    </>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
            screenOptions={{
              headerLeft: null,
            }}>
        <Stack.Screen name="Login" component={UserLogInScreen} />
        <Stack.Screen name="Sign Up" component={UserRegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
