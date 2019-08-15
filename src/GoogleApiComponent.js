import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    render() {
        const { google } = this.props;
        const maps = google.maps;
        let lat = 46.2718232;
        let lng = 19.9143;
        const center = new maps.LatLng(lat, lng);
        return (
            <div>
                <Map
                    style={{
                        minWwidth: "200px",
                        minHeight: "200px"
                    }}
                    google={this.props.google}
                    zoom={15}
                    center={center}
                >
                    <Marker position={{ lat: 46.27119, lng: 19.91499 }} title={'Veterans` Shooting Club lőtér'} />
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    language: "HUN",
    apiKey: "AIzaSyBqlAOOHHZ_PWef8PNXGP7fGjTkHdqSV3s",
    v: "3"
})(MapContainer);
