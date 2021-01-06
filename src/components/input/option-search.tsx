import { ICountrySelect } from "../../types/apis/country-select.module";

export const OptionSearch = ({
  countries,
  onClick,
}: {
  countries: ICountrySelect[],
  onClick: (param: ICountrySelect) => void,
}): JSX.Element => {
  return (
    <div className="absolute -mt-1 overflow-y-auto bg-white border border-gray-200 border-solid rounded shadow left-1 right-1 max-h-96">
      {countries.length === 0 ? (
        <div className="w-full p-4 text-xl text-center text-gray-500">Empty</div>
      ) : countries.map((item, i) => (
        <div
          className="w-full px-3 py-2 text-lg text-left text-gray-600 cursor-pointer hover:bg-gray-200" key={i.toString()}
          onClick={() => {
            onClick(item);
          }}
          onKeyPress={() => {
            onClick(item);
          }}
          role="button"
          tabIndex={0}
        >
          {item.Country}
        </div>
      ))}
    </div>
  );
}