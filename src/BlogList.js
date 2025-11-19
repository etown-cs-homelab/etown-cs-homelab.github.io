import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// post thumbnail images
import meeting01 from './images/meeting01.png';


const posts = [
  { id: 'postOne', title: 'Meeting with Netizen - 10/23/25', image: meeting01 },
  { id: 'postTwo', title: 'Hardware Setup', image: null },
    // TODO: Add more posts
];

const BlogList = () => {
  return (
    <div>
        <h1>Etown Homelab Blog</h1>
        <div className="thumbnails-container">
            {posts.map((post) => (
                <ul key={post.id} className="post">
                    <img src={post.image} alt={post.title} style={{ width: '400px', height: 'auto' }} />
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </ul>
            ))}
        </div>
    </div>
  );
};

export default BlogList;