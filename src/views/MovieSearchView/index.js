import { View } from "react-native";
import MovieSearchBar from "../../components/MovieSearchBar";
import { globalStyles } from "../../styles/main";
import { Text } from "react-native";

export default function MovieSearch() {
    return (
        <View style={ globalStyles.centerView }>
            <Text style={globalStyles.title} >Pesquisa de filme</Text>
            <MovieSearchBar/>
        </View>
    );
}