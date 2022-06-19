import Blog from "../blog/Blog" 

export default function ListBlogs ({ blogs }) {
  return (
      <>
          {
              blogs.map( (blog, index) => (
                  <Blog key={index} blog={blog}/>
              ))
          }
      </>
  );
};