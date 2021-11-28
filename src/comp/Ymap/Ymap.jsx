import React, { Component } from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';


class Ymap extends Component {
    render() {
        const mapData = {
            center: [55.751574, 37.573856],
            zoom: 10,
        };
        const coordinates = [55.684758, 37.738521]

        return (
            <YMaps>
                <Map  width={"50vw"} height={"70vh"} defaultState={mapData}>
                {/* {coordinates.map(coordinate => <Placemark geometry={coordinate} />)} */}
                    <Placemark geometry={coordinates} />
                </Map>
            </YMaps>
        )
    }
}

export default Ymap
