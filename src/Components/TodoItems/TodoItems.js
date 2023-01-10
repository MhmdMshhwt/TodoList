import './TodoItems.css'

const TodoItems = (props) => {
    const { Items, deleteItem } = props
    let length = Items.length
    const ListItems = length ? (
        Items.map((item) => {
            return (
                <div key={item.id}>
                    <span className='name'>{item.name}</span>
                    <span className='age'>{item.age}</span>
                    <span className='action icon' onClick={() => deleteItem(item.id)} >&times;</span>
                </div>  
            );
        })
    ) : (
            <p>There is no items to show</p>
    )
    
    return (
        <div className='listItems'>
            <div>
                <span className='name title' >Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>
            </div>
            {ListItems}
        </div>
    );
}

export default TodoItems