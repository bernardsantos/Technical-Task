import React, {Component} from 'react';
import MyBookItem from './MyBookItem';

class MyBooks extends Component {
  render(){
    let mybookItems;
    if(this.props.mybooks){//check if the property of mybook is not null
      // returns an array of object
      mybookItems = this.props.mybooks.map(mybook=>{
        return(
          <MyBookItem key={mybook.id} mybook={mybook} />
        );
      });
    }

  //returns data
    return(
      <div className ="myBooks">
        <div className = "myBookList">{mybookItems} </div>
      </div>
    );
  }
}
export default MyBooks;
