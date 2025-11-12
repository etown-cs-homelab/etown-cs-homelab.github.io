import './PostThumbnail.css';

function PostThumbnail({title, children, img, alt, info})
{
    return (
        <div id="thumb-container">
            <div className="thumb-content">
                <h3>{title}</h3>
                <img src={img} alt={alt} />
                <div>
                    <p>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PostThumbnail;