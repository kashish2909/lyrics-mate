import React, { Component } from 'react';

const Context = React.createContext();

export class provider extends Component {
    state = {

    }
    
    render() {
        return (
            <Context.provider>
                {this.props.children}
            </Context.provider>
        )
    }
}
