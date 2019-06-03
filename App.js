/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Platform} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFonts();
import { UsersNav } from './screens/UsersScreen'
import { UserFormNav } from './screens/UserFormScreen'

const Tabs = createBottomTabNavigator(
    {
        New: UserFormNav,
        List: UsersNav
    },
    {
        initialRouteName: "List",
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;

                const pfx = Platform.select({
                    ios: 'ios-', android: 'md-'
                });

                const iconName = {
                    New: `${pfx}add-circle${focused ? '' : '-outline'}`,
                    List: `${pfx}list`
                }[routeName];

                return <Ionicons name={iconName} size={25} color={tintColor} />
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(Tabs);
