const Kartta = () => {
    return (
        <div id="kartta">
            <h1 style={{"marginLeft":"12px"}}>Kartta</h1>
            <iframe id="isoKartta" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=27.651987075805668%2C62.90826630523714%2C27.65966892242432%2C62.91714786835768&amp;layer=mapnik">
                </iframe><br/><small><a href="https://www.openstreetmap.org/#map=16/62.9127/27.6558" style={{"marginLeft":"12px"}}>View Larger Map</a></small>
        </div>
    )
}
export default Kartta;