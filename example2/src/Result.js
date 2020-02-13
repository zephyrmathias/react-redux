import React from 'react'
import PropTypes from 'prop-types'

export default function Result({ data }) {
  const { isFetching, payload } = data

  if (!Object.keys(payload).length) {
    return (
      <div>NO RESULT!</div>
    )
  }

  if (isFetching) {
    return (
      <div>LOADING...</div>
    )
  }

  return (
    <div>
      <div>Flight Number: {payload.flight_number}</div>
      <div>Mission Name: {payload.mission_name}</div>
      <div>Ships: {[...payload.ships].join()}</div>
      <img src={payload.links.flickr_images[4]} alt=""/>
    </div>
  )
}

Result.defaultProps = {
  data: {
    isFetching: false,
    payload: {},
  },
}

Result.propTypes = {
  data: PropTypes.shape({
    isFetching: PropTypes.bool,
    payload: PropTypes.shape({
      flight_number: PropTypes.number,
      mission_name: PropTypes.string,
      ships: PropTypes.arrayOf(PropTypes.string),
      links: PropTypes.shape({
        flickr_images: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }),
}
