import React from "react";
import TaskList from "./TaskList.jsx";

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            list: []
        };
    }

    handleChange = (event) => {
        this.setState({
            item : event.target.value
        });
    }

    handleAddItem = () => {
        const {item, list} = this.state;
        if(item.trim() != ''){
            this.setState({
                list:[...list,item.trim()],
                item: ''
            })
        }
    }

    render() {
        const { item, list } = this.state;
        return (
            <>
                <div className="container py-4" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-4">Todo List</h1>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập công việc..."
                            value={item}
                            onChange={this.handleChange}
                            onKeyDown={(e) => e.key === 'Enter' && this.handleAddItem()}
                        />
                        <button className="btn btn-primary" onClick={this.handleAddItem}>
                            Add
                        </button>
                    </div>

                    <TaskList list={list} />
                </div>
            </>
        )
    }
}

export default TaskForm;