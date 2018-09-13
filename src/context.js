import React, { Component } from 'react';

const Context = React.createContext();

export class provider extends Component {
    state = {
        trackList: [
          {track: {trackName: 'abc'}},
          {track: {trackName: '123'}},
        ],
        heading: 'Top 10 Tracks'
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
