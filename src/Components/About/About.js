import React, { useEffect, useState } from "react";
import sanityClient from "../../client"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"
import "./About.css"

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"] {
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, [])

    if (!author) return <div>Loading...</div>

    return(
        <main className="about-me-container">
            <div>
                <section className="about-me-card">
                    <div className="about-me-content">
                        <h1 className="about-greating">Hi there. I'm {" "}
                            <span>{author.name}</span>
                        </h1>
                        <img className="grid-author-img" src={urlFor(author.authorImage).url()} alt="" />
                        <BlockContent 
                            blocks={author.bio}
                            projectId="6fc67nq0"
                            dataset="production"
                            className="about-me-bio"
                        />
                    </div>
                </section>
            </div>
        </main>
    )
}