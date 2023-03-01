import sivuPienempiKuva from "../pictures/sivuPienempiKuva.jpg"
import sivuFBlogo from "../pictures/sivuFBlogo.jpg"
const Rata = () => {
    return (
        <div id="rata" className="container">
            <div className="row">
                <div id="uutiset" className="col-sm-9" style={{ "marginLeft": "12px" }}>
                    <h1 style={{ "marginLeft": "12px" }}>Puijon FrisbeeGolf</h1>
                    <p>
                        Puijon frisbeegolf rata sijaitsee entisen golfkentän ja Antikkalan laskettelurinteen ympäristössä.
                        Rataa ylläpidetään viikotteisesti, joten se pysyy todella hyvässä kunnossa. Rataa kiertäessä tulee paljon
                        vaihtelua maastossa. Osa väylöistä on isoilla aukinaisilla suorilla ja osa taas jyrkissä mäessä metsän keskeltä.
                        Rata on saanut AA1 luokituksen, joten siitä riittää haastetta hieman kokeneemmillekin harrastajille.
                    </p><br/><br/>
                    <div>
                        <iframe id="pieniKartta" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=27.651987075805668%2C62.90826630523714%2C27.65966892242432%2C62.91714786835768&amp;layer=mapnik">
                        </iframe><br /><small><a href="https://www.openstreetmap.org/#map=16/62.9127/27.6558" style={{ "marginLeft": "12px" }}>View Larger Map</a></small>
                    </div>
                </div>
                <div className="col-sm-2" >
                    <img id="sivuPienempiKuva" src={sivuPienempiKuva}></img>
                    <p id="info">
                    <h4>Rata tiedot:</h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod, leo ut sodales gravida,
                        ante
                        turpis maximus leo, eleifend aliquam ex nunc eget urna. Quisque sollicitudin velit et ante
                        tincidunt
                        venenatis. Quisque accumsan viverra gravida. In imperdiet congue ligula sit amet tristique.
                    <br></br>
                    <a href="https://www.facebook.com/pages/Puijo-Discgolf/464853033864395"><img id="sivuFBlogo" src={sivuFBlogo} ></img></a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Rata;