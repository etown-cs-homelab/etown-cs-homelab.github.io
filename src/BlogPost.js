import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, useNavigate } from 'react-router-dom';
import './Blog.css';

const BlogPost = () => {
  const { postName } = useParams();
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    import(`./posts/${postName}.md`)
      .then((res) => res.default)
      .then((md) => {
        fetch(md)
          .then((res) => res.text())
          .then((text) => setContent(text));
      })
      .catch((err) => console.error(err));
  }, [postName]);

  return (
    
    <div>
      <button className='back-button' onClick={() => navigate(-1)}>Back</button>
      {content ? ( <div className="post-content"> <ReactMarkdown>{content}</ReactMarkdown> </div>) : ( <p>Loading...</p> )}
    </div>
  );
};

export default BlogPost;