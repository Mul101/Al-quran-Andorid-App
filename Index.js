import React from 'react';
import {NavigationContainer} from  '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Splash from './Pages/Splash';
import Home from './Pages/Home';
import Details from './Pages/Details'
import Jadwal from './Pages/Jadwal'
import About from './Pages/About'

const StackHome = createStackNavigator();
const StackJadwal = createStackNavigator();
const StackAbout = createStackNavigator();
const Drawer = createDrawerNavigator();

export default  () =>(
    <NavigationContainer>
        <Drawer.Navigator >
            <Drawer.Screen name="Al-Quran" component={StackHomeScreen} />
            <Drawer.Screen name="Jadwal Sholat" component={StackJadwalScreen} />
            <Drawer.Screen name="About" component={StackAboutScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
);


const StackHomeScreen = () =>(
    <StackHome.Navigator>
        <StackHome.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <StackHome.Screen name="Al-Quran" component={Home} options={{headerTintColor: 'blue'}} />
        <StackHome.Screen name="Keutamaan" component={Details} options={{headerTintColor: 'blue'}} />
    </StackHome.Navigator>
)

const StackJadwalScreen = () =>(    
    <StackJadwal.Navigator>
        <StackJadwal.Screen name="Jadwal Sholat" component={Jadwal} options={{headerTintColor: 'blue'}} />
    </StackJadwal.Navigator>
)

const StackAboutScreen = () =>(
    <StackAbout.Navigator>
        <StackAbout.Screen name="About" component={About} options={{headerTintColor: 'blue'}} />
    </StackAbout.Navigator>
)


