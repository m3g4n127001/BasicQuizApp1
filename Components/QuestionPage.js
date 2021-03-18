import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import questions from './data';

const Options = ({option, ans}) => {

    const [flag,setFlag]=useState(false)
    return(
        <View style={{flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity 
            onPress={()  => setFlag(true)}
            style={[styles.opt, flag ? ans ? {backgroundColor: 'green'} : {backgroundColor: 'red'} : {backgroundColor: 'dimgrey'}]} 
            activeOpacity={0.5}
            >
                <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white', opacity: 1, textAlign: 'center'}}>{option} </Text>
            </TouchableOpacity>
        </View>
    )
}



const QuestionPage1 = ({navigation, route}) => {

    const [totalCount, setTotalCount] = useState(questions.length)

    return(

        <View style={styles.container}>
            <View style={styles.QuestionBox}>
                <Text style={styles.ques}>{questions[route.params.count].question}</Text>
            </View>
            <View style={styles.OptionBoxMain}>
                {questions[route.params.count].answers.map(item => (
                    <Options 
                    key={item.id}
                    option = {item.option}
                    ans = {item.ans}
                    />
                ))}
            </View>
            <View style={styles.FooterMain}>
                <TouchableOpacity style={styles.Next} onPress={() => route.params.count < totalCount-1 ? navigation.navigate('Question1', { count: route.params.count + 1 }) : navigation.navigate('Result') }>
                    <Text style={{fontSize:25,fontWeight:'bold',color: 'blue', textAlign: 'center'}} >NEXT</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.QuesNum}>
                <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 20}}>1</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor:'skyblue',
        alignItems:'center',
        opacity:0.8,
    },
    QuestionBox: {
        height:200,
        width:350,
        backgroundColor: 'pink',
        opacity:0.9,
        top:30,
        borderRadius:30,
        borderBottomRightRadius:80,
        borderBottomEndRadius:80,
        marginBottom:50,
        justifyContent: 'center'
    },
    ques: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    OptionBoxMain: {
        height:500,
        width:'100%',
        backgroundColor:'#bda0cb',
        borderTopEndRadius:80,
        borderTopLeftRadius:10,
        paddingTop: 40,
    },
    opt: {
        backgroundColor:'dimgrey',
        borderRadius:15,
        height:50,
        width:300,
        justifyContent: 'center',
        marginHorizontal: 16,
        marginBottom: 20,
    },
    
    FooterMain: {
        height:85,
        width:'100%',
        backgroundColor :'#FFA199',
       // opacity:0.2,
        position:'absolute',
        top:574,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        alignItems: 'center',
    },
    Next: {
        backgroundColor:'#EFD3EF',
        position:'absolute',
        opacity:0.8,
        height:60,
        width:150,
        margin:10,
        marginLeft:300,
        borderRadius:20,
        justifyContent: 'center'
    },
    QuesNum: {
        width:40,
        height:40,
        backgroundColor: 'yellow',
        position:'absolute',
        top:210,
        left: 355,
        borderRadius:20,
        opacity: 0.7,
        justifyContent: 'center'

    }
})
export default QuestionPage1;