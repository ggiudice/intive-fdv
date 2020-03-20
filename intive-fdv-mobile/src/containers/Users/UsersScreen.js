import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import UsersListContainer from './UsersList/UsersListContainer';
import styles from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <UsersListContainer />
    </View>
  );
}
