import { FlatList, View, Image, StyleSheet } from "react-native";

export default function Gallery() {

    const images = [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/301',
        'https://picsum.photos/200/302',
        'https://picsum.photos/200/303',
        'https://picsum.photos/200/304',
        'https://picsum.photos/200/305',
        'https://picsum.photos/200/306',
        'https://picsum.photos/200/307',
        'https://picsum.photos/200/308',
        'https://picsum.photos/200/309',
        'https://picsum.photos/200/310',
        'https://picsum.photos/200/311',
        'https://picsum.photos/200/312',
        'https://picsum.photos/200/313',
        'https://picsum.photos/200/314',
    ];

    const flexDir = ['column', 'row'];

    const renderImage = ({ item }) => {
        return (
            <Image source={{ uri: item }} style={{ width: Math.random() * 500, height: Math.random() * 500,
                 flex: Math.random() * 20, margin: Math.random() * 20, aspectRatio: 1}} />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
            data={images}
            renderItem={renderImage}
            keyExtractor={(item) => item}
            numColumns={3}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }
});
