// LanguageSelector.jsx
import franceFlag from "../../assets/fr-flag.png"
import spainFlag from "../../assets/sp-flag.png"
import japanFlag from "../../assets/jpn-flag.png"

const LanguageSelector = ({ handleLanguageChange, language }) => {
  return (
    <div className="flex justify-around mt-6">
      <button
        name="France"
        className={language === "France" ? "border-[3px] border-[#035A9D] drop-shadow-lg" : ""}
        onClick={() => handleLanguageChange("France")}
      >
        <img src={franceFlag} alt="" />
      </button>

      <button
        name="Spain"
        className={language === "Spain" ? "border-[3px] border-[#035A9D] drop-shadow-lg" : ""}
        onClick={() => handleLanguageChange("Spain")}
      >
        <img src={spainFlag} alt="" />
      </button>

      <button
        name="Japan"
        className={language === "Japan" ? "border-[3px] border-[#035A9D] drop-shadow-lg" : ""}
        onClick={() => handleLanguageChange("Japan")}
      >
        <img src={japanFlag} alt="" />
      </button>
    </div>
  );
};

export default LanguageSelector;
