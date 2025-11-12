import './posts.css';
import meeting01 from '../images/meeting01.png';



function PostOne({ onBack }) {
    return (
        <div className="post">

       
            <h1 className="postHeader">Meeting with Netizen - 10/23/25</h1>


            <img src={meeting01} alt="Meeting Image" className="post-image" />
            <header>
                
            <div className="post-controls">
                <button onClick={onBack}>Back</button>
            </div>
            </header>

            
            <p className="postContent">
                Asher, John, and Martin met with Netizen to discuss the beginning of the Etown Homelab project. 
                We talked about the overall goals of the project and how to get started.
                At the end of the meeting, they gave us some supplies to help get the project done.
                Some of these supplies include three laptops and three desktops.
            </p>
        </div>
    );
}

export default PostOne;