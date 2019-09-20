import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from '../styles';

export default class HeaderInfo extends React.Component {

  back = () => {
    this.props.navigation.navigate('Product');
    console.log(this.props.navigation)
  }

  render() {

    return (
      <View style={styles.header}>
        <Icon name="angle-left" color='#0099ff' size={30} style={{ marginLeft: 5 }} onPress={this.back}/>
        <View style={styles.headerText}>
          <Text style={styles.headerName1} numberOfLines={1}>Название Название Название Название</Text>
          <Text style={styles.headerName2}>Название</Text>
        </View>
        <TouchableOpacity style={styles.headerEdit}>
          <Text style={styles.headerEditText} numberOfLines={1} ellipsizeMode={'tail'}>Редакт.</Text>
        </TouchableOpacity>
      </View>
    );
  }
}