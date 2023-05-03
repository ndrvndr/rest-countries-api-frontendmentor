import Button from "../components/Elements/Button";
import AuthLayouts from "../components/Layouts/AuthLayouts";

import Be from "../assets/be.svg";

const DetailCountry = () => {
  return (
    <AuthLayouts>
      <Button />
      <div className="relative top-[200px] px-[18px] pb-8 w-full">
        <img src={Be} className="w-full h-fit" />
        <h1 className="font-extrabold my-8">Belgium</h1>
        <div className="space-y-8">
          <div className="space-y-3">
            <div>
              <span className="font-semibold">Native Name: </span>
              <span>België</span>
            </div>
            <div>
              <span className="font-semibold">Population: </span>
              <span>11,319,511</span>
            </div>
            <div>
              <span className="font-semibold">Region: </span>
              <span>Europe</span>
            </div>
            <div>
              <span className="font-semibold">Sub Region: </span>
              <span>Western Europe</span>
            </div>
            <div>
              <span className="font-semibold">Capital: </span>
              <span>Brussels</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="font-semibold">Top Level Domain: </span>
              <span>.be</span>
            </div>
            <div>
              <span className="font-semibold">Currencies: </span>
              <span>Euro</span>
            </div>
            <div>
              <span className="font-semibold">Languages: </span>
              <span>Dutch, French, German</span>
            </div>
          </div>
        </div>
      </div>
    </AuthLayouts>
  );
};

export default DetailCountry;
