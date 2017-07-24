import React, {Component} from 'react';

class MyBookItem extends Component{
  //
  check(Price){//function that check book price
    if(Price === 'FOR_SALE'){//check if the book is FOR_SALE or not
      // if it is for sale, it returns the books retailPrice
      return(
        <div className='for_Sale'>
        {this.props.mybook.saleInfo.retailPrice.currencyCode} {this.props.mybook.saleInfo.retailPrice.amount}
        </div>
      );
    }
    //else, it return's Sold Out
    else{
      return(
        <div className = "Sold_out">
          Sold Out
          </div>
      );
    }
  }
  render(){
    //it will display the book's thumbnail, title and retail price
    return(
      <div className = "myBook">
        <div className = "Thumbnail">
          <img className = "img" alt = "Harry Potter" src={this.props.mybook.volumeInfo.imageLinks.thumbnail} />
        </div>
        <br />
        <div className="Title">
          {this.props.mybook.volumeInfo.title}
          {this.check(this.props.mybook.saleInfo.saleability)}
        </div>
      </div>
    );
  }
}

export default MyBookItem;
