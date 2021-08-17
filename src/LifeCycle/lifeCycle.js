import React from 'react';

class LifeCycle1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: [],
            loading: true,
            comments: []
         }
    }


    // getData() {
    //     setTimeout(() => {
    //         console.log("Our data is updated");
    //         this.setState({data: "Abdulhamid"})
    //     }, 3000)
    // }

    componentDidMount() {
        console.log("componentDidMount");
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => this.setState({posts: data, loading: false}))

  this.timerId = setInterval(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => this.setState({comments: data, loading: false}))
  }, 3000)
    }

    componentDidUpdate() {
        console.log("componentDidUpadte")
    }

    // componentDidMount() {
    //     this.getData()
    // }


    render() { 
        return ( 
            <div>
                {this.state.loading ?
                 <h3>Loading...</h3>: 
                 <h3>{this.state.posts.length} was loaded, and have {this.state.comments.length} comments</h3>}
            </div>
         );
    }
}
 
export default LifeCycle1;