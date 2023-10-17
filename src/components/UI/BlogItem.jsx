import React from "react";
import "../../styles/blogItem.css";
import { Link } from "react-router-dom";

const BlogItem = ({ blogItem }) => {
  const authorName = blogItem.author.indexOf(" ");
  return (
    <div className="col-4">
      <div className="blog__image">
        <img src={blogItem.imgBlog} alt="drive" />
      </div>
      <div className="blog__content p-3">
        <h2 className="latest__blog__title">
          <Link to={`/blogs/${blogItem.id}`}>{blogItem.title}</Link>
        </h2>
        <p className="section__desc__content mt-3">
          {blogItem.desc.length > 100
            ? blogItem.desc.slice(0, 97) + "..."
            : blogItem.desc}
        </p>
        <Link className="read__more__blogs" to={`/blogs/${blogItem.id}`}>
          Read More
        </Link>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <div className="d-flex align-items-center gap-2">
            <i className="ri-shield-user-line author__icon"></i>
            <h2 className="author__name">
              {blogItem.author.slice(0, authorName)}
            </h2>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="blog__event d-flex align-items-center gap-1">
              <i className="ri-calendar-event-line"></i>
              <h3>{blogItem.date}</h3>
            </div>
            <div className="blog__time d-flex align-items-center gap-1">
              <i className="ri-timer-line"></i>
              <h3>{blogItem.time}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
