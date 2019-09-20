import * as React from 'react';
import { Dimensions } from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductScreen from '../screens/ProductScreen';
import MessageScreen from '../screens/MessageScreen';
import HeaderInfo from '../component/headerInfo';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const styleHeader = {
    headerStyle: {
        backgroundColor: 'white',
    },
    headerTitleStyle: {
        color: 'black',
    },
    headerBackTitleStyle: {
        color: 'white',
    },
};
const ProductStack = createStackNavigator (
    {
        Product: {
            screen: ProductScreen,
            navigationOptions: {
                header: (navigationProps) => <HeaderInfo navigation={navigationProps.navigation}/>
              }
        },
        Message: {
            screen: MessageScreen,
            navigationOptions: {
                header: (navigationProps) => <HeaderInfo navigation={navigationProps.navigation}/>
              }
        }
    },
    {
        defaultNavigationOptions: styleHeader,
        headerLayoutPreset: 'center',
    }
);

export default createAppContainer(
    createSwitchNavigator(
        {
            One: ProductStack
        },
        {
            initialRouteName: 'One',
            defaultNavigationOptions: styleHeader,
            headerMode: 'screen'
        }
    )
);