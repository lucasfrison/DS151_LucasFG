import { View, Text } from "react-native";
import GradeForm from "../../components/GradeForm";
import { globalStyles } from "../../styles/main";

export default function GradeCalculator() {
    return (
        <View style={ globalStyles.centerView } >
            <Text>Calculadora de média</Text>
            <GradeForm/>
        </View>
    );
}