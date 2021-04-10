import React from 'react';
import { TouchableOpacity, View ,StyleSheet, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HarryPotterQuestions from '../QuestionBank/HarryPotter';
import MoneyHeistQuestions from '../QuestionBank/MoneyHeist';
import AvengersQuestions from '../QuestionBank/Avengers';
import LotrQuestions from '../QuestionBank/Lotr';
import StrangerThingsQuestions from '../QuestionBank/StrangerThings';

const Topics=({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity 
                style={styles.imageContainer} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Question', { count : 0, score : 0 , questions : AvengersQuestions, color: "#272869"})}
            >
                <Image style={styles.imagehp} source={require('../assets/avengers1.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.imageContainer} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Question', { count : 0, score : 0 , questions: LotrQuestions, color: "#474327"})}
            >
                <Image style={styles.imagehp} source={require('../assets/lotr2.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.imageContainer} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Question', { count : 0, score : 0 , questions: HarryPotterQuestions, color: "#115377"})}
            >
                <Image style={styles.imagehp} source={require('../assets/hp6.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.imageContainer}  
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Question', { count : 0, score : 0 , questions : MoneyHeistQuestions, color : "maroon"})}
            >
                <Image style={styles.imagehp} source={require('../assets/moneyheist1.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.imageContainer} 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Question', { count : 0, score : 0, questions: StrangerThingsQuestions, color: "#b13864" })}
            >
                <Image style={styles.imagehp} source={require('../assets/st4.png')}/>
            </TouchableOpacity>
        </ScrollView>

    );
}

const styles=StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        flex:5,

    },
    imageContainer: {
        justifyContent:'center',
        alignItems:'center',

    },
    imagehp: {
        flex: 1,
        width: '98%',
        height: 150,
        borderRadius: 15,
        marginVertical: 5,   
        borderWidth: 1,
        borderColor: 'black'
    }

})
export default Topics;