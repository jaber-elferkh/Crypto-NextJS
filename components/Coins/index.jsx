import Link from 'next/link';
import React from 'react';
import style from './styles.module.scss';

const Coins = ({
  name,
  price,
  symbol,
  image,
  marketCap,
  volume,
  priceChange,
  id,
}) => {
  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={style.coinContainer}>
          <div className={style.coin_row}>
            <div className={style.coin}>
              <img src={image} alt={name} className={style.coin__image} />
              <h1 className={style.coin__name}>{name}</h1>
              <p className={style.coin__symbol}>{symbol}</p>
            </div>
            <div className={style.coin_data}>
              <p className={style.coin__price}>${price}</p>
              <p className={style.coin__volume}>${volume.toLocaleString()}</p>
              {priceChange < 0 ? (
                <p className={(style.coin__percent, style.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(style.coin__percent, style.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}

              <p className={style.coin__marketcap}>
                Market Cap: ${marketCap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
