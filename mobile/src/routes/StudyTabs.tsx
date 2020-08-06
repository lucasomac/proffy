import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from "../pages/Favorites";
import TeacherList from "../pages/TeacherList";

const {Navigator, Screen} = createBottomTabNavigator();


export default function StudyTabs() {
    return (
        <Navigator>
            <Screen name="TeacheList" component={TeacherList}/>
            <Screen name="Favorites" component={Favorites}/>
        </Navigator>
    );
}
