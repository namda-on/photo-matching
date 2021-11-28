import react from "react";
import Card from "../../shared/components/card";
import Layout from "../../shared/layout";
import { Cards } from "./cards";

const SearchPage = () => {
  return (
    <Layout>
      <div className="flex justify-between border-4 rounded-2xl bg-gray-200 mt-4 w-80 h-12">
        <div className="flex w-1/4 border-r-2 items-center justify-center">
          돋보기
        </div>
        <div className="flex w-3/4 items-center justify-start">검색하기</div>
      </div>
      <div className="flex justify-between border-4  bg-gray-200 mt-4 w-80 h-12">
        <div className="flex w-1/4 items-center justify-center">증명사진</div>
        <div className="flex w-1/4 items-center justify-center">프로필</div>
        <div className="flex w-1/4 items-center justify-center">바디프로필</div>
        <div className="flex w-1/4 items-center justify-center">스냅샷</div>
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
