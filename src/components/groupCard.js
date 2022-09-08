import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import LOGO from "../assets/adaptive-icon-mask-applied.png";

export default function GroupCard(item, navigation) {
    console.log(item.leader)

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Group")}>
                <View style={styles.cardView}>
                    <View style={{marginRight: 16}}>
                        <Image
                            source={LOGO}
                            style={{width: 80, height: 80, marginBottom: 14}}
                        />

                    </View>
                    <View>
                        <Text style={styles.subHeading}>{item.leader}</Text>
                        <Text style={styles.heading}>{item.name}</Text>
                        <Text style={{color: '#707070', marginVertical: 6}}>{item.member} Members</Text>

                        <View style={styles.subContain}>
                            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#585858'}}>{item.type}</Text>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        </View>

    )
};

const styles = StyleSheet.create({
    subContain: {
        backgroundColor: '#d1d1d1',
        color: '#585858',
        paddingVertical: 4,
        fontSize: 14,
        paddingHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: 86

    },
    cardView: {
        flexDirection: "row",
        alignItems: 'center',
        elevation: 2,
        borderWidth: 0.5,
        borderColor: "#EDEDED",
        shadowColor: "#afafaf",
        paddingVertical: 16,
        paddingHorizontal: 16,
        shadowOpacity: 1,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        marginHorizontal: 12,
        marginVertical: 8,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        alignSelf: "stretch",
    },
    heading: {
        fontSize: 16,
        color: "#181D33",
        marginLeft: 3,
        fontWeight: 'bold',
        fontFamily: "Poppins-SemiBold",
    }, subHeading: {
        fontSize: 16,
        marginVertical: 6,
        color: "#4e5766",
        marginLeft: 3,
        fontFamily: "Poppins-SemiBold",
    },

})

