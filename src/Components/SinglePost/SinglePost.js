import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import { Link } from "react-router-dom";
import "./SinglePost.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();
    
    useEffect(() => { 
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id, 
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            publishedAt,
            body,
            "name": author->name,
            "authorImage": author->image
        }`)
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if(!singlePost) return <div>Loading...</div>
     
    return(
        <main>
            <article>
                <section>
                    <div>
                        <div className="post-info">
                            <h1 className="post-title">{singlePost.title}</h1>
                            <div className="post-date">
                            {new Date(singlePost.publishedAt).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                    <img className="single-post-img" src={singlePost.mainImage.asset.url} alt={singlePost.title} />
                </section>
                <div className="blog-content">
                    <BlockContent 
                        blocks={singlePost.body} 
                        projectId="6fc67nq0"
                        dataset="production"
                    />
                </div>
                <div className="post-author">
                    <Link to="/about">
                        <img className="author-img" src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} />
                    </Link>
                </div>
            </article>
        </main>
    );
}