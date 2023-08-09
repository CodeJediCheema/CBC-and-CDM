import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {  // Creating a state variable in Class Based Components
            count : 0, // First with default value
            count2 : 2, // Second with default value
        }

        console.log("Child Constructor called");
    }

    componentDidMount(){
        console.log("Child Component Did Mount called");
    }
    render(){
        const {name, location } = this.props;
        console.log("Child Render Called")
        return(
            <div className="user-class">
            <h1>Count : {this.state.count}</h1> {/* Using state variables */}
            {/* <h1>Count : {this.state.count2}</h1> Using state variables  */}
            {/* <h1>Count2 : {this.state.count2}</h1> */}
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1,
                    // count2 : this.state.count2 + 2
                })
            }} >Count Increase</button>
            
            <h2> Name: {name}</h2>
            <h3> Location: {location}</h3>
            <h3> Contact: @gagancheema</h3>

        </div>

        )
    }

}

export default UserClass;
