import React from 'react';

class LifeCycle3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: true };
    }

    getData = () =>{
        this.setState({show: false});
    }
    render() { 
        let myHeader;
        if(this.state.show){
            myHeader = <Child />;
        }
        return ( 
            <div className="App">
               {myHeader}
               <button type="button" onClick={this.getData}>
                   Delete Header
               </button>
            </div>
         );
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("The component deleted");
    }
    render() {
        return <h1>Salom Dunyo!</h1>
    }
}
 
export default LifeCycle3;