import React, { useEffect, useState } from "react";

import { Card, FormField, Loader } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  else return (
    <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase"> {title}</h2>
  )
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-gray-800 text-[32px]">
          The Community Showroom
        </h1>
        <p className="mt-2 text-gray-600 text-[16px] max-w-[500px]">
          Browse collections
        </p>
      </div>

      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-gray-600 text-xl mb-3">
                Showing results for{" "}
                <span className="text-gray-500"> {searchText} </span>
              </h2>
            )}

            <div className="grid sm:grid-cols-3 lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards data = {[]} title = "No search results found"/>
              ) : (
                <RenderCards data = {[]} title = "No posts found"/>
              )}    

            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
