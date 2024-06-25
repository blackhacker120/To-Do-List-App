import {useState} from 'react' 
import {Text , View , TextInput , FlatList , StyleSheet , Button} from 'react-native' 

export default function App(){ 
    const [tasks , setTasks] = useState('') 
    const [task , setTask] = useState([]) 

    const addTask = () =>  { 
       if(task.length > 0){ 
         setTasks([...tasks, {key:Math.random().toString() , task}]) 
         setTask('')
       };
    } 

    const deleteTask = (taskKey) => { 
       setTasks(tasks.filter((item) => item.key !== taskKey))
    } 

    return ( 
      <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.task}>{item.task}</Text>
            <Button title="Delete" onPress={() => deleteTask(item.key)} />
          </View>
        )}
      />  
      
    </View> 
    )
} 

const styles = StyleSheet.create({ 

  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  task: {
    fontSize: 18,
  },

})