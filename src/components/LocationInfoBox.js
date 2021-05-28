const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h1>Event Location Info</h1>
            <ul>
                <li>Id: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
