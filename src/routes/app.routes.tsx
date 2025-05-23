//
// SO USUARIOS LOGADOS PODEM ACESSAR
//
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Dashboard from "../pages/Dashboard";
import Order from "../pages/Order";
import FinishOrder  from "../pages/FinishOrder";


//parametros que sao passados para a rota
export type StackParamsList = {
    Dashboard: undefined;
    Order: {
        table: number|string;
        order_id: string;
    };
    FinishOrder: {
        table: number | string,
        order_id: string
    }
}

const Stack = createNativeStackNavigator<StackParamsList>();

export default function AppRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
            <Stack.Screen name="Order" component={Order} options={{headerShown: false}}/> 
            <Stack.Screen name="FinishOrder" component={FinishOrder} 
                options={{
                    title: 'Finalizando', 
                    headerStyle: {
                        backgroundColor: '#1d1d2e',
                    },
                    headerTintColor: '#fff',
                }}/>
        </Stack.Navigator>
    );
}
