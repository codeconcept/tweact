import React from 'react';

class Pomodoro extends React.Component {
    constructor() {
        super();
        this.getDuration = this.getDuration.bind(this);
    }

    getDuration(evt) {
        evt.preventDefault();
        console.log(this.durationInput.value); 
        this.durationInput.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getDuration}>
                    <input type="text" ref={(input) => { this.durationInput = input }} />
                    <button onClick={this.getDuration}>ok</button>
                </form>
            </div>
        );
    }
}

export default Pomodoro;