import { Link } from "react-router-dom";

const Post = ({post}) => {
    return <div className="petterCard">
        <img url={post.photo} alt={post.name}/>
        <Link to={`/post/${post.id}`}>
            <button>{post.name}</button>
        </Link>   
    </div>
}

export default Post;