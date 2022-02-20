import React from 'react'
import './Releases.css'
import ReleaseItem from './ReleaseItem/ReleaseItem.js'
import { release } from 'os'

class Releases extends React.Component {
  release_ids = [1,2]
  releases = this.release_ids.map((id, idx) => (
   require(`./../Article/Articles/${id}.jsx`).default
  ))

  render = () => {
    return (
      <div id="releases_container">
        <div id="releases_title">Releases</div>
        {
          this.releases.map((release, idx) => (
            <ReleaseItem
            item = {release}
          />
          ))
        }
      </div>
    )
  }
}

export default Releases