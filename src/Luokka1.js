import React, { Component } from 'react';

class Luokka1 extends Component {
    state = {
        name: 'Robin Hood'
    }

    handleNameInput = e => {
        this.setState({ name: e.target.value });
    };
    
    render() {
        return (
            <div className="marg">
                <h3>Luokkapohjainen komponentti</h3>
                <input
                    type="text"
                    onChange={this.handleNameInput}
                    value={this.state.name}
                    placeholder="Nimesi"
                />
                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default Luokka1;

