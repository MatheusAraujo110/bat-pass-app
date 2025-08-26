import React from "react";
import { View } from "react-native";
import styles from "./style"
import { BatLogo } from "../../components/Logo/index.";
import { BatTextInput } from "../../components/TextInput";
import { StatusBar } from "expo-status-bar";
import { BatButton } from "../../components/BatButton";

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}>
                <BatButton />
            </View>

            <StatusBar style="light" />
        </View>
    )
}