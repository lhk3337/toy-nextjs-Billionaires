export default function FinancialAssets(assetItem) {
  return (
    <div className="assetItem">
      <h2>
        {assetItem.exchange} ・ {assetItem.ticker}
      </h2>
      <div className="shareNumber">
        <h2>Share</h2>
        <span>{assetItem.numberOfShares.toLocaleString()}</span>
      </div>
      <div className="exercisePrice">
        <h2>exercise Price</h2>
        {assetItem.exerciseOptionPrice !== undefined ? (
          <span>$ {assetItem.exerciseOptionPrice}</span>
        ) : (
          <span>Not Found</span>
        )}
      </div>
      <div>
        <h2>Share Price</h2>
        <span>$ {Math.floor(assetItem.sharePrice)}</span>
      </div>
      <style jsx>{`
        .assetItem {
          box-shadow: 0px 4px 23px 9px rgba(0, 0, 0, 0.1);
          border-radius: 0.75rem;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          transition: all 0.3s linear;
        }
        .assetItem:hover {
          transform: scale(1.05);
        }
        .shareNumber {
          margin: 2rem;
        }
        .exercisePrice {
          margin-bottom: 2rem;
        }
        p {
          font-size: 1.4rem;
          font-weight: bold;
          color: #1a2236;
        }
        h2 {
          font-size: 1.6rem;
          margin-bottom: 1rem;
        }
        span {
          font-size: 1.2rem;
          color: #a88a59;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
