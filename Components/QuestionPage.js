import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { block } from 'react-native-reanimated';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const QuestionPage = ({navigation, route}) => {

    const [totalCount, setTotalCount] =  useState(route.params.questions.length)
    const [correct, setCorrect] = useState([
        {flag : false, correctCount : 0}
    ])

    return(

        <View style={[styles.container, {backgroundColor: route.params.color}]}>
            <View style={styles.mainbar}>
                <LinearGradient
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={[route.params.color , 'white']}
                style={{width: (route.params.count/totalCount)*411 , height: 10, marginRight: -0.8}}
                >
                </LinearGradient>
                <Text style={styles.number}>{route.params.count+1}</Text>
            </View>
            <View style={styles.QuestionBox}>
                <Text style={styles.ques}>{route.params.questions[route.params.count].question}</Text>
            </View>
            <View style={styles.OptionBoxMain}>
                {route.params.questions[route.params.count].answers.map(item => (
                    <View style={{flexDirection: 'row', justifyContent: 'center' }} key={item.id}>
                        <TouchableOpacity 
                        onPress={() => {
                            if (item.ans && correct.correctCount !=1 && correct.correctCount!=0) {
                                setCorrect((e) => ({
                                    ...e, flag: true, correctCount : 1
                                }))
                            }
                            else if(correct.correctCount !=1) {
                                setCorrect((e) => ({
                                    ...e, flag: true, correctCount: 0
                                }))
                            } 
                        }} 
                        style={styles.opt}
                        activeOpacity={0.8}
                        >
                            <Text style={styles.opttxt}>{item.option}</Text>
                            <View style={[styles.circle, correct.flag ? item.ans ? {display: 'flex'} : {display: "flex"} : {display: "none"}]}>
                                <Image
                                style={{width:"100%",height: "100%"}}
                                source={correct.flag? item.ans ? require("../assets/tick.jpg") : require("../assets/cross.jpg") : require("../assets/cross.jpg")}

                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                ))}
            </View>
            <View style={styles.FooterMain}>
                <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.Next} 
                onPress={() => 
                correct.flag ?
                    route.params.count < totalCount-1 ? 
                    navigation.push(
                        'Question', 
                        { count: route.params.count + 1, score : route.params.score + correct.correctCount , questions : route.params.questions, color: route.params.color}
                    ) :
                    navigation.push('Result', { score : route.params.score + correct.correctCount, no_of_ques : totalCount , color: route.params.color}) 
                    : alert("please select any option")
                }
                >
                    <Text style={{fontSize:25,fontWeight:'bold',color: 'blue', textAlign: 'center', color: "black"}} >NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 20,
    },
    QuestionBox: {
        backgroundColor: "white",
        width: "80%",
        height: "30%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    ques: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: "black",
    },
    OptionBoxMain: {
        width: "80%",
        height: "50%",
        justifyContent: 'space-evenly',
        
    },
    opt: {
        width: "100%",
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: "black",
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    opttxt: {
        width: "85%",
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        
    },
    FooterMain: {
        width: "35%",
        height: 50,
        borderRadius: 30,
        backgroundColor: "white",
        justifyContent: 'center'
    },
    mainbar: {
        position: 'absolute',
        top: 1,
        width: "100%",
        height: "4%",
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    number : {
        width: 18,
        height: 18,
        backgroundColor: "white", 
        borderRadius: 20, 
        textAlign: 'center', 
        padding: 2,
        fontSize: 10,
        fontWeight: 'bold'
    },
    circle: {
        width: 24,
        height: 24,
        display: 'none',
        marginLeft:0,
        backgroundColor: "black"
    }

})
 export default QuestionPage;
