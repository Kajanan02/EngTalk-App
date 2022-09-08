/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet,} from 'react-native';
import GroupCard from "./src/components/groupCard";
import {SCREEN_HEIGHT} from "./src/utils/Enum";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import Home from "./src/screens/home";
import Call from "./src/screens/call";
import Login from "./src/screens/login";
import Signup from "./src/screens/signup";

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="SignUp" component={Signup}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Groups" component={GroupCard}/>
                <Stack.Screen name="Group" component={Call}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    saveButton: {
        backgroundColor: "#22C674",
        opacity: 1,
        borderRadius: 4,
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    inputField: {
        paddingLeft: 16,
        fontSize: 16 / 810 * SCREEN_HEIGHT,
        borderWidth: 0.75,
        borderColor: '#3F44511F',
        borderRadius: 4,
        height: 50 / 810 * SCREEN_HEIGHT,
        marginHorizontal: 16,
        marginVertical: 16,
        width: '90%',
        color: '#707070',
        opacity: 0.75,
    },
    modal: {
        backgroundColor: '#ffffff',
        paddingTop: 6,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 8,
    },
    container: {
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 4,
    },
    addButton: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        elevation: 2,
        shadowColor: "#EDEDED",
        shadowOpacity: 1,
        shadowRadius: 8,
        zIndex: 1,
        shadowOffset: {width: 0, height: 2},
        borderRadius: 50,
        backgroundColor: "#22C674",
        marginBottom: 8,
        alignSelf: "flex-end",
        bottom: 24,
        right: SCREEN_HEIGHT / 5,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

