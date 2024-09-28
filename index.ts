import axios from "axios";


const URL = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number,
  title: string,
  completed: boolean;
}

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    To do with ID ${id}
    Has a title of ${title}
    Is it finished ${completed}
    `
  )
}

axios.get(URL).then(response => {
  console.log(response.data)

  const data = response.data as Todo;

  const id = data.id
  const title = data.title
  const completed = data.completed

  logTodo(id, title, completed);
})