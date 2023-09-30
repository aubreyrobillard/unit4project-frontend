import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Index = (props) => {
    
    const petters = useLoaderData()
    
    return petters.map((post) => <Post post={post} key={post.id}/>);
};

export default Index;