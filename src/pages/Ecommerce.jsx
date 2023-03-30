/* eslint-disable */

import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
// index로 export할 때 그냥 conponent로 빼주면 알아서 잡음 왜냐 index가 밖에 있으니까
import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import { earningData, SparklineAreaData, ecomPieChartDat } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-12 ml-10 mr-10">
      <div className="flex flex-wrap lg:flex-nowrap justify-center border-2 rounded-2xl">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">수익</p>
              <p className="text-2xl">100,000,000</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="powderblue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded -2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">수입 업데이트</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>지출</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>예산</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">100,000원</span>
                  <span
                    className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400
                  ml-3 text-xs"
                  >
                    20%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">예산</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">230,000원</span>
                </p>
                <p className="text-gray-500 mt-1">지출</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor="powderblue"
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="powderblue"
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="powderblue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
