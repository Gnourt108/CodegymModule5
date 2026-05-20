import React from 'react';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list } = this.props;

        if (list.length === 0) {
            return <p className="text-muted">Chưa có công việc nào.</p>;
        }

        return (
            <>
                {list.length === 0 ? (
                    <p className="text-muted">Chưa có công việc nào.</p>
                    ) : (
                        <ul className="list-group">
                            {list.map((todo, index) => (
                                <li key={index} className="list-group-item">
                                    {index + 1}. {todo}
                                </li>
                            ))}
                        </ul>
                    )}
            </>
        );
    }
}

export default TaskList;