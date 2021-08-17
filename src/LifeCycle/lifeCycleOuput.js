import React from 'react';
// import LifeCycle1 from './lifeCycle'
// import LifeCycle2 from './lifeCycle2';
// import LifeCycle3 from './lifeCycle3';
import Amaliyot from './Amaliyot';

class LifeCycleOutput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {/* <LifeCycle1 /> */}
                {/* <LifeCycle2 /> */}
                {/* <LifeCycle3 /> */}
                <Amaliyot />
            </div>
         );
    }
}
 
export default LifeCycleOutput;