import React from "react";
import { TouchableOpacity, View,Text, StyleSheet } from "react-native";

const ResultPage= ({navigation, route}) => {
    return(
        <View style={styles.result}>
            <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.resButton}>
                <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>
                    your score is {route.params.score}\\n
                    RESTART QUIZ</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    resButton: {
        width: 210,
        height: 100,
        backgroundColor: 'pink',
        justifyContent: "center",

    }
})
export default ResultPage;