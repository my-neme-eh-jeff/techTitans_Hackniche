import Image from "next/image";
import zomato from "@/assets/images/zomato.svg";
import swiggy from "@/assets/images/swiggy.svg";
import { Divider } from "@nextui-org/divider";
import { Rate, Tooltip } from "antd";
import LineChartForCompetitorAnalysis from "../../charts/LineChartForCompetitorAnalysis";

export default function CompetitorPage() {
  const roundValue = (value: number) => {
    const roundedValue = Math.round(value * 2) / 2;
    return roundedValue;
  };
  return (
    <>
      {/* 4.3 4.2 600 */}
      <div className="flex flex-col">
        <div className="flex justify-around px-20 py-1">
          <div className="relative max-w-[14rem] overflow-hidden rounded-3xl border border-neutral-800 bg-primary bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.15)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
            <div className="mb-4 flex justify-center">
              <Image
                alt="adsa"
                src={zomato}
                height={48}
                className=" rounded-lg"
              />
            </div>
            <Divider className="mb-3" />
            <h3 className="mb-2 font-medium tracking-tight text-neutral-100">
              <Tooltip title={"Rated 4.5 stars on zomato"}>
                <Rate allowHalf disabled defaultValue={roundValue(4.5)} />
              </Tooltip>
            </h3>
          </div>
          <div className="relative max-w-[14rem] overflow-hidden rounded-3xl border border-neutral-800 bg-primary bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.15)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
            <div className="mb-4 flex justify-center">
              <Image alt="" src={swiggy} height={48} className="rounded-lg" />
            </div>
            <Divider className="mb-3" />
            <h3 className="mb-2 font-medium tracking-tight text-neutral-100">
              <Tooltip title={"Rated 4.3 stars on swiggy"}>
                <Rate allowHalf disabled defaultValue={roundValue(4.3)} />
              </Tooltip>
            </h3>
          </div>
          <div className="relative max-w-[14rem] overflow-hidden rounded-3xl border border-neutral-800 bg-primary bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.15)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
            <div className="mb-4 flex justify-center text-center">
              <h1 className="text-xl">The average cost of two person is</h1>
            </div>
            <h3 className="mb-2 font-medium tracking-tight text-neutral-100 text-center">
              <h1 className="text-lg">₹1000</h1>
            </h3>
            <p className="text-sm text-neutral-400"></p>
          </div>
        </div>
        <div>
          <LineChartForCompetitorAnalysis />
        </div>
      </div>
    </>
  );
}
