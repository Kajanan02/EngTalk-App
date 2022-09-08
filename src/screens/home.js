import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import GroupCard from "../components/groupCard";
import Modal from "react-native-modal";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "../utils/Enum";

export default function Home({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState();
    const [search, setSearch] = useState();
    const [data, setData] = useState();


    const [roomId, setRoomId] = useState();

    const dataArray = [{
        name: "Let's Talk English",
        member: "01",
        leader: "Kajanan",
        type: "Beginner"
    }, {
        name: "The Online Octopuses",
        member: 20,
        leader: "Janushankan",
        type: "Intermediate"
    }, {name: "Talented Tyrants", member: 13, leader: "Sharanya", type: "Advanced"}, {
        name: "The Unicorns",
        member: 15,
        leader: "Thanujaa",
        type: "intermediate"
    }, {name: "The Dragons", member: 18, leader: "Kathir", type: "Beginner"}, {
        name: "The Dragons",
        member: 18,
        leader: "Kathir",
        type: "Beginner"
    }]
    //
    console.log(navigation)

    useEffect(() => {
        setData(dataArray)
    }, [])

    function handleSearch(val) {
        if (val !== "") {

            let filtered = dataArray.filter((data) => data.name.includes(val))
            setData(filtered)
        } else {
            setData(dataArray)
            // setSourceData(allSourceData);
        }
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white', paddingTop: 12}}>
            <View
                accessibilityLabel={"SmartFarm_container_searchbar"}
                style={[styles.searchBarContainer, {marginLeft: 12}]}>
                <TextInput style={styles.searchBarTextInput} value={search || ""} onChangeText={(text) => {
                    setSearch(text);
                    handleSearch(text)
                }} placeholder={"Search ..."}/></View>

            <FlatList data={data}
                      renderItem={({item, index}) => GroupCard(item, navigation)}/>
            {/*<GroupCard/>*/}

            <TouchableOpacity
                // onPress={() => {setModalVisible(true)
                // }}
                onPress={() => setModalVisible(true)}

                style={[styles.addButton, {elevation: 2}]}>
                <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}> + Create Group</Text>
            </TouchableOpacity>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onBackButtonPress={() => setModalVisible(false)}

            >
                <View style={styles.modal}>
                    <View style={styles.container}>
                        <Text style={{color: '#707070', fontSize: 16, marginHorizontal: 16,}}>Enter Heading</Text>

                        <TextInput
                            returnKeyType="next"
                            value={name}
                            // onChangeText={(text) => onChange({purpose: text})}
                            // blurOnSubmit={false}
                            placeholder={"Enter Group Name"}
                            style={styles.inputField}
                        />
                        <Text style={{color: '#707070', fontSize: 16, marginHorizontal: 16,}}>Enter Type</Text>

                        <TextInput
                            returnKeyType="next"
                            value={name}
                            // onChangeText={(text) => onChange({purpose: text})}
                            // blurOnSubmit={false}
                            placeholder={"Enter Type"}
                            style={styles.inputField}
                        />


                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={() => {
                                navigation.navigate("Group")
                            }}
                        >


                            <Text style={{fontSize: 16, fontWeight: "bold", color: "white"}}>{"Create"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>

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
    searchBarContainer: {
        height: 40,
        backgroundColor: "#FFFFFF",
        padding: 9,
        borderRadius: 4,
        elevation: 1,
        width: "93%",
        shadowColor: "#EDEDED",
        shadowOpacity: 0.6,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        borderColor: "#EDEDED",
        borderWidth: 0.5,
    },
    searchBarTextInput: {
        color: "gray",
        paddingLeft: 8,
        paddingRight: 8,
        fontSize: 13,
        paddingVertical: 0,
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
        paddingVertical: 16,
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
        bottom: 20,
        left: SCREEN_WIDTH / 3,
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



