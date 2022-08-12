import React, {Component} from 'react'

class Todo extends Component {
    state = { 
        taskName: '',
        task : ['task 1','task 2', 'task 3']
    } 
    handleChange = (e) => {
        this.setState({
            taskName: e.target.value
        })
    }
    handleClick = () => {
        if(this.state.taskName.length !== 0){
        let updatedTaskList = [...this.state.task]
        updatedTaskList.push(this.state.taskName)
        this.setState({
            taskName: '',
            task: updatedTaskList
        })
    }
    }
    deleteTask = (index) => {
        console.log(index)
        let updatedTaskList = [...this.state.task]
        updatedTaskList.splice(index,1)
        this.setState({
            task: updatedTaskList
        })
    }
    handleUpdate = (e,index) => {
        let updatedTaskList = [...this.state.task]
        updatedTaskList.splice(index,1,e.target.value)
        console.log(updatedTaskList)
        this.setState({
            task: updatedTaskList
        })
    }
    render() { 
        return (
            <div>
                <h1>My Schedule!</h1>
                <input 
                    type='text' 
                    placeholder='Enter your task'
                    onChange = {this.handleChange}
                    value = {this.state.taskName}
                />
                <button onClick={this.handleClick}>Add Task</button>
                <ol>
                {
                    this.state.task.length !== 0 ?  
                        this.state.task.map((item,idx) => <li key={item}>
                                                            <span>{item}</span>
                                                            <input placeholder='Enter updated task'
                                                                onChange = {(e)=>this.handleUpdate(e,idx)}
                                                            />
                                                            <button onClick={()=>this.deleteTask(idx)}>Delete</button>
                                                        </li>) 
                    : ''
                }
                </ol>
                <p>React State : {JSON.stringify(this.state)}</p>
            </div>
        );
    }
}
 
export default Todo;