import React, { useState, useEffect } from "react";
import getConfig from 'next/config';
import Link from "next/link";

import { Loading } from "../loading";
import { APIWrapper } from "../../libs/api-wrapper";
import { ICountryStatus } from "../../types/apis/country-status.module";
import * as API from "../../constants/api";
import { createNotification } from "../notification";
import { Card } from "./card";

export const SearchComponent = ({
  search,
}: {
  search: string,
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<ICountryStatus[]>([]);

  useEffect(() => {
    setLoading(true);
    let isMounted = true;
  
    APIWrapper.get<ICountryStatus[]>(API.API_SEARCH_COUNTRY + search, null)
    .then(response => {
      if (!response.data && isMounted) {
        createNotification({
          type: "error",
          message: "Server Error",
        });
      }

      if (isMounted) {
        response.success && typeof response.data === "object" && setCountries(response.data?.reverse() || []);
        setLoading(false);
      }
    }).catch((error: TypeError) => {
      if (isMounted) {
        setLoading(false);
        createNotification({
          type: "error",
          message: error.message || "Server Error",
        });
      }
    });

    return () => { isMounted = false; }
  }, [search]);

  return (
    <div className="relative w-full min-h-screen">
      <button onClick={() => {
        const { publicRuntimeConfig } = getConfig();
        console.log(publicRuntimeConfig);
      }}>log public run time config</button>
      <Link href="/">
        <p className="text-blue-900 cursor-pointer">go to home</p>
      </Link>
      {/* {loading && <Loading.Component />}
      <div className="grid w-full grid-cols-1 gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {countries.map((item, i) => (
          <div key={i.toString()}>
            <Card country={item} />
          </div>
        ))}
      </div> */}
    </div>
  );
}
