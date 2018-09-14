import React, { Component } from 'react';
import { Consumer } from '../../context';

import Spinner from '../Layout/Spinner';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { trackList, heading } = value;
          if (trackList === undefined || trackList.length === 0) {
            return <Spinner />
          } else {
            return (
             <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">

                </div>
             </React.Fragment>
            );
          }
        }}
      </Consumer>
    )
  }
}

export default Tracks;