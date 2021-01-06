import { ICountryStatus } from "../../types/apis/country-status.module";

export const Card = ({ 
  country, 
}: {
  country: ICountryStatus,
}):JSX.Element => {
  return (
    <div className="w-full p-3 text-gray-700 shadow">
      <h3 className="mb-3 font-bold text-center">{country.Date.split("T")[0]}</h3>
      <div className="flex justify-between w-full mt-1">
        <div className="text-blue-800">Confirmed</div>
        <div className="text-blue-800">{country.Confirmed}</div>
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="text-red-700">Deaths</div>
        <div className="text-red-700">{country.Deaths}</div>
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="text-green-700">Recovered</div>
        <div className="text-green-700">{country.Recovered}</div>
      </div>
    </div>
  );
}