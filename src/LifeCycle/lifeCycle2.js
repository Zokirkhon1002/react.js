import React from 'react';

class LifeCycle2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            favouriteColor: 'Crimson'
         }
    }

    componentDidMount() {
        console.log("componentDidMount")
        setTimeout(() => {
            this.setState({favouriteColor: "Yellow"})
        }, 3000)
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate");
        document.querySelector("h2").innerHTML = `The updated favourite color is ${this.state.favouriteColor}`;
    }

    render() { 
        return ( 
            <div className="App">
                <h2>My Favourite color is {this.state.favouriteColor}</h2>
            </div>
         );
    }
}
 
export default LifeCycle2;