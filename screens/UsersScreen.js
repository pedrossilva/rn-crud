import { Button, View } from 'react-native'
import UserList from '../components/UserList'
import React, { Component } from 'react'
import { createStackNavigator } from "react-navigation"
import { Util } from '../Util'
import { ModalExample } from '../components/Modal'


export class UsersScreen extends Component {
    static navigationOptions = Util.navigationOptions('List');
    render() {
        return (
            <View>
                <UserList/>
                <ModalExample/>
            </View>
        );
    }
}

export const UsersNav = createStackNavigator(
    {List: UsersScreen}
);
