import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Options = ({props}) => {
    return(
        <View style={{flexDirection: 'row', }}>
            <View style={styles.optnum}>
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>{props.id}</Text>
            </View>
            <TouchableOpacity 
            style={styles.opt} 
            activeOpacity={0.5}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white', opacity: 1, textAlign: 'center'}}>{props.option}</Text>
            </TouchableOpacity>
        </View>
    )
}



const QuestionPage = () => {

    const [optionsList, setOptionsList] = useState([
        {id: 1, option: "MODI JI", ans: true},
        {id: 2, option: "DONALD TRUMP", ans: false},
        {id: 3, option: "VLADMIR PUTIN", ans: false},
        {id: 4, option: "JOE BIDEN", ans: false},
    ])
    return(
        <View style={styles.container}>
            <View style={styles.QuestionBox}>
                <Text style={styles.ques}>who is PM of INDIA?</Text>
            </View>
            <View style={styles.OptionBoxMain}>
                {optionsList.map((item) => (
                    <Options props={item} key={item.id}/>
                ))}
            </View>
            <View style={styles.FooterMain}>
                <TouchableOpacity style={styles.Submit}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.Back}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.Next}>

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
        fontSize: 18,
        fontWeight: 'bold',
    },
    OptionBoxMain: {
        height:500,
        width:'100%',
        backgroundColor:'#bda0cb',
        borderTopEndRadius:80,
        borderTopLeftRadius:10,
        paddingTop: 40,
        //position:'relative',
        //alignItems:'center',
    },
    opt: {
        backgroundColor:'dimgrey',
        borderRadius:15,
        height:50,
        width:300,
        justifyContent: 'center',
    },
    
    optnum: {
        height:50,
        width:50,
        backgroundColor:'slategray',

        borderRadius:30,
        marginHorizontal: 16,
        marginBottom: 20,
        justifyContent: 'center'
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
    },
    Submit: {
        //backgroundColor:'#BFC6B9',
        backgroundColor:'white',
        //opacity:0.5,
        height:50,
        width:150,
        margin:15,
        marginLeft:130,
        borderRadius:20,
    },
    Back: {
        backgroundColor:'#EFD3EF',
        position:'absolute',
        opacity:0.8,
        height:50,
        width:100,
        margin:10,
        top:7,
        borderRadius:20,
    },
    Next: {
        backgroundColor:'#EFD3EF',
        position:'absolute',
        opacity:0.8,
        height:50,
        width:100,
        margin:10,
        top:7,
        marginLeft:300,
        borderRadius:20,
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
export default QuestionPage;