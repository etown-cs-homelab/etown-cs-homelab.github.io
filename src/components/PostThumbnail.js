import './PostThumbnail.css';

function PostThumbnail({title, children, img, alt, info})
{
    return (
        <div id="thumb-container">
            <button onClick={() => window.location.href = info}>
                <h3>{title}</h3>
                <img src={img} alt ={alt} />
                <div>
                    <p>
                        {children}
                    </p>
                </div>
            </button>
        </div>
    );
}

export default PostThumbnail;