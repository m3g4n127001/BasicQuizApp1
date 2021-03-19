import React from "react";
import { TouchableOpacity, View,Text, StyleSheet, Image } from "react-native";

const ResultPage= ({navigation, route}) => {
    return(
        <View style={styles.result}>
            <Text style={{textAlign:"center",fontSize:30,fontWeight:"bold",color:'black'}}>YOUR SCORE IS </Text>
            <Text style={{fontSize:50,}}>{route.params.score}/{route.params.no_of_ques}</Text>
            <Image style={styles.imagetrophy} source={require('../assets/res_tro.png')}/>
            <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.resButton}>
                <Text style={{textAlign: "center", fontSize: 27, fontWeight: "bold"}}>HOME</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#99CC99'
    },
    resButton: {
        width: 140,
        height: 70,
        backgroundColor: '#F08080',
        justifyContent: "center",
        borderRadius:20,

    },
    imagetrophy: {
        width:250,
        height:300,
        justifyContent:"center",
        alignItems:"center",

    }
})
export default ResultPage;