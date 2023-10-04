import { Link } from "react-router-dom";

const Post = ({post}) => {

    const id = post.id
    
    return <div className="petterCard">
        <div className="indexImg">
            <img src={post.photo} alt={post.name}/>
        </div>
        
        <Link to={`/post/${id}`}>
            <button>{post.name}</button>
        </Link>   
    </div>
}

export default Post;