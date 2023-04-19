import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../views/HomeView';
import Todo from '../../views/TodoView';
import Gallery from '../../views/GalleryView';
import GradeCalculator from '../../views/GradeCalculatorView';
import MovieSearch from '../../views/MovieSearchView';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Media" component={GradeCalculator}/>
        <Stack.Screen name="Tarefas" component={Todo}/>
        <Stack.Screen name="Galeria" component={Gallery}/>
        <Stack.Screen name="Filmes" component={MovieSearch}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
});