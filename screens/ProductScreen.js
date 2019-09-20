import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import ImageProduct from '../component/photo';
import TagInput from 'react-native-tag-input';
import Tags from "react-native-tags";
import styles from '../styles';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

class ProductScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: ['Vip-шоперы', 'Vip-шоперы 1', 'Vip-шоперы 2'],
            text: '',
        }
    }

    mes = () => {
        this.props.navigation.navigate('Message')
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.product}>
                <ImageProduct />
                <Text style={styles.productText}>Доступно группам:</Text>
                <Tags
                    initialTags={["собака", "кошка", "курица"]}
                    containerStyle={styles.tag}
                />
                <View style={styles.input}>
                    <TextInput style={styles.inputText} />
                    <Icon name='plus-circle' color='green' size={30} />
                </View>
                <View style={styles.course}>
                    <Text style={styles.courseText}>880</Text>
                    <Icon2 name='euro-sign' size={14} color='black' />
                    <Text style={styles.rubText}>(190100 руб.)</Text>
                </View>
                <Text style={styles.productText}>Цвета</Text>
                <Text style={styles.text}>Черный</Text>
                <Text style={styles.productText}>Размеры Стандарт</Text>
                <Text style={styles.text}>NS</Text>
                <View style={styles.part}>
                    <TouchableOpacity style={styles.discuss} onPress={this.mes}>
                        <Text style={styles.discussText}>Обсудить модель</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
export default ProductScreen;