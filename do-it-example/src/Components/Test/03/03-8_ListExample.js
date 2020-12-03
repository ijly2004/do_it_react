import React, { Component } from 'react';

class ListExample extends Component {
  render() {
    const priceList = [1,2,3,4];
    const prices = priceList.map((price, i) => (
      <div key={`price_${i}`}>가격 : {price} $</div>
    ));
    console.log('prices', prices);
    return (
      <div>
        <div>Prices</div>
        {prices}
      </div>
    );
  }
}

export default ListExample;
