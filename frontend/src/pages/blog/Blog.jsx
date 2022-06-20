import React from 'react';
import "../../styles/blog/_blog.scss";
import { Link } from 'react-router-dom';
import AuthorDetail from '../../components/AuthorDetail';

const Blog = (
    {
        blog: {
            title,
            slug,
            image,
            slugCategory,
            description,
            authorName,
            createdAt,
        },
    }
) => {

  return (
    <article className="card-wrapper bg-white rounded-tl-[2rem] rounded-br-[2rem] hover:-translate-y-2">
        <Link to={`/blog/${slugCategory}/${slug}`}>
            <img className="card-image object-cover h-[18rem] w-full" src={image} alt={title}/>
            <div className="card-content inter flex flex-col justify-between space-y-4">
                <h2 className="card-title line-clamp-2">{title}</h2>
                <div className="card-text line-clamp-3">
                    <p className="whitespace-pre-line align-bottom leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
                <AuthorDetail text1={authorName} text2={createdAt} classname="flex items-center space-x-3" classname2="text-gray-800 text-[0.85rem] font-semibold" classname3="text-[#8A8888] text-[0.85rem] font-normal"/>
            </div>
        </Link>
    </article>
  )
};

export default Blog;