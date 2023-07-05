"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import SkelatonCard from "./SkelatonCard";

const Body = () => {
  const [posts, setposts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await fetch("/api/post/all", {
        method: "GET",
      });
      const newRes = await res.json();
      console.log(newRes);
      if (res.ok) {
        console.log(newRes);
        setposts(newRes);
      } else {
        getPosts();
      }
    } catch (error) {}
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <div className="_container my-10 ">
      <div className="w-[100%] gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.length === 0 ? (
          <>
            <SkelatonCard />
            <SkelatonCard />
            <SkelatonCard />
            <SkelatonCard />
            <SkelatonCard />
            <SkelatonCard />
          </>
        ) : (
          posts.map((post: any) => <Card key={post._id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default Body;
