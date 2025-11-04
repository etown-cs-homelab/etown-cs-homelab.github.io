import './PostThumbnail.css';

function PostThumbnail({title, children, img, alt})
{
    return (
        <div id="thumb-container">
            <h3>{title}</h3>
            <img src={img} alt ={alt} />
            <div>
                <p>
                    {children}
                </p>
            </div>
        </div>
    );
}

export default PostThumbnail;