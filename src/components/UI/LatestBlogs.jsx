import React from "react";
import "../../styles/latestBlogs.css";
import blogData from "../../assets/data/blogData";
import BlogItem from "./BlogItem";

const LatestBlogs = () => {
  return (
    <>
      {blogData.map((blogItem) => {
        return <BlogItem blogItem={blogItem} key={blogItem.id} />;
      })}
    </>
  );
};

export default LatestBlogs;
