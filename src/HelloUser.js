import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import Parse from 'parse/react-native';
import Styles from './Styles';

export const HelloUser = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    async function getCurrentUser() {
      if (username === '') {
        const currentUser = await Parse.User.currentAsync();
        if (currentUser !== null) {
          setUsername(currentUser.getUsername());
        }
      }
    }
    getCurrentUser();
  }, [username]);

  return (
    <View style={Styles.login_wrapper}>
      <View style={Styles.form}>
        {username !== '' && <Text>{`Hello ${username}!`}</Text>}
      </View>
    </View>
  );
};
