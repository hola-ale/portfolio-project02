import React, { useState, useEffect } from "react";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPostData(data))
      .catch(console.error);
  }, [postData]);
  return (
    <main>
      <section>
        <h1 className="page-title">Blog Posts Page</h1>
        <div className="posts-grid">
          {postData &&
            postData.map((post, index) => (
              <article className="single-post">
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span key={index}>
                    <img
                      className="post-img"
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />
                    <span>
                      <h3>{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
