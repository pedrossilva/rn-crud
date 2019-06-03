import React, { Component } from 'react';
import { List, ListItem, Text, Left, Right, Icon, Button } from 'native-base';
import { ModalExample } from './Modal'

export default class UserList extends Component {
    render() {
        return (
            <List>
                <ListItem selected>
                    <Left>
                        {/*<Text>Simon Mignolet</Text>*/}
                        <ModalExample text="Simon Mignolet" />
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="create" />
                        </Button>
                    </Right>
                    <Right>
                        <Button transparent>
                            <Icon name="trash" />
                        </Button>
                    </Right>
                </ListItem>
                <ListItem>
                    <Left>
                        <Text>Nathaniel Clyne</Text>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="create" />
                        </Button>
                    </Right>
                    <Right>
                        <Button transparent>
                            <Icon name="trash" />
                        </Button>
                    </Right>
                </ListItem>
                <ListItem>
                    <Left>
                        <Text>Dejan Lovren</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>
                </ListItem>
            </List>
        );
    }
}
