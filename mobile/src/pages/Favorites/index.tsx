import React from "react";
import {ImageBackground, Text, View} from "react-native";
import styles from "./styles";
import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import {RectButton} from "react-native-gesture-handler";
import {useNavigation} from '@react-navigation/native';

export default function Favorites() {
    return (
        <View style={styles.container}>
            <RectButton style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Tudo bem!
                </Text>
            </RectButton>
        </View>

    );
}
