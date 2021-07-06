import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Detail = ({route, navigation }) => {
    //harus sama dengan nama route ny(di halaman home)
    const { asma } = route.params
    const { arti } = route.params
    const { nama } = route.params
    const { ayat } = route.params
    const { tipe } = route.params
    const { ket } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.judul}>
                <View style={styles.shape}>
                    <Text style={{fontSize: 14, textAlign: 'center'}} >{JSON.stringify(tipe)} </Text>
                </View>
               <View style={styles.nama} >
                    <Text style={{fontSize: 14, textAlign: 'center'}}>{JSON.stringify(nama)}</Text>
               </View>
                <View style={styles.shape} >
                <Text style={{fontSize: 14, textAlign: 'center'}}>{JSON.stringify(ayat)} Ayat</Text>
                </View>
            </View>
            <ScrollView>
                <View style={styles.isi}>
                    <Text style={{fontSize: 24, textAlign: 'center', }} >{JSON.stringify(asma)} </Text>
                    <Text  style={{fontSize: 18, textAlign: 'center', color: '#055AFF'}}>{JSON.stringify(arti)} </Text>
                </View>
                <View style={styles.isi2} >
                    <Text style={{fontSize: 18, textAlign: 'center'}}>{JSON.stringify(ket)} </Text>
                </View>       
            </ScrollView>
        </View>
    )
}

export default Detail

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    judul: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    shape: {
        borderColor: '#FFDA7B', 
        borderWidth: 3, 
        height: 60,
        width: 65,
        borderRadius: 60, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    nama: {
        borderColor: '#FFDA7B', 
        borderWidth: 3, 
        height: 35,
        width: 180,
        borderRadius: 40, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    isi: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
        isi2: {
        marginTop: 10, 
        backgroundColor: '#DAFFFD', 
        paddingVertical: 10, 
        paddingHorizontal: 10
    }
    
})