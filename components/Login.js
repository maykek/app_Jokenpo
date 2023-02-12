import React, {useState} from "react";
import { 
    Text, 
    View, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    StatusBar, 
    TouchableWithoutFeedback, 
    Keyboard,
    Platform 
} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./Style/Style";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
)


function Button_log () {
    if(Platform.OS == 'android')
{
    return(
        <View style={{alignItems: 'baseline', paddingBottom: '15%'}}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./images/apple.png')} style={styles.icon}/>
                <Text style={{backgroundColor:"#555555", width: '60%', height: 40, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center', color: 'white'}}>CONTINUAR COM APPLE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./images/facebook.png')} style={styles.icon}/>
                <Text style={{backgroundColor:"#1a4789", width: '60%', height: 40, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', color: 'white'}}>CONTINUAR COM FACEBOOK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./images/google.png')} style={styles.icon}/>
                <Text style={{backgroundColor:"#dd4f43", width: '60%', height: 40, fontWeight: 'bold', textAlign: 'center', textAlignVertical: 'center', color: 'white'}}>CONTINUAR COM GOOGLE</Text>
            </TouchableOpacity>
        </View>
    )
}if (Platform.OS='ios') {
    return(
        <View style={{alignItems: 'baseline', paddingBottom: '15%'}}>
           <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
               <Image source={require('./images/apple.png')} style={styles.icon}/>
                <View style={{backgroundColor:"#555555", width: '60%', height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold',  color: 'white'}}>CONTINUAR COM APPLE</Text>
                </View>

           </TouchableOpacity>
           <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
               <Image source={require('./images/facebook.png')} style={styles.icon}/>
               <View style={{backgroundColor:"#1a4789", width: '60%', height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>CONTINUAR COM FACEBOOK</Text>
               </View>
           </TouchableOpacity>
           <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
               <Image source={require('./images/google.png')} style={styles.icon}/>
               <View style={{backgroundColor:"#dd4f43", width: '60%', height: 40, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>CONTINUAR COM GOOGLE</Text>
               </View>
           </TouchableOpacity>
       </View>
       )
}
    
}


export default function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return(
    <DismissKeyboard>
        <View>
            <StatusBar barStyle="dark-content" />
            <View style={styles.title}>
                <Image source={require('./images/iHelp.png') }style={styles.img} />
            </View>

            <View style={styles.login}>
                <Button_log/>
                <TextInput placeholder="E-MAIL" keyboardType="email-address" style={styles.inp}/>
                <TextInput placeholder="SENHA" secureTextEntry ={true}  style={styles.inp}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: "#e9e9e9", fontWeight: 'bold'}}>ENTRAR</Text>
                </TouchableOpacity>

                <View style={{flexDirection:"row", padding: 20}}>
                    <Text style={{color: "#03658C", fontWeight: 'bold'}}>NÃO TEM CONTA? </Text>
                    <TouchableOpacity>
                        <Text style={{color: "#F27405", fontWeight: 'bold'}}>REGISTRE-SE AQUI.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </DismissKeyboard>
    )
}