//
// SO USUARIOS NÃO LOGADOS PODEM ACESSAR
//
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
            {/* cada tela. qual component vai ser renderizado quando essa tela for chamada */}
            {/* option com HEADERSHOWN false, faz nao mostrar o header nativo */}
        </Stack.Navigator>
    );
}

