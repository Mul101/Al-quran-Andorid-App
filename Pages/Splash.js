import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('Al-Quran')
        }, 3000)
    },[])
    return (
        <View style={styles.container}>        
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#0047FF'}} >KEUTAMAAN</Text>
            <Image style={{width: 200, height: 200}} source={require('./Images/quran.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DEF5FF',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Splash;
