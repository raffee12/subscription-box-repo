

import React from 'react';
import { useLoaderData } from 'react-router';


function Blog() {
  const posts = useLoaderData()
  console.log(posts)
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Blog</h1>

      <div className="grid gap-8 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={post.banner} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-accent font-bold">{post.name}</h2>
              <p>{post.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral text-accent">Ratings : {post.ratings}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;


