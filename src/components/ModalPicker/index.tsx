import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from "react-native";
import { CategoryProps } from "../../pages/Order";

interface ModalPickerProps {
    options : CategoryProps[];
    handleCloseModal: () => void;
    selectedItem: (item: CategoryProps) => void;
}

//pegar dimensoes do usuario
//renomeou as variaveis
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

export function ModalPicker({handleCloseModal, options, selectedItem}: ModalPickerProps) {

    //é uma categoria selecionada
    function onPressItem(item: CategoryProps) {
        // console.log(item);
        selectedItem(item)
        handleCloseModal();
    }
    
    
    // vai fazer a verificação da listagem e colocar no modal
    const option = options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.option} onPress={() => onPressItem(item)}>
            <Text style={styles.item}> 
                {item?.name}
            </Text>
        </TouchableOpacity>
    ));
    
    return(
        <TouchableOpacity onPress={handleCloseModal} style={styles.container}>
            <View style={styles.content}>

                {/* para nao ter a barrinha lateral */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: WIDTH*.7,
        height: HEIGHT/4,
        backgroundColor: '#fff',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#8a8a8a',
    },
    option : {
        alignItems: 'center',
        borderTopWidth: 0.8,
        borderTopColor: '#8a8a8a',
        height: 40,
        paddingTop: 10
    },
    item: {
        fontSize: 18,
    }
});