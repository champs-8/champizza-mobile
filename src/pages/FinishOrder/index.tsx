import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native'
import { Feather} from '@expo/vector-icons'
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { api } from '../../services/api';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '../../routes/app.routes';


type RouteDetailParams = {
    FinishOrder: {
        table: string | number,
        order_id: string
    }
}

type FinishOrderProps = RouteProp<RouteDetailParams, 'FinishOrder'>


export default function FinishOrder() {

    const route = useRoute<FinishOrderProps>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    async function handleFinish() {
        // function toastFinaly(){
        //     ToastAndroid.show(`Pedido da mesa ${route.params.table} finalizado.`,3)
        // }                
        try{
            await api.put('/order/send', {
                
                //se é try, nao precisa colocar o params
                order_id: route.params.order_id
            })

            // navigation.navigate('Dashboard');
            navigation.popToTop()    
        }catch(err){
            console.log(err);
        }

    }

    return(
        <View style={styles.container}>
            <Text style={styles.alert}> Você deseja finalizar o pedido?</Text>
            <Text style={styles.title}>Mesa {route.params?.table}</Text>

            <TouchableOpacity style={styles.button} onPress={handleFinish}>
                <Text style={styles.textButton}> Finalizar pedido </Text>
                <Feather size={20} color={"#1d1d2e"} name='shopping-cart'/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b1b2e',
        paddingVertical: '5%',
        paddingHorizontal: '4%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alert: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 12
    },
    title : {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12
    },
    button: {
        backgroundColor: '#3fffa3',
        flexDirection: 'row',
        width: '65%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    textButton: {
        fontSize: 18,
        marginRight: 8,
        fontWeight: 'bold',
        color: '#1d1d2e'
    }
});