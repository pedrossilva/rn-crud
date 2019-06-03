import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export class ModalExample extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const {text} = this.props;
        return (
            <View>
                <Modal transparent={true}
                       visible={this.state.modalVisible}
                       onRequestClose={() => {
                                           Alert.alert('Modal has been closed.');
                                       }}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}>
                        <View style={{
                            flex: 1,
                            backgroundColor: 'white',
                            padding: 10,
                            marginVertical: 100,
                            marginHorizontal: 5,
                            alignSelf: 'stretch'
                        }}>
                            <Text>
                                wrwwqwqr fdfs dsfsf gdsfg dsfg
                            </Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>{text}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
