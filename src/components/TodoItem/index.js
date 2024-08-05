import '../TodoItem'
import './index.css'
const TodoItem = props => {
  const {details, deleteTodoItem} = props
  const {id, title} = details
  const onDelete = () => {
    deleteTodoItem(id)
  }
  return (
    <li>
      <p>{title}</p>
      <div>
        <button className="but" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
