import React from "react";


export default class Form extends React.Component {
        constructor(props){
            super(props);
            this.uRef = React.createRef();
            
           
        }    
        handleSubmit = (event) => {
            event.preventDefault();
            document.write(this.uRef.radio);
        };
        render(){ 
        return (
            <div> 

            <form onSubmit={this.handleSubmit} >
                <label htmlFor="">TEXT: </label>
                <input type="text" name="info" /><br />
                
                <label htmlFor="">Checkbox: </label>
                <input type="checkbox" name="checkbox" /> <br />
               
                <label htmlFor="">File: </label>
                <input type="file" name="file" /><br />
                
                <label htmlFor="">Radio: </label>
                <span>I</span>
                <input type="radio" ref={this.uRef}  name="radio"  value="I" />
                <span>You</span><input type="radio" name="radio"  value="You"/>
                <span>Me</span><input type="radio" name="radio"  value="Me"/><br />
                <label htmlFor="">Select: </label>
                <select name="select" >
                    <option>I</option>  
                    <option>You</option>  
                    <option>Me</option>  
                </select>  <br />
                <input type="submit" onClick={this.handleSubmit} value="Click me" />
            </form>
            

            </div>
        );
    }
 }   