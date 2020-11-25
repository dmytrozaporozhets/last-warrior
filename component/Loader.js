import React from 'react'
import {ActivityIndicator, View, StyleSheet} from "react-native";

export const Loader = () => (
    <View style={styles.spinner}>
        <ActivityIndicator size="large" color="red" />
    </View>
)

const styles = StyleSheet.create ({
    spinner: {
        flex: 1,
        justifyContent: "center"
    },
})