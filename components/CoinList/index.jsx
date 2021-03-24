import React from 'react';
import Coins from '../Coins';

const CoinList = ({ filtredCoins }) => {
  return (
    <div>
      {filtredCoins.map((coin) => (
        <Coins
          key={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          image={coin.image}
          price={coin.current_price}
          marketCap={coin.market_cap}
          volume={coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}
    </div>
  );
};

export default CoinList;
