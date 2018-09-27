import React, {Component} from 'react'

import locationData from '../locationData'


class LocationList extends Component {
    render() {
        const locations = locationData.map((location) => {
        return (
          <div id="locations" className="location-list">

          </div>
          
        )
    }
    }
}

export default LocationList
