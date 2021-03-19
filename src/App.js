import React, { Component } from 'react'

 class App extends Component {
   constructor(props){
     super(props);
     this.state ={
       newItem:"",
       list:[]
     }
   }
   updateInput(key, value) {
     //update react state
     this.setState({
       [key]: value
     })
   }
   addItem(){
     //create item with unique id
     const newItem={
       id: 1 + Math.random(),
       value : this.state.newItem.slice()
     };
     //copy of current list of items
     const list = [...this.state.list];
      //add new item todo list
     list.push(newItem);
     //update state with new list and reset newItem input
     this.setState({
       list,
       newItem:""
     })
   }
  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];
    //filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList})
  }
  deleteAll(id) {
    const deletedList = [];
    this.setState({list : deletedList})
  }
  render() {
    return (
      <div className="App container h-screen bg-red-300 mx-auto">
        <div className="flex flex-col w-48 mx-auto justify-center">
          Type Todo Here
          <br/>
          <input className="rounded-md m-5"
          type="text"
          placeholder="text area"
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
          
          />
          <button
          className="bg-red-500 active:bg-red-700 p-2 m-2 rounded-lg"
          onClick={() => this.addItem()}>Add</button>
          <button
          className="bg-red-500 active:bg-red-700 p-2 m-2 rounded-lg"
          onClick={() => this.deleteAll()}>Remove all</button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return (
                <li className="rounded-lg bg-white p-1 m-3" key={item.id}>
                  {item.value}
                  <button
                   className="bg-red-500 active:bg-red-700 p-1 ml-2 rounded-xl"
                  onClick={() => this.deleteItem(item.id)}
                  >X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default App;
