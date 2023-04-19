import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../../styles/main";
import { fetchMovie } from "../../api/tmdb";
import { useState } from "react";

export default function MovieSearchBar() {

    const [movie, setMovie] = useState(null);

    const getMovie = async (title) => {
        const data = await fetchMovie(title);
        console.log(data);
        setMovie(data);
    }

    return (
        <View style={globalStyles.centerView}>
            <View style={{margin: 30}} >
                <TextInput style={ globalStyles.textInput } placeholder="Pesquise por um filme..." 
                    onChangeText={input => getMovie(input)}/>  
            </View>
            <View style={styles.desc}> 
                {movie && <Text>Título: {movie.title}</Text>} 
                {movie && <Text>Sinopse: {movie.overview}</Text>} 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    desc: {
        margin: 30,
        fontSize: 24,
        gap: 20
    },
});