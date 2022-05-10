
const FormSearch = (props) => {
    return (
        <div>
            <input className="form-control" value={props.newFilter} onChange={props.searchFilter} placeholder="Search..."></input>
        </div>
    )
}

export default FormSearch;