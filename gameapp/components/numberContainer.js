
import {View,Text,StyleSheet} from 'react-native';

function NumberContainer({children}){
    return (
        <View style={styles.container}>
            <Text  style={styles.text}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles=StyleSheet.create({
    container:{
        
        borderColor:"yellow",
        borderWidth:2,
        padding:12,
        borderRadius:6,
        margin:5
    },
    text:{
        color:"yellow",
        textAlign:"center",
        justifyContent:"center",
        padding:12,
        fontSize:20,
        fontWeight:"bold"

    }
})