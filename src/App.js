import React from "react";
import AddItems from "./Components/AddItems/AddItems";
import TodoItems from "./Components/TodoItems/TodoItems";

class App extends React.Component {
  
  state = {
    items:[
      {id:1, name:'Mohammed', age:22},
      {id:2, name:'Fatema', age:19},
      {id:3, name:'Adham', age:16},
    ]
  }
  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    /*let i = items.findIndex(item => item.id === id)
    items.splice(i, 1)*/
    this.setState({ items })
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return(
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems Items = {this.state.items} deleteItem = {this.deleteItem} />
        <AddItems addItem = {this.addItem} />
      </div>
    );
    
  }
}

export default App;
