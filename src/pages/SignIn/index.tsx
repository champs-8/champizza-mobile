import React, {useState, useContext} from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'
import { AuthContext } from '../../contexts/AuthContext';


export default function SignIn() {

    const {signIn, loadingAuth} = useContext(AuthContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        if(email ===''||password === '') {
            return;
        }

        await signIn({email, password});
    }

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo.png')}
            />
            <View style={styles.containerInput}>
                <TextInput
                    placeholder='Digite seu e-mail'
                    style={styles.input}
                    placeholderTextColor={'#cecece'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input}
                    secureTextEntry={true}
                    placeholderTextColor={'#cecece'}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>

                    {/* vai fazer uma verificação se está carregando o login  */}

                    {loadingAuth ? (
                        <ActivityIndicator size={25} color={'#cecece'}/>
                    ) : ( 
                        <Text style={styles.buttonText}>Acessar</Text>
                    )}
                    
                </TouchableOpacity>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#1d1d2e'
    },
    logo: {
        marginBottom: 18,
        width: 250,
        height: 60
    },
    containerInput: {
        width:'95%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical: 32,
        paddingHorizontal: 14
    },
    input : {
        width:'95%',
        height: 40,
        backgroundColor:'#101026',
        marginBottom: 15,
        borderRadius: 4,
        paddingHorizontal: 9,
        color: '#FFF',
    },
    button : {
        width: '95%',
        height: 40,
        backgroundColor:'#3fffa3',
        borderRadius: 4,
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#101026'
    }
});