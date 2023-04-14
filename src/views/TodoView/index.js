import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, FlatList } from "react-native";

export default function Todo() {

    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() == '') return;
        const newItem = {
            id: Date.now().toString(),
            text: newTask,
        };
        setTasks([...tasks, newItem]);
        setNewTask('');
    }

    const markAsDone = (id) => {
        const newTasks = tasks.filter((item) => item.id !== id);
        const doneTask = tasks.find((item) => item.id === id);
        const newDoneTask = {
            id: Date.now().toString(),
            text: doneTask.text
        };
        setDoneTasks([...doneTasks, newDoneTask]);
        setTasks(newTasks);
    }

    return (
      <View style={styles.main}>
        <Text style={styles.title}>Gerenciar Tarefas</Text>
        <TextInput style={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />
        <Button title="Adicionar Tarefa" onPress={addTask}/>
        <Text style={styles.title}>Tarefas Pendentes</Text>
        <FlatList
            data={tasks}
            renderItem={({item}) => <Item title={item.text} onPress={() => markAsDone(item.id)}/>}
            keyExtractor={item => item.id}
        />
        <Text style={styles.title}>Tarefas Concluídas</Text>
        <FlatList
            data={doneTasks}
            renderItem={({item}) => <Text>{item.text}</Text>}
            keyExtractor={item => item.id}
        />
      </View>
    );
}

const Item = ({title, onPress}) => (
    <View style={styles.task}>
        <Text>{title}</Text>
        <Button title="Concluir" onPress={onPress}/>
    </View>
);


const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 30
    },
    task: {
        margin: 10
    },
    title: {
        margin: 30,
        fontSize: 32
    }
});