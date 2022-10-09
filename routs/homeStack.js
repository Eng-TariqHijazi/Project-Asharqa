import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import Home from '../src/screens/ProjectAsharqia'
import list from '../src/screens/ProjectAsharqiaP2'
import About from '../src/screens/ProjectAsharqiaP3'
import Call from '../src/screens/ProjectAsharqiaP4'
const screens = {
    Home: {
        screen: Home
    },
    list: {
        screen: list
    },
    About: {
        screen: About
    },
    Call:{
        screen:Call
    }
}
const HomeStack = createStackNavigator(screens,{headerMode:'none'});


export default createAppContainer(HomeStack);