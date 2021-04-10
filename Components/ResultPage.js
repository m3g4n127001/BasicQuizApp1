import React from "react";
import { TouchableOpacity, View,Text, StyleSheet, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';


const ResultPage= ({navigation, route}) => {
    return(
        <View style={styles.result}>
            <LinearGradient 
            start={{x:0, y:0}} end={{x:0, y:0.8}} 
            colors={['white',route.params.color]}
            style={{width:"100%" ,height:"100%",position:"absolute"}}>
            </LinearGradient>
            <Text style={{textAlign:"center",fontSize:30,fontWeight:"bold",color:'black'}}>YOUR SCORE IS </Text>
            <Text style={{fontSize:50,}}>{route.params.score}/{route.params.no_of_ques}</Text>
            <Image style={styles.imagetrophy} source={require('../assets/res_tro.png')}/>
            <TouchableOpacity onPress={() => navigation.navigate('TOPICS')} style={styles.resButton} activeOpacity={0.8}>
                <Text style={{textAlign: "center", fontSize: 27, fontWeight: "bold", color: "white"}}>HOME</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    resButton: {
        width: 140,
        height: 70,
        backgroundColor: 'black',
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