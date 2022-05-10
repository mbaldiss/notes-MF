import FormSearch from './FormSearch';

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark rounded m-2">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="/">Note´s System v1</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item p-2">
                <button className="btn btn-primary" onClick={() => props.addNote()}>Add Note</button>
              </li>

              <li className="nav-item p-2">
                <FormSearch newFilter={props.newFilter} searchFilter={props.searchFilter}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;