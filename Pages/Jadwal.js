import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends Component{
    constructor(props){
        super(props)
         this.state = {
            isLoading: true,
            dataSource: null
       };
    }

    componentDidMount(){
        return fetch("https://api.pray.zone/v2/times/today.json?city=jambi")
            .then((Response)=> Response.json())
            .then((ResponseJson)=>{
                this.setState({
                    isLoading: false,
                    dataSource: ResponseJson.results.datetime
                })
            })
            .catch((error)=>{
                console.log(error)
            });
    }

    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else{
            let data = this.state.dataSource.map((val, key)=>{
                return (
                <View key={key} style={styles.container} >

                    <View style={styles.judul}>
                        <View style={styles.textJudul}>
                            <Text style={{fontSize: 18, color: '#F62C2C'}}>Hijryah</Text>
                            <Text style={{fontSize: 18, color: '#F62C2C'}}>Masehi</Text>
                        </View>
                        <View style={styles.textJudul}>
                            <Text style={{fontSize: 16}}>{val.date.hijri}</Text>
                            <Text style={{fontSize: 16}}>{val.date.gregorian}</Text>
                        </View>
                        <Text style={{fontSize: 14, color:'#808080'}} >Wilayah: Kota Jambi-Indonesia</Text>
                    </View>
                    
                    <ScrollView>
                        <View style={styles.viewJadwal}>
                            <View style={styles.jadwal}>
                                <Text style={{fontSize: 20, textAlignVertical: 'center', }}>Imsak</Text>
                                <Text style={{fontSize: 20, textAlignVertical: 'center', paddingLeft: 170}}>{val.times.Imsak}</Text>
                                <Image style={{marginLeft: 13}} source={require('./Images/clock.jpg')} />
                            </View>
                        </View>
                        
                        <View style={styles.viewJadwal}>
                            <View style={styles.jadwal}>
                                <Text style={{fontSize: 20, textAlignVertical: 'center',}}>Subuh</Text>
                                <Text style={{fontSize: 20, textAlignVertical: 'center', paddingLeft: 165 }}>{val.times.Fajr}</Text>
                                <Image style={{marginLeft: 13}} source={require('./Images/clock.jpg')} />
                            </View>
                        </View>

                        <View style={styles.viewJadwal}>
                            <View style={styles.jadwal}>
                                <Text style={{fontSize: 20, textAlignVertical: 'center',}}>Terbit</Text>
                                <Text style={{fontSize: 20, textAlignVertical: 'center', paddingLeft: 165 }}>{val.times.Sunrise}</Text>
                                <Image style={{marginLeft: 13}} source={require('./Images/clock.jpg')} />
                            </View>
                        </View>

                        <View style={styles.viewJadwal}>
                            <View style={styles.jadwal}>
                                <Text style={{fontSize: 20, textAlignVertical: 'center',}}>Dzuhur</Text>
                                <Text style={{fontSize: 20, textAlignVertical: 'center', paddingLeft: 160 }}>{val.times.Dhuhr}</Text>
                                <Image style={{marginLeft: 18}} source={require('./Images/clock.jpg')} />
                            </View>
                        </View>

                        <View style={styles.viewJadwal}>
                            <View style={styles.jadwal}>
                                <Text style={{fontSize: 20, textAlignVertical: 'center',}}>Ashar</Text>
                                <Text style={{fontSize: 20, textAlignVertical: 'center', paddingLeft: 167 }}>{val.times.Asr}</Text>
                                <Image style={{marginLeft: 18}} source={require('./Images/clock.jpg')} />
                            </View>
                        </View>

                        <View style={styles.viewJadwal}>
                            <View style={styles.jadwal}>
                                <Text style={{fontSize: 20, textAlignVertical: 'center',}}>Maghrib</Text>
                                <Text style={{fontSize: 20, textAlignVertical: 'center', paddingLeft: 150}}>{val.times.Maghrib}</Text>
                                <Image style={{marginLeft: 20}} source={require('./Images/clock.jpg')} />
                            </View>
                        </View>

                        <View style={styles.viewJadwal}>
                            <View style={styles.jadwal}>
                                <Text style={{fontSize: 20, textAlignVertical: 'center',}}>Isha</Text>
                                <Text style={{fontSize: 20, textAlignVertical: 'center', paddingLeft: 180 }}>{val.times.Isha}</Text>
                                <Image style={{marginLeft: 18}} source={require('./Images/clock.jpg')} />
                            </View>
                        </View>
                    </ScrollView>
                    
                </View>
                )
            })

            return(
                <View style={styles.container}>
                     {data}
                </View> 
            )
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    judul: {
        paddingHorizontal: 15,
        paddingVertical:15,
        marginBottom: 26,
        backgroundColor: '#ACEBFF'
    },
    textJudul: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingBottom: 10,
        alignContent: 'center'
    },
    viewJadwal: {
        marginHorizontal: 16,
        marginBottom: 11,
        backgroundColor: '#EFF9FF',
        borderRadius: 10
    },
    jadwal: {
        marginStart: 20,
        marginVertical: 15,
        flexDirection: 'row', 
    }
})

