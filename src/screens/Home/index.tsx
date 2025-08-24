import React from "react";
import { Text, View } from "react-native";
import styles from "./style"
import { BatLogo } from "../../components/BatLogo/index.";
import { BatTextInput } from "../../components/BatTextInput";
import { StatusBar } from "expo-status-bar";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}>
                <BatTextInput />
            </View>

            <StatusBar style="light"/>
        </View>
    )
}