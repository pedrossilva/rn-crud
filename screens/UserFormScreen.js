import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "react-navigation"
import { Util } from '../Util'
import { Form, Item, Input, Label } from 'native-base';


class UserFormScreen extends Component<Props> {
    static navigationOptions = Util.navigationOptions('New');

    render() {
        return (
            <View>
                <Form>
                    <Item stackedLabel>
                        <Label>Nome</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label>Data de aniversário</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label>RG</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label>CPF</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label>Telefone</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label>Celular</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel last>
                        <Label>E-mail</Label>
                        <Input />
                    </Item>
                </Form>
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
