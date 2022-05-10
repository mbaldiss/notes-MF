let count = 0;

const Note = props => {
    return (
        <div className="mb-5 m-3">
            <h1 className="text-success">Notes</h1>
        <ul className="list-group">
            {props.notesFiltered.map(note => {
            return (
                <div className="container w-100 p-10 m-2" key={count++}>
                <li className="list-group-item"><h3>{note.content}</h3> <button className="btn btn-warning" onClick={() => props.changeImportance(note)}>Change importance</button> <button className="btn btn-danger" onClick={() => props.deleteNote(note)}>Delete Note</button></li>
                </div>
                )
            })}
        </ul>
        </div>
    )
}

export default Note;