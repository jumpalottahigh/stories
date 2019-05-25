import React from 'react'
import ReactMapGL from 'react-map-gl'

const API_KEY = process.env.GATSBY_MAPBOX_API_KEY || ''

class Map extends React.Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
    },
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={API_KEY}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    )
  }
}

export default Map
