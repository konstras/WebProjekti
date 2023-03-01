import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (

        <>
            <div className="row">
                <div id='banner'>
                    <h1 id="title" style={{ "float": "left" }}><strong>In The Forest</strong></h1>
                </div>
                <nav class="topnav">
                    <Link to="/">Etusivu</Link>
                    <Link to="/kartta">Kartta</Link>
                    <Link to="/uutiset">Uutiset</Link>
                    <div class="search-container">
                        <form class="form-inline">
                            <input type="text" placeholder="Etsi ratoja" name="search" />
                            <Link to="/rata">
                            <button type="submit">Hae</button>
                            </Link>
                        </form>
                    </div>

                </nav>
            </div>

            <Outlet />
        </>

    )
};

export default Layout;


/*
<ul className="topnav">
                    <li><Link to="/">Etusivu</Link></li>
                    <li><Link to="/kartta">Kartta</Link></li>
                    <li><Link to="/uutiset">Uutiset</Link></li>
                    <li><div><form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form></div></li>

                </ul>
                */
