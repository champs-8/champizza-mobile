import React, { useState } from "react";
import {Text, SafeAreaView, TouchableOpacity, TextInput , StyleSheet} from "react-native";
//para poder navegar entre os componentes
import { useNavigation } from "@react-navigation/native";
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {StackParamsList} from '../../routes/app.routes'
import { api } from "../../services/api";

export default function Dashboard() {

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    //a tipagem tem outra tipagem tambem

    const [table, setTable] = useState('')

    async function openOrder() {
        if(table === '') {
            return;
        }

        //precisa fazer a requisição e abrir a mesa e navegar para a proxima tela
        //tem que passar dois params, sao configurados na tipagem

        const response = await api.post('/orders', {
             table: Number(table)
        })

        navigation.navigate('Order', {table: table, order_id: response.data.id})

        setTable('');
    }

    return(

        //a diferença do safeareaview para o view, é quando o celular tem entalhe
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Novo pedido</Text>

            <TextInput 
                placeholder="Número da mesa"
                placeholderTextColor={'#cecece'}
                style = {styles.input}
                keyboardType="numeric"
                value={table}
                onChangeText={setTable}
            />

            <TouchableOpacity style= {styles.button} onPress={openOrder}>
                <Text style={styles.buttonText}>Abrir mesa</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#1d1d2e'
    },
    title : {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 24
    },
    input: {
        width: '90%',
        height: 60,
        backgroundColor: '#101026',
        borderRadius: 4,
        paddingHorizontal: 8,
        textAlign: 'center',
        fontSize: 22,
        color: '#fff'
    },
    button : {
        width: '90%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        marginVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText : {
        fontSize: 18,
        color: '#101026',
        fontWeight: 'bold'
    }
})