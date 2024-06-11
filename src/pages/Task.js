import { View, StyleSheet, Text, FlatList, StyleSheet } from "react-native";
import React, {useState, useEffect} from 'react';
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import react from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { database } from "../config/firebaseconfig";
import { database } from "../config/firebaseconfig";




export default function Task(navigation){
    const [task, setTask] = useState([])
    
    useEffect(() => {
        const taskCollection = collection(database, "Tasks")
        const listen = onSnapshot(taskCollection, (query) =>{
            const list = []
            query.forEach((doc) => {
                list.push({...doc.data()})
            })
            setTask(list)
        })
        return () => listen() 
        }, [])

    return(
        <view style={styles.container}>
            <Text style={styles.txtTask}>Tarefas</Text>
            <FlatList 
                data={task}
                renderItem={({item}) => {
                    return(
                        <view style={styles.tasks}>
                            <Text style={styles.}>
                                {item.description}
                            </Text>
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </view>
                    )
                }}


            <TouchableOpacity style={styles.btnNewTask} onPress={() => navigation.navigate
            ('NewTask')}>
                <text style={styles.txtbtnNewTask}>+</text>
            </TouchableOpacity>
        </view>
    )
};


const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundcolor:'#DAD7CD',
        borderRadius: 20,
        height: 60,
        width: 60,
    },
    btnNewTask:{
        backgroundcolor: '#344Ea1',
        justifyContent: 'center',
        borderRadius: 20,
        height: 60,
        width: 60,
        position: 'absolute',
        bottom: 20,
        left: '3%'
        
    },
})