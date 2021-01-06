import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Input } from "../input/input";
import layoutCss from "./layout.module.css";
import { ICountrySelect } from "../../types/apis/country-select.module";
import { APIWrapper } from "../../libs/api-wrapper";
import * as API from "../../constants/api";
import { createNotification } from "../../components/notification";

export const NavBar = ({}: {}): JSX.Element => {
  const router = useRouter();
  const searchRouter = router.query.id && typeof router.query.id === "string" ? router.query.id : "";
  const [search, setSearch] = useState<string>(searchRouter);
  const [countries, setCountries] = useState<ICountrySelect[]>([]);

  useEffect(() => {
    let isMounted = true;
  
    APIWrapper.get<ICountrySelect[]>(API.API_COUNTRIES, null)
    .then(response => {
      if (!response.data && isMounted) {
        createNotification({
          type: "error",
          message: "Server Error",
        });
      }

      if (isMounted) {
        response.success && setCountries(response.data || []);
      }
    }).catch((error: TypeError) => {
      if (isMounted) {
        createNotification({
          type: "error",
          message: error.message || "Server Error",
        });
      }
    });

    return () => { isMounted = false; }
  }, []);

  return (
    <div className={`sticky top-0 z-40 flex w-full border-0 border-b border-gray-200 shadow ${layoutCss.headSticky}`}>
      <div className="w-11/12 mx-auto lg:w-9/12">
        <div className="items-center justify-center w-full py-6 md:flex">
          <Link href="/">
            <div className="flex items-center justify-start cursor-pointer">
              <svg className="h-14 w-14">
                <use href="/icon.svg#covid-19" />
              </svg>
              <p className="px-4 text-3xl font-semibold uppercase text-green-cov whitespace-nowrap">
                Covid 19
              </p>
            </div>
          </Link>
          <div className="relative w-full">
            <Input 
              value={search || ""}
              onChange={(param: string) => {
                router.push(`/search/${param}`);
              }}
              option={{
                placeholder: "Search Country",
                className: "w-full px-3 py-2 text-2xl text-gray-600 border-2 border-gray-300 border-solid rounded outline-none bg-gray-50 focus:border-green-cov focus:shadow-lg",
                icon: (
                  <svg className="m-3 opacity-25 w-7 h-7">
                    <use href="/icon.svg#search" />
                  </svg>
                ),
                searchOptions: countries,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
