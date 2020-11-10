import React,{useState} from "react";
import {FlatList, ImageBackground, StyleSheet, View} from "react-native";
import Navbar from "./componentDisplay/Navnar";
import Header from "./componentDisplay/Header";
import AddNote from "./componentDisplay/AddNote";
import Note from "./componentDisplay/Note";

const image = { uri: "https://cdn.pixabay.com/photo/2020/06/12/08/33/mountain-5289671_960_720.jpg" };


const myFirstMobileProject = () => {
    const [notes,setNotes] = useState([])

    const addNote = (title) => {
        setNotes(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title: title
            }
        ])
    }

    const removeNote = id => {
        setNotes(prev => prev.filter(note => note.id !== id))
    }

    return (
        <View style={styles.main}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.component}>
                    <Navbar title="React Native"/>
                    <View style={styles.container}>
                        <Header/>
                        <View style={styles.container}>
                        </View>
                        <AddNote onSubmit={addNote}/>
                        <FlatList
                            keyExractor={item => item.id.toString()}
                            data={notes}
                            renderItem={({item})=> <Note note={item} onRemove={removeNote}/>}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        alignItems: 'center',
    },
    component: {
        flex:1,
        paddingTop: 50,
    },
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        margin: -10,
    },
})





export default myFirstMobileProject;