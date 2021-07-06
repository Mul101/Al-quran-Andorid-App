import React, {useState, useEffect} from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://al-quran-8d642.firebaseio.com/data.json?print=pretty')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    if(isLoading == true){
        return(
            <ActivityIndicator size="small" color="#0000ff" />
        )
    }
    else{
        <View style={styles.container}>
            <Text>Error</Text>
        </View>
    }
    
    return ( 
        <View style={styles.container}>
            <View>
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => index}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=>navigation.navigate('Keutamaan', {arti: item.arti, asma: item.asma, ayat: item.ayat, nama: item.nama, nomor: item.nomor, tipe: item.type, ket: item.keterangan})}>
                            <View style={{flexDirection: 'row', borderColor:'#C4C4C4', borderBottomWidth: 1}}>
                            <View style={styles.nomor}>
                                <Text style={{fontSize: 16, textAlign: 'center', color:'#0194FF'}}>{item.nomor}</Text>
                            </View>
                            <View style={styles.nama}>
                                <Text>{item.nama} </Text>
                                <Text>{item.type} </Text>
                            </View>
                            <View style={styles.asma}>
                                <Text style={{fontSize: 24}} >{item.asma} </Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
      </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    nomor: {
        marginLeft: 16, 
        marginVertical: 10, 
        borderColor: '#FFDA7B', 
        borderWidth: 3, 
        height: 38,
        width: 38,
        borderRadius: 35, 
        justifyContent: 'center'
    },
    nama: {
        marginLeft: 15,
        marginVertical: 10
    },
    asma: {
        marginVertical: 15,
        position: 'relative',
        flexGrow: 1,
        marginRight: 16
    }
})

