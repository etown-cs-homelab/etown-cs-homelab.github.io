import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// post thumbnail images
import meeting01 from './images/meeting01.png';
import hardwareSetup from './images/computers.JPG';


const posts = [
  { id: 'postOne', title: 'Meeting with Netizen - 10/23/25', image: meeting01 },
  { id: 'postTwo', title: 'Network Setup - 11/20/25', image: hardwareSetup },
    // TODO: Add more posts
];

const BlogList = () => {
  return (
    <div>
        <h1>Etown Homelab Blog</h1>
        <div className="thumbnails-container">
            {posts.map((post) => (
                <ul key={post.id} className="post">
                    {/* <img src={post.image} alt={post.title} style={{ width: '400px', height: 'auto' }} /> */}
                    <Link to={`/posts/${post.id}`}>
                      <img src={post.image} alt={post.title} style={{ width: '400px', height: 'auto' }} />
                      <br />
                      {post.title}
                    </Link>
                </ul>
            ))}
        </div>
    </div>
  );
};

export default BlogList;