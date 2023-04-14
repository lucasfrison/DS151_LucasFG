import { View, Text } from "react-native";
import GradeForm from "../../components/GradeForm";

export default function GradeCalculator() {
    return (
        <View>
            <Text>Calculadora de média</Text>
            <GradeForm/>
        </View>
    );
}