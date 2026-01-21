import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  //consume
  const { posts, loading } = useContext(AppContext);

  return (
   <div className=" w-[11/12] max-w-[800px]  h-screen mx-auto flex flex-col justify-center items-center gap-y-7 mt-6 " >
  {
    loading ? (
      <Spinner />
    ) : (
      posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold  text-[1.1rem] ">{post.title}</p>

            <p className="text-[12px]">
              By <span className="  italic">{post.author}</span> on{" "}
              <span className=" underline font-bold">{post.category}</span>
            </p>

            <p className="text-[12px]">Posted on {post.date}</p>
            <p className="text-[16px] mt-3">{post.content}</p>

            <div className="flex gap-x-2">
              {post.tags.map((tag, index) => (
                <span key={index} className=" text-blue-800 mt-1 font-bold text-[12px]  underline ">#{tag} </span>
              ))}
            </div>
          </div>
        ))
      )
    )
  }
</div>

  );
};

export default Blogs;
