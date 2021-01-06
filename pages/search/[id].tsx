import React from "react";
import { useRouter } from "next/router";

import { Layout } from "../../src/components/layouts/layout";
import { SearchComponent } from "../../src/components/search/search";

const Search = (): JSX.Element => {
  const router = useRouter();
  const search = router.query.id && typeof router.query.id === "string" ? router.query.id : "";

  return (
    <Layout>
      {search.length > 0 ? (<SearchComponent search={search} />) : (<></>)}
    </Layout>
  );
};

export default Search;
