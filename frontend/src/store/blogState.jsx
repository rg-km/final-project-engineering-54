import create from "zustand";
import { blogStore } from "../store/blogStore";

export const useBlogStore = create(set => ({
    blogs: blogStore,
    searchKey: "",

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
            blogs: state.blogs.find((blog) => blog.slug === slug)
        }));
    }
}));