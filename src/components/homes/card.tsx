import { ICountry } from "../../types/apis/country.module";

export const Card = ({ 
  country, 
}: {
  country: ICountry,
}):JSX.Element => {
  return (
    <div className="w-full p-3 text-gray-700 shadow">
      <h3 className="mb-3 font-bold text-center">{country.Country}</h3>
      <div className="flex justify-between w-full mt-1">
        <div className="text-blue-800">New Confirmed</div>
        <div className="text-blue-800">{country.NewConfirmed}</div>
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="text-blue-800">Total Confirmed</div>
        <div className="text-blue-800">{country.TotalConfirmed}</div>
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="text-red-700">New Deaths</div>
        <div className="text-red-700">{country.NewDeaths}</div>
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="text-red-700">TotalDeaths</div>
        <div className="text-red-700">{country.TotalDeaths}</div>
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="text-green-700">New Recovered</div>
        <div className="text-green-700">{country.NewRecovered}</div>
      </div>
      <div className="flex justify-between w-full mt-1">
        <div className="text-green-700">Total Recovered</div>
        <div className="text-green-700">{country.TotalRecovered}</div>
      </div>
    </div>
  );
}