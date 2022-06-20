import create from "zustand";
import { blogStore } from "../store/blogStore";

export const useBlogStore = create(set => ({
    blog: [],
    searchKey: "",
    blogs: blogStore,
    blogByCategory: [],

    handleSearchResults: () => {
        const allBlog = blogStore;
        set(state => ({
            blogs: allBlog.filter((e) =>
                e.title.toLowerCase().includes(state.searchKey.toLowerCase().trim())
            )
        }));
    },
    handleChange: (e) => {
        set(state => ({
            searchKey: e.target.value
        }));
    },
    clearKeySearch: () => {
        set(state => ({
            searchKey: ""
        }));
        set(state => ({
            blogs: blogStore
        }));
    },
    findBlog: (slug) => {
        set(state => ({
            blog: state.blogs.find((blog) => blog.slug === slug)
        }));
    },
    findBlogByCategory: () => {
        set(state => ({
            blogByCategory: state.blogs.filter((e) => e.category === state.blog.category)
        }));
    }
}));