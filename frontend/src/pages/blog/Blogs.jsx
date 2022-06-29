import React from "react"
import "../../styles/blog/_blogs.scss";

import ListBlogs from "../blog/ListBlogs" 
import Codeswer from "../../layouts/Codeswer";
import { useBlogStore } from "../../store/blog/blogState";
import SearchNotFound from "../../components/404/SearchNotFound";

export default function Blogs() {

    const status = null;    

    const blogs = useBlogStore(state => state.blogs);
    const searchKey = useBlogStore(state => state.searchKey);
    const handleChange = useBlogStore(state => state.handleChange);
    const clearKeySearch = useBlogStore(state => state.clearKeySearch);
    const handleSearchResults = useBlogStore(state => state.handleSearchResults);

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    return (
        <Codeswer
            title="Blogs | Codeswer"
            kw="codeswer blogs, codeswer artikel, codeswer blogs, codeswer id blogs, codeswer blogs indonesia"
            desc="Kumpulan daftar blogs dan artikel yang berkaitan dengan koding dan teknologi dari Codeswer."
            ogUrl={status}
            ogType={status}
            ogTitle={status}
            ogDesc={status}
            twitTitle={status}
        >

        <main className="blog-component">
            <section id="container_blog">
                <div className="heading-blog space-y-3 poppins">
                    <h1>CodeBlog Stuff</h1>
                    <h3>Ide penting, blog, apapun namanya, ini adalah sebuah halaman membaca.</h3>
                </div>
                <form className="search-blog space-x-5" onSubmit={handleSearchBar}>
                    <div className="box-search md:w-[35%] w-full poppins relative">
                        <input type="text" name="search-blog" className="md:w-[35%] w-full" placeholder="Cari Postingan Blog" onChange={handleChange} value={searchKey}></input>
                        {
                            searchKey && 
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={clearKeySearch} width="24" height="24" viewBox="0 0 24 24" fill="#FFF" stroke="#656EE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-4 right-4 cursor-pointer hover:rotate-90"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        }
                    </div>
                    <button className="space-x-2 poppins md:flex md:items-center hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <h3>Cari</h3>
                    </button>
                </form>
                    {!blogs.length ? 
                        <div className="flex justify-center w-full">
                            <SearchNotFound 
                                classGif="max-w-[30rem] w-full"
                            />
                        </div>
                        : 
                        <div className="wrapper-list-blog grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-x-0 gap-y-10">
                            <ListBlogs blogs={blogs} />
                        </div>
                    }
            </section>
        </main>

        </Codeswer>
    )
}