import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SCREEN_HEIGHT} from "../utils/Enum";
import LOGO from "../assets/logo.png";

export default function Signup({navigation}) {
    const [userName, setUserName] = useState()
    const [name, setName] = useState()
    const [pw, setPw] = useState()

    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={LOGO}
                    style={{width: 240, height: 100, marginBottom: 50}}
                />

            </View>
            <Text style={{color: '#707070', fontSize: 16, marginHorizontal: 16,}}>Name</Text>

            <TextInput
                returnKeyType="next"
                value={name || ''}
                onChangeText={(text) => setName(text)}
                // blurOnSubmit={false}
                placeholder={"Enter Name"}
                style={styles.inputField}
            />
            <Text style={{color: '#707070', fontSize: 16, marginHorizontal: 16,}}>Username</Text>

            <TextInput

                returnKeyType="next"
                value={userName || ''}
                onChangeText={(text) => setUserName(text)}
                // blurOnSubmit={false}
                placeholder={"Enter UserName"}
                style={styles.inputField}
            />
            <Text style={{color: '#707070', fontSize: 16, marginHorizontal: 16,}}>Password</Text>

            <TextInput
                // returnKeyType="next"
                value={pw || ''}
                onChangeText={(text) => setPw(text)}
                placeholder={"Enter password"}
                style={styles.inputField}
            />

            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {

                    navigation.navigate("Home")

                }
                }
            >
                <Text style={{fontSize: 16, fontWeight: "bold", color: "white"}}>{"Sign Up"}</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#707070', marginLeft: 16, fontSize: 16}}>Already have an account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>

                    <Text style={{color: '#1650bc', marginLeft: 4, fontSize: 16}}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

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

    container: {
        backgroundColor: 'white',
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 4,
    },
});
