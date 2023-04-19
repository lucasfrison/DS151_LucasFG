import { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/main";

export default function GradeForm() {

    const [primeiraNota, setPrimeiraNota] = useState('');
    const [segundaNota, setSegundaNota] = useState('');
    const [media, setMedia] = useState('');
    const [calculoFeito, setCalculoFeito] = useState(false);

    const calcularMedia = () => {
        if (primeiraNota == '' || segundaNota == '')
            return;
        const result = (parseFloat(primeiraNota) + 
            parseFloat(segundaNota)) / 2;
        setMedia(result.toFixed(2));
        setPrimeiraNota('');
        setSegundaNota('');
        setCalculoFeito(true);
    }

    return (
        <View style={globalStyles.centerView}>
            <Text>Nota 1</Text>
            <TextInput style={ globalStyles.textInput } onChangeText={n1 => 
                setPrimeiraNota(n1)} placeholder="Ex.: 70" 
                keyboardType="numeric"
                value={primeiraNota}/>
            <Text>Nota 2</Text>
            <TextInput style={ globalStyles.textInput } placeholder="Ex.: 70"
                keyboardType="numeric"
                onChangeText={n2 =>
                setSegundaNota(n2)}
                value={segundaNota}/>
            <Button onPress={calcularMedia} title="Calcular Média"/>
            {calculoFeito && <Text>Média: {media}</Text>}
        </View>
    );
}