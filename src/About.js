import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react"; // Another method to use it


{/* This is Functional About Component */}
// const About = () =>{
//     return (
//         <div>
//             <h1>About page</h1>
//             <h2>This is our developing page.</h2>
            
//             <UserClass name = {"Gaganrattan Singh (class)"} location = {"Surya Enclave (class)"}/>
//         </div>
//     )
// }




// This is Class Based Component of About


class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor called");
    }


    // This will be called when the whole page is mounted/ rendered.
    componentDidMount(){ 
        console.log("Parent Component Did Mount called");
    }

    render(){
        return(
            <div>
            <h1>About page</h1>
            <h2>This is our developing page.</h2>
            <UserClass name = {"Gaganrattan Singh(class)" } location = {"Surya enclave (class)"}/>
        </div>
        )
        
    }
}


export default About;