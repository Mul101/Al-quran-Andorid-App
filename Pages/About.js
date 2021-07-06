import React, {Component} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default class About extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.profil}>
                        <Icon name="account-circle" size={200}/>
                        <Text style={{fontSize: 24, color: '#003366'}}>Mulia Dea Lestari</Text>
                        <Text style={{color: '#3EC6FF'}}>React Native Developer</Text>
                    </View>

                    <View>
                        <View style={styles.portofolio}>
                            <Text style={styles.text}>Portofolio</Text> 
                            <View style={styles.rowPortofolio}>
                                <MaterialCommunityIcons name="gitlab" size={50} color='black' />
                                <Text style={{fontSize:16, paddingLeft: 30}}>@Mul101</Text>
                            </View>
                            <View style={styles.rowPortofolio}>
                                <MaterialCommunityIcons name="github-circle" size={50} color='black' />
                                <Text style={{fontSize:16, paddingLeft: 30}}>@Mumul</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View>
                        <View style={styles.sosmed}>
                            <Text style={styles.text}>Social Media</Text> 
                            <View style={styles.rowSosmed}>
                                <MaterialCommunityIcons name="facebook-box" size={50} color='black'/>
                                <Text style={{fontSize:16, paddingLeft: 30}}>Aori</Text>
                            </View>
                            <View style={styles.rowSosmed}>
                                <MaterialCommunityIcons name="instagram" size={50} color='black' />
                                <Text style={{fontSize:16, paddingLeft: 30}}>@mlda_al</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profil: {
        alignItems: 'center',
        marginTop: 30,
        paddingBottom: 15,
    },
    portofolio: {
        backgroundColor: '#EFEFEF',
        marginHorizontal: 30,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        paddingBottom: 15,
    },
    rowPortofolio: {
        paddingVertical: 10, 
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B4B4B4'
    },
    text: {
        fontSize: 18,
        paddingVertical: 5,
        borderColor: 'black',
        borderBottomWidth: 2,
        color: '#0038FF'
    },
    nama: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowSosmed: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#B4B4B4'

    },
    sosmed: {
        backgroundColor: '#EFEFEF',
        marginHorizontal: 30,
        paddingHorizontal: 20,
        marginVertical: 10,
        paddingBottom: 15,
        borderRadius: 10
    },
})