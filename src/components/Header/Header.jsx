import React from "react";
import parrot from "../../assets/parrot.png"
import worldMap from "../../assets/WorldMap.svg"

const Header = () => {
    return(
        <div className="bg-[#0D182E] flex justify-center items-center gap-6 h-[10rem] relative overflow-hidden">
            <div>
              <img className="object-contain max-h-[5.3rem]" src={parrot} alt="parrot" />
            </div>
            
            <div className="z-[1]">
                <h1 className="font-big text-[#32CD32] text-[2.71369rem]">PollyGlot</h1>
                <h4 className="text-white font-semibold text-[0.76325rem]">Perfect Translation Every Time</h4>
            </div>

            <img className="absolute right-0 top-0" src={worldMap} alt="world map" />
        </div>
    )
}

export default Header;