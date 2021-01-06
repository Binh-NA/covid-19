import { IGlobal } from "./global.module";
import { ICountry } from "./country.module";

export interface ISummary {
  Message: string,
  Global: IGlobal,
  Countries: ICountry[],
}
