import Parse from "parse/react-native";
import Styles from './Styles';
import React, { useState } from "react";
import { Alert, Image, StyleSheet, TextInput, Text, TouchableOpacity, View } from "react-native";
import {useNavigation} from '@react-navigation/native';


export const UserRegistration = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doUserRegistration = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    // Since the signUp method returns a Promise, we need to call it using await
    return await Parse.User.signUp(usernameValue, passwordValue)
      .then((createdUser) => {
        // Parse.User.signUp returns the already created ParseUser object if successful
        Alert.alert(
          "Success!",
          `User ${createdUser.get("username")} was successfully created!`
        );
        navigation.navigate('MainContainer');
        return true;
      })
      .catch((error) => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        Alert.alert("Error!", error.message);
        return false;
      });
  };

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        <TextInput
          style={Styles.form_input}
          value={username}
          placeholder={'Username'}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TextInput
          style={Styles.form_input}
          value={password}
          placeholder={'Password'}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => doUserRegistration()}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Sign Up'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={Styles.login_social}>
        <View style={Styles.login_social_separator}>
          <View style={Styles.login_social_separator_line} />
          <Text style={Styles.login_social_separator_text}>{'or'}</Text>
          <View style={Styles.login_social_separator_line} />
        </View>
        <View style={Styles.login_social_buttons}>
          <TouchableOpacity>
            <View
              style={[
                Styles.login_social_button,
                Styles.login_social_facebook,
              ]}>
              <Image
                style={Styles.login_social_icon}
                source={require('../assets/icon-facebook.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image
                style={Styles.login_social_icon}
                source={require('../assets/icon-google.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.login_social_button}>
              <Image
                style={Styles.login_social_icon}
                source={require('../assets/icon-apple.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={Styles.login_footer_text}>
            {'Already have an account? '}
            <Text style={Styles.login_footer_link}>{'Log In'}</Text>
          </Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});