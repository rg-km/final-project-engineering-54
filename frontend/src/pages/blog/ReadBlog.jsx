import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useBlogStore } from "../../store/blog/blogState";

import "../../styles/blog/_readblog.scss";
import Codeswer from "../../layouts/Codeswer";
import AuthorDetail from '../../components/AuthorDetail';
import SearchNotFound from '../../components/404/SearchNotFound';
import BtnSosmedShare from '../../components/auth/BtnSosmedShare';

export default function ReadBlog() {

    const { slug } = useParams();
    const blog = useBlogStore(state => state.blog);
    const blogs = useBlogStore(state => state.blogs);
    const findBlog = useBlogStore(state => state.findBlog);
    const blogByCategory = useBlogStore(state => state.blogByCategory);
    const findBlogByCategory = useBlogStore(state => state.findBlogByCategory);

    const status = null;

    React.useEffect(() => {
        findBlog(slug);
        findBlogByCategory();
    }, [blogs, slug, findBlog, findBlogByCategory]);

    return (
        <Codeswer
            title={blog.title}
            kw={`${blog.title} blogs, ${blog.title} artikel, ${blog.title} blogs, ${blog.title} id blogs, ${blog.title} blogs indonesia`}
            desc={`Blog yang membahas mengenai ${blog.title}`}
            ogUrl={status}
            ogType={status}
            ogTitle={status}
            ogDesc={status}
            twitTitle={status}
        >

        { blog ? (
            <main className="readblog-component">
                <section id="container_readblog" className="md:w-[70%] w-full">
                    <div className="content-blog space-y-10 inter">
                        <div className="flex items-center justify-evenl">
                            <AuthorDetail 
                                classImage="w-[3.5rem]" 
                                text2={blog.createdAt} 
                                text1={blog.authorName} 
                                classname="flex items-center space-x-3 w-full" 
                                classname2="text-gray-800 text-[1rem] font-medium" 
                                classname3="text-[#8A8888] text-[1rem] text-light"
                                >
                                <span className="px-[8px]">·</span><span>{blog.readTime} min read</span>
                            </AuthorDetail>
                            <BtnSosmedShare 
                            classBtnShare="w-full flex items-center justify-end" title={blog.title} 
                            fill="#CECDCD" size="21"/>
                        </div>

                        <h2 className="card-title">{blog.title}</h2>
                        <img className="card-image object-cover 3xs:object-fill w-full aspect-square h-[28rem]" src={blog.image} alt={blog.title}/>
                        <div className="card-text">
                            <p 
                                dangerouslySetInnerHTML={{ __html: blog.description }} className="whitespace-pre-line align-bottom leading-relaxed">
                            </p>
                        </div>
                    </div>
                    <aside className="share-button mt-7 pt-12 px-2 space-y-10 border-t border-solid border-y-gray-300 inter">
                        <h2 className='text-center font-light leading-relaxed'>Suka dengan konten ini? Yuk bagikan ke temanmu!</h2>
                        <BtnSosmedShare 
                        classBtnShare="6xs:space-x-0 6xs:flex-col 6xs:space-y-6 w-full flex items-center justify-center" title={blog.title} 
                        fill="#656EE3" />
                    </aside>
                </section>
                <aside id="container_aside" className="md:block w-[30%] hidden">
                    <div className="content-aside">
                        <article className="card-relate-post poppins">
                            <div className="heading-relate-post">
                                <h2 className="card-title">Blog Terkait</h2>
                            </div>
                            <div className="content-relate-post flex-col space-y-7">
                                {
                                    blogByCategory ? (
                                        blogByCategory.slice(0, 4).map((e, i) => {
                                            return (
                                                e.id === blog.id ? false : (
                                                    <span key={i} className="wrapper-post flex flex-col group">
                                                        <Link to={`/blog/${e.slugCategory}/${e.slug}`}>
                                                            <AuthorDetail
                                                                path={e.image} 
                                                                text1={e.createdAt} 
                                                                text2={e.title} 
                                                                classname="flex lg:flex-row flex-col lg:items-center items-start lg:space-x-3 space-x-0 lg:space-y-0 space-y-3" 
                                                                classname2="transition-colors duration-300 text-gray-800 group-hover:text-indigo-code text-[1rem] font-medium" 
                                                                classname3="line-clamp-1 text-[#8A8888] text-[0.75rem] text-light" 
                                                            />
                                                        </Link>  
                                                    </span> 
                                                )
                                            )
                                        })                                                
                                    ) : (
                                        <div className="text-center">
                                            <p className="text-gray-600">Belum ada blog terkait</p>
                                        </div>
                                    )
                                }
                            </div>
                        </article>
                    </div>
                </aside>
            </main>
            ) : (
                <main className="flex justify-center w-full">
                    <SearchNotFound 
                        classGif="max-w-[30rem] w-full"
                    />
                </main>
        )}

        </Codeswer>
    );
};