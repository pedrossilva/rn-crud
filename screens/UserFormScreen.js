import React, {Component} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "react-navigation"
import { Util } from '../Util'
import firebase from 'react-native-firebase';
import { Form, Item, Input, Label } from 'native-base';


class UserFormScreen extends Component<Props> {
    static navigationOptions = Util.navigationOptions('New');

    constructor() {
        super();
        this.ref = firebase.firestore().collection('todos');
        this.state = {
            textInput: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Form>
                    <Item stackedLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('List')}
                />
            </View>
        );
    }
}

export const UserFormNav = createStackNavigator(
    {New: UserFormScreen}
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
