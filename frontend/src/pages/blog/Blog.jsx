import React from 'react';
import "../../styles/blog/_blog.scss";
import { Link } from 'react-router-dom';
import Image from "../../components/Image";

const Blog = (
    {
        blog: {
            title,
            slug,
            image,
            description,
            authorName,
            createdAt,
        },
    }
) => {

  return (
    <article className="card-wrapper bg-white rounded-tl-[2rem] rounded-br-[2rem] hover:-translate-y-2">
        <Link to={`/blog/${slug}`}>
            <img className="card-image object-cover h-[18rem] w-full" src={image} alt={title}/>
            <div className="card-content inter space-y-4">
                <h2 className="card-title line-clamp-2">{title}</h2>
                <div className="card-text line-clamp-3">
                    <p>{description}</p>
                </div>
                <div className="author-detail flex items-center space-x-3">
                    <Image classname="w-[2.5rem] mr-1"/>
                    <div className="name-date space-y-1">
                        <h3 className="name-author">{authorName}</h3>
                        <h3 className="name-author">{createdAt}</h3>
                    </div>
                </div>
            </div>
        </Link>
    </article>
  )
};

export default Blog;