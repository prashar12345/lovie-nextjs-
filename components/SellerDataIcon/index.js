import React from "react";
import { scorePopup } from "../../atoms/popup";
import ScorePopup from "../popups/scores";
import { useRecoilState } from "recoil";
const SellerDataIcon = ({ icon, margin }) => {
  const [scoreData, setScoreData] = useRecoilState(scorePopup);
  const handleClick = (text) => {
    setScoreData({ ...scoreData, type: text, open: true });
  };
  return (
    <div className={`flex items-center `}>
      <ScorePopup />
      {icon.type === "HS" ? (
        <>
          <div className="flex items-center gap-1">
            <div
              onClick={() => handleClick(icon.type)}
              className={`cursor-pointer bg-coolOrange rounded-[3px] h-[2rem] w-[2rem] flex items-center justify-center text-[14px] text-white`}
            >
              {icon.type}
            </div>
            <span className="text-sm">{icon.score}</span>
          </div>
        </>
      ) : icon.type === "MS" ? (
        <div className="flex items-center gap-1">
          <div
            onClick={() => handleClick(icon.type)}
            className={`cursor-pointer bg-[#222222] rounded-[3px] h-[2rem] w-[2rem] flex items-center justify-center text-[14px] text-white`}
          >
            {icon.type}
          </div>
          <span className="text-sm">{icon.score}</span>
        </div>
      ) : icon.type === "CS" ? (
        <div className="flex items-center gap-1">
          <div
            onClick={() => handleClick(icon.type)}
            className={`cursor-pointer bg-[#717171] rounded-[3px] h-[2rem] w-[2rem] flex items-center justify-center text-[14px] text-white`}
          >
            {icon.type}
          </div>
          <span className="text-sm">{icon.score}</span>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <div
            onClick={() => handleClick(icon.type)}
            className={`cursor-pointer bg-[#5B8B76] rounded-[3px] h-[2rem] w-[2rem] flex items-center justify-center text-[14px] text-white`}
          >
            {icon.type}
          </div>
          <span className="text-sm">{icon.score}</span>
        </div>
      )}
    </div>
  );
};

export default SellerDataIcon;
