import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import {SCREEN_HEIGHT} from "../utils/Enum";
import LOGO from "../assets/logo.png"

export default function Login({navigation}) {
    const [userName, setUserName] = useState()
    const [pw, setPw] = useState()

    return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    source={LOGO}
                    style={{width: 240, height: 100, marginBottom: 50}}
                />

            </View>

            <Text style={{color: '#707070', fontSize: 16, marginHorizontal: 16,}}>Enter Username</Text>

            <TextInput
                returnKeyType="next"
                value={userName || ''}
                onChangeText={(text) => setUserName(text)}
                // blurOnSubmit={false}
                placeholder={"Enter UserName"}
                style={styles.inputField}
            />
            <Text style={{color: '#707070', fontSize: 16, marginHorizontal: 16,}}>Enter Password</Text>

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
                    if (userName === "admin" && pw == "1234") {
                        navigation.navigate("Home")
                    } else {
                        ToastAndroid.show("Please Enter Correct Details", ToastAndroid.SHORT);
                    }
                }
                }
            >
                <Text style={{fontSize: 16, fontWeight: "bold", color: "white"}}>{"Login"}</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#707070', marginLeft: 16, fontSize: 16}}>Don't have an account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>

                    <Text style={{color: '#1650bc', marginLeft: 4, fontSize: 16}}>Signup</Text>
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
