import { Link } from "react-router-dom";

const Post = ({post}) => {
    
    return <div className="petterCard">
        <div className="indexImg">
            <img src={post.photo} alt={post.name}/>
        </div>
        
        <Link to={`/post/${post.id}`}>
            <button>{post.name}</button>
        </Link>   
    </div>
}

export default Post;