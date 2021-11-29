import react from "react";
import Card from "../../shared/components/card";
import Layout from "../../shared/layout";
import { Cards } from "./cardInfos";

const SearchPage = () => {
  return (
    <Layout>
      <div className="flex justify-between border-4 rounded-2xl bg-gray-200 mt-4 w-80 h-12">
        <div className="flex w-2/5 border-r-2 items-center justify-end mr-4">
          <img
            className="w-4 h-4"
            src="https://cdn-icons.flaticon.com/png/512/3031/premium/3031293.png?token=exp=1638151958~hmac=6730f1d570f59375d20e66343cbe7891"
            alt="search"
          />
        </div>
        <div className="flex w-3/5 items-center justify-start">검색하기</div>
      </div>
      <div className="flex justify-between border-4  bg-gray-200 mt-4 w-80 h-12">
        <button className="flex w-1/4 items-center justify-center hover:bg-red-700 rounded-xl">
          증명사진
        </button>
        <button className="flex w-1/4 items-center justify-center hover:bg-red-700 rounded-xl">
          프로필
        </button>
        <button className="flex w-1/4 items-center justify-center hover:bg-red-700 rounded-xl">
          바디프로필
        </button>
        <button className="flex w-1/4 items-center justify-center hover:bg-red-700 rounded-xl">
          스냅샷
        </button>
      </div>
      <ul className="grid grid-cols-2 mt-4 gap-4">
        {Cards.map((card) => (
          <Card cardInfo={card} />
        ))}
      </ul>
    </Layout>
  );
};

export default SearchPage;
