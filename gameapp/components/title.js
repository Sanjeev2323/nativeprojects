import {Text,StyleSheet} from 'react-native';


function Title({children}){
   return( 
   <Text style={styles.title}>{children}</Text>
   );

}

const styles=StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"yellow",
        textAlign:"center",
        borderColor:"yellow",
        borderWidth:2,
        padding:12,
        borderRadius:6
    }
})
export default Title;