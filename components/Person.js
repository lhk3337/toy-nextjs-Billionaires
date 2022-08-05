import Image from "next/image";
export default function Person(personItem) {
  return (
    <>
      <div className="item">
        {personItem.squareImage === "https:undefined" ? (
          <Image
            src={
              "https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800"
            }
            width="100%"
            height="250px"
            objectFit="fill"
            className="images"
          />
        ) : (
          <Image src={personItem.squareImage} width="100%" height="250px" objectFit="fill" className="images" />
        )}
        <div className="userInfo">
          <p className="personName">{personItem.name}</p>
          <p className="assets">${Math.floor(personItem.netWorth / 1000)}B</p>
        </div>
        <span className="industries">{personItem.industries}</span>
      </div>
      <style global jsx>{`
        .item {
          display: flex;
          flex-direction: column;
          box-shadow: 0px 4px 23px 9px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          border-radius: 0.75rem;
          height: 450px;
          transition: all 0.3s linear;
          position: relative;
        }

        .item:hover {
          transform: scale(1.05);
        }
        .images {
          border-top-left-radius: 0.75rem;
          border-top-right-radius: 0.75rem;
        }
        .userInfo {
          position: relative;
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .userInfo .personName {
          margin-top: 1.125rem;
          margin-bottom: 0.4rem;
          text-align: center;
          font-weight: bold;
          font-size: 1.5rem;
          color: #a88a59;
          font-family: "GothicA1-Light";
        }
        .userInfo .assets {
          font-size: 1.875rem;
          text-align: center;
          color: #1a2236;
          font-weight: 600;
        }
        .item .industries {
          position: absolute;
          bottom: 1rem;
          font-weight: 600;
          right: 1.125rem;
          font-size: 20px;
        }
      `}</style>
    </>
  );
}
