import { Header } from "@/components";
// import { useStateContext } from "@/context/StateContext";
import React, { useState } from "react";

const MarketPlace = () => {
  const [data, updateData] = useState();
  //   const [dataFetched, updateFetched] = useStateContext(false);
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen w-full justify-center items-center text-white font-semibold">
        <div className="flex pb-32  justify-between items-center  space-x-5">
          <span>MarketPlace</span>
          <span>List My NFT</span>
          <span>Profile</span>
        </div>
        <div className="flex flex-col place-items-center mt-20">
          <div className="md:text-xl font-bold text-white">Top NFTs</div>
          <div className="flex mt-5 justify-between flex-wrap max-w-screen-xl text-center">
            {/* {data.map((value, index) => {
              return <NFTTile data={value} key={index}></NFTTile>;
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
