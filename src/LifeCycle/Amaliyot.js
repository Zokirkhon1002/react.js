import React from 'react';

class Amaliyot extends React.Component {
        state = { 
            count: 0,
            isCounting: false,
         }

         componentDidMount() {
            console.log("Component did mount!!!!");
            const userCount = localStorage.getItem("timer");
            if(userCount){
                this.setState({count: +userCount});
            }
         }


         componentDidUpdate() {
            console.log("Component did update!!!!");
            localStorage.setItem("timer", this.state.count);
        }


        componentWillUnmount() {
            console.log("Component will unmount")
            clearInterval(this.counterID);
        }


        
        handleStart = () =>{
            this.setState({isCounting: true})

            this.counterID = setInterval(() => {
                this.setState({count: this.state.count + 1})
            }, 1000)
        }

        handleStop = () =>{
            this.setState({isCounting: false})
            clearInterval(this.counterID);
        }


        handleReset = () => {
            this.setState({isCounting: false, count: 0})
            clearInterval(this.counterID);
        }


   
    render() { 
        return ( 
            <div className="App">
                <p>React timer</p>
                <p className="output">{this.state.count}</p>
                <p>{this.state.isCounting}</p>
                {!this.state.isCounting ? (
                    <button className="success" onClick={this.handleStart}>
                        Start
                    </button>
                ) : (
                    <button className="danger" onClick={this.handleStop}>Stop</button>
                )}
                <button className="secondary" onClick={this.handleReset}>
                    Reset
                </button>
                
            </div>
         );
    }
}
 
export default Amaliyot;