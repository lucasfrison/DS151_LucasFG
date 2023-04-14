import { SafeAreaView, View, StyleSheet, FlatList, Button } from "react-native";
import { ROUTES } from "../../routes/view_routes";

const Item = ({title, onPress}) => (
    <View style={style.item}>
      <Button title={title} onPress={onPress}/>
    </View>
);


export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={style.mainView}>
            <FlatList
                contentContainerStyle={{flexGrow: 1,  justifyContent: 'center'}}
                data={ROUTES}
                renderItem={({item}) => <Item title={item.title} onPress={() => navigation.navigate(item.navigateTo)}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    list: {
        flexGrow: 1,  
        justifyContent: 'center'
    }
});