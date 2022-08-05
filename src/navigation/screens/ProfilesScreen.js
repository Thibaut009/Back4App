import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { UserLogOut } from '../../UserLogOut';

export default function ProfilesScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Snap')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Profiles Screen</Text>
            </View>
            <UserLogOut />
        </SafeAreaView>
    );
}