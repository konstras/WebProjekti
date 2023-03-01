//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import sivuIsoKuva from "../pictures/sivuIsoKuva.jpg"
const Etusivu = () => {
    
    return(
        <div className="container" style={{ "paddingTop": "12px" }}>
                    <div className="row">
                        <div id='uutiset' class="container row col-sm-6">
                            <div className="col-sm-6" >
                                <h4>Heading</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, leo ut sodales gravida,
                                    ante
                                    turpis maximus leo, eleifend aliquam ex nunc eget urna. Quisque sollicitudin velit et ante
                                    tincidunt
                                    venenatis. Quisque accumsan viverra gravida. In imperdiet congue ligula sit amet tristique.
                                    Nullam
                                    suscipit, nunc id pellentesque rutrum, risus mauris ornare massa, at maximus ante sapien
                                    luctus
                                    est.
                                    Aenean vel tincidunt sem. Aliquam in molestie velit, in luctus erat. Duis urna est, euismod
                                    id
                                    cursus et, porttitor in ipsum. Sed aliquet lectus ut nulla volutpat, nec sodales urna
                                    egestas.
                                    Fusce
                                    sapien dolor, sollicitudin eu est a, elementum venenatis metus. Aenean tempus ligula vitae
                                    nunc
                                    ultricies pretium. guh

                                </p>
                                <Link to="/uutisSivu" style={{ "float": "right" }}>Lue lisää...</Link>
                            </div>
                            <div className="col-sm-6">
                                <h4>Heading</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, leo ut sodales gravida,
                                    ante
                                    turpis maximus leo, eleifend aliquam ex nunc eget urna. Quisque sollicitudin velit et ante
                                    tincidunt
                                    venenatis. Quisque accumsan viverra gravida. In imperdiet congue ligula sit amet tristique.
                                    Nullam
                                    suscipit, nunc id pellentesque rutrum, risus mauris ornare massa, at maximus ante sapien
                                    luctus
                                    est.
                                    Aenean vel tincidunt sem. Aliquam in molestie velit, in luctus erat. Duis urna est, euismod
                                    id
                                    cursus et, porttitor in ipsum. Sed aliquet lectus ut nulla volutpat, nec sodales urna
                                    egestas.
                                    Fusce
                                    sapien dolor, sollicitudin eu est a, elementum venenatis metus. Aenean tempus ligula vitae
                                    nunc
                                    ultricies pretium.

                                </p>
                                <Link to="/uutisSivu" style={{ "float": "right" }}>Lue lisää...</Link>
                            </div>
                            <Link to="/uutiset" style={{ "textAlign": "right" }}><strong>Katso muita uutisia</strong></Link>
                        </div>
                        <div className="col-sm-6">
                            <img id="isoKuva" src={sivuIsoKuva} alt="" />
                        </div>
                    </div>
                </div>
    )
}
export default Etusivu;