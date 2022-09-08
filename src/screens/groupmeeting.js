import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SCREEN_HEIGHT} from "../utils/Enum";

export default function GroupMeeting({name, roomId, setName, setRoomId, joinGroup}) {
    return (
        <View style={{backgroundColor: 'white', paddingTop: 20}}>
            <View style={styles.container}>
                <Text style={{color: '#707070', fontSize: 16}}>Enter Group Name</Text>
                <TextInput
                    returnKeyType="next"
                    value={name || ''}
                    onChangeText={(text) => setName(text)}
                    // blurOnSubmit={false}
                    placeholder={"Enter Group Name"}
                    style={styles.inputField}
                />
                <Text style={{color: '#707070', fontSize: 16}}>Enter Group ID</Text>

                <TextInput
                    // returnKeyType="next"
                    value={roomId || ''}
                    onChangeText={(text) => setRoomId(text)}
                    placeholder={"Enter Group ID"}
                    style={styles.inputField}
                />

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={() => joinGroup()}
                >
                    <Text style={{fontSize: 16, fontWeight: "bold", color: "white"}}>{"Create"}</Text>
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


