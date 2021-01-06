import React, { useState, useEffect } from "react";

import { IInput, IInputOption } from "../../types/components/input.module";
import { ICountrySelect } from "../../types/apis/country-select.module";
import { OptionSearch } from "./option-search";

export const Input  = ({
  value,
  option,
  onChange,
}: IInput): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(value);
  const [options, setOptions] = useState<ICountrySelect[] | undefined>(option.searchOptions);

  const eventOnChange = (param: string): void => {
    setSearch(param);

    if (option.searchOptions) {
      const optionSearch = option.searchOptions.filter(element => element.Country.trim().toLowerCase().includes(param.trim().toLowerCase()));
      setOptions(optionSearch);
    } else {
      onChange(param);
    }
  }

  return (
    <div className="relative w-full">
      <input
        className={option.className ? option.className : "w-full px-3 py-1 text-gray-700 border border-gray-300 border-solid rounded outline-none focus:border-purple-700 focus:shadow-lg"} 
        value={search} 
        placeholder={option.placeholder}
        onChange={(param) => eventOnChange(param.target.value)}
        onFocus={() => {
          eventOnChange(search);
          setIsVisible(true); 
        }}
        onBlur={() => {
          setTimeout(() => {
            setIsVisible(false);
          }, 100);  
        }}
      />
      {option.icon ? (
        <div className="absolute top-0 right-0">
          {option.icon}
        </div>
      ) : (<></>)}
      {isVisible && options ? (
        <OptionSearch
          countries={options || []}
          onClick={(param: ICountrySelect) => {
            setSearch(param.Country);
            setOptions(option.searchOptions);
            setIsVisible(false);
            onChange(param.Slug);
          }}  
        />
      ) : (<div></div>)}
    </div>
  );
}