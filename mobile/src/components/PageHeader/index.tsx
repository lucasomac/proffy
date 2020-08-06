import React from "react";
import {Image, Text, View} from "react-native";
import styles from "./styles";
import {BorderlessButton} from 'react-native-gesture-handler';
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import {useNavigation} from "@react-navigation/native";

interface PageHeaderProps {
    title: string;
}

export default function PageHeader(props: PageHeaderProps) {
    let {title} = props;
    const {navigate} = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>
                <Image source={logoImg} resizeMode="contain"/>
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}
