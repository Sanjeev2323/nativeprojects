import { Text,View ,StyleSheet,Pressable} from "react-native";

function PrimaryButton({children,onPress}){

    
    return(
        
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} android_ripple={{color:"yellow"}} >
            <Text style={styles.buttonText}>
           {children}
            </Text>
            </Pressable>
        </View>
        
    );
}

const styles=StyleSheet.create({
    buttonContainer:{
        margin:4,
        padding:8,
        paddingVertical:5,
        backgroundColor:'rgba(169, 20, 228, 0.515)',
        borderRadius:24,
    },
    buttonText:{
        color:"white",
        textAlign:"center"
    }

})

export default PrimaryButton;