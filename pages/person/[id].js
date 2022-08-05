import Image from "next/image";
import FinancialAssets from "../../components/FinancialAssets";
export default function Detail(data) {
  return (
    <div className="container">
      <div className="userInfo">
        <Image
          src={data.squareImage}
          width={500}
          height={500}
          objectFit="fill"
          className="images"
          // layout="responsive"
        />
        <div className="info">
          <span className="name">{data.name}</span>
          <h2 className="worth">Networth : {Math.floor(data.netWorth / 1000)} Billion</h2>
          <h2 className="industry">Industry : {data.industries}</h2>
          <p className="bio">{data.bio}</p>
        </div>
      </div>
      <div className="financialAssets">
        <h1>FinancialAssets</h1>
        <div className="AssetGrid">
          {data.financialAssets?.map((asset, index) => (
            <FinancialAssets key={index} {...asset} />
          ))}
        </div>
      </div>
      <style global jsx>{`
        .container {
          margin-top: 30rem;
          max-width: 400px;
          margin: 0 auto;
        }
        .images {
          border-radius: 0.75rem;
        }
        .userInfo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          height: 100%;
        }
        .info .name {
          text-align: center;
          display: inline;
          font-size: 3rem;
          margin-top: 3rem;
          color: #a88a59;
          width: 20rem;
          border-top: 5px solid #1a2236;
          border-bottom: 5px solid #1a2236;
          padding: 10px 0;
        }
        h2 {
          font-size: 2rem;
          color: #1a2236;
        }
        .info .worth {
          margin: 2rem 0;
        }
        .info .bio {
          margin-top: 3rem;
          text-align: center;
          letter-spacing: 2px;
        }
        .financialAssets {
          margin-top: 6rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
        }
        .financialAssets .AssetGrid {
          margin-top: 2rem;
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          width: 550px;
          padding: 2rem 6rem;
          gap: 4rem;
        }
        @media (min-width: 612px) {
          .container {
            max-width: 550px;
          }
        }
        @media (min-width: 860px) {
          .container {
            max-width: 612px;
          }
          .info {
            max-width: 500px;
          }
        }
        @media (min-width: 1280px) {
          .container {
            max-width: 1060px;
          }
          .info {
            max-width: 500px;
          }
          .userInfo {
            flex-direction: row;
            justify-content: space-between;
          }
          .info .worth {
            margin: 2rem 0;
          }
          .info .bio {
            margin-top: 1rem;
          }
          .financialAssets {
            display: block;
          }
          .financialAssets .AssetGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: 100%;
            padding: 2rem 6rem;
            gap: 4rem;
          }
        }
        @media (min-width: 1536px) {
          .container {
            max-width: 1300px;
          }
          .info {
            max-width: 700px;
          }
          .info .worth {
            margin: 3rem 0;
          }
          .info .bio {
            margin-top: 2rem;
          }
          .info .name {
            margin-top: 0;
          }
          .financialAssets .AssetGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            padding: 2rem 6rem;
            gap: 4rem;
          }
        }
        @media (min-width: 1792px) {
          .container {
            max-width: 1536px;
          }
          .info {
            max-width: 900px;
          }
          .info .name {
            margin-top: 0;
          }
          .financialAssets .AssetGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            padding: 2rem 6rem;
            gap: 4rem;
          }
        }
        @media (min-width: 2048px) {
          .container {
            max-width: 1600px;
          }
          .info .name {
            margin-top: 0;
            margin-bottom: 2rem;
          }
          .financialAssets .AssetGrid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            padding: 2rem 6rem;
            gap: 4rem;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await (await fetch(`http://localhost:3000/api/person/${id}`)).json();
  return {
    props: data,
  };
}
