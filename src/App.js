import React, { Component } from 'react';
import MyBooks from './Components/MyBooks';
import $ from 'jquery';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {//initial state
      mybooks: []//array of objects
    }
  }
  getmyBooks(){
    $.ajax({
      url:'https://www.googleapis.com/books/v1/volumes?q=harry%20potter',
      dataType:'json',
      cache:false,
      success: function(data){
        this.setState({mybooks: data.items}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }
  componentWillMount(){// component life cycles method called before the render method is executed
    this.getmyBooks();
  }

  componentDidMount(){//component life cycle method called when the render method has been executed
    this.getmyBooks();
  }
  render(){
    return(
      <div className ="App">
        <MyBooks mybooks ={this.state.mybooks} />
      </div>
    );
  }
}

export default App;
