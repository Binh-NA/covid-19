import React, { useState, useEffect } from "react";
import getConfig from 'next/config';
import Link from "next/link";

import { Loading } from "../loading";
import { APIWrapper } from "../../libs/api-wrapper";
import { ISummary } from "../../types/apis/summary";
import { ICountry } from "../../types/apis/country.module";
import * as API from "../../constants/api";
import { createNotification } from "../notification";
import { Card } from "./card";
import { env } from "process";

const { publicRuntimeConfig } = getConfig();

export const HomeComponent = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    let isMounted = true;
    
    APIWrapper.get<ISummary>(API.API_SUMMARY, null)
    .then(response => {
      if (!response.data?.Countries && isMounted) {
        createNotification({
          type: "error",
          message: response.data?.Message || "Server Error",
        });
      }

      if (isMounted) {
        response.success && setCountries(response.data?.Countries || []);
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
  }, [])

  return (
    <div className="relative w-full min-h-screen">
      <button onClick={() => {
        console.log(publicRuntimeConfig);
        console.log(process.env.TEST_KEY);
      }}>log public run time config</button>
      <Link href="/search/123">
        <p className="text-blue-900 cursor-pointer">go to a hu hu</p>
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