import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import bag from '../assets/bag.jpg'

class photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            man: 4,
            like: 0,
            dislike: 0,
            message: 0,
        }
    }
    render() {
        const {like, dislike, man, message } = this.state;
        return (
            <View style={styles.image}>
                <Image style={styles.photo} source={bag} resizeMode='cover'/>
                <View style={styles.likemassage}>
                    <View style={styles.like}>
                        <Icon name='thumbs-up' size={20} color='grey' style={styles.icon} />
                        <Text style={styles.likeText}>{like}</Text>
                        <Icon name='thumbs-down' size={20} color='grey' style={styles.icon} />
                        <Text style={styles.likeText}>{dislike}</Text>
                    </View>
                    <View style={styles.circle}>
                        <Icon2 name='circle' size={10} color='#0099ff' />
                    </View>
                    <View style={styles.message}>
                        <Icon name='message-circle' size={20} color='grey' style={styles.icon} />
                        <Text style={styles.message} style={styles.messageText}>{message}</Text>
                        <Icon name='send' size={20} color='grey' style={styles.icon} />
                    </View>
                </View>
                <View style={styles.browsing}>
                    <Icon2 name='eye' size={15} color='grey' style={{ marginLeft: 5 }} />
                    <Text style={styles.browsingText}>
                        Посмотрели: {<Text style={styles.browsingTextBold}>Медведев Андрей</Text>} и {<Text style={styles.browsingTextBold}>еще {man}</Text>}
                    </Text>
                </View>
            </View>
        )
    }
}
export default photo;