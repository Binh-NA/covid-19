import { ICountrySelect } from "../apis/country-select.module";

export interface IInputOption {
  className?: string,
  placeholder: string,
  icon?: JSX.Element,
  searchOptions?: ICountrySelect[],
}

export interface IInput {
  option: IInputOption,
  value: string,
  onChange: (param: string) => void,
}
