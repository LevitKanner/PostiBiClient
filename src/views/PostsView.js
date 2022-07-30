import {useQuery} from "@tanstack/react-query";
import {getFollowingPosts} from "../api/PostApi";
import {PulseLoader} from "react-spinners";
import PostCard from "../components/PostCard";
import {GiFeather} from "react-icons/gi";
import {Link} from "react-router-dom";


function PostsView(props) {
    const {id: userId} = JSON.parse(localStorage.getItem("user"));
    const {data, error, isError, isLoading} = useQuery(['timeline', userId], () => getFollowingPosts(userId))
    const posts = data?.data?.payload;

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center">
                <PulseLoader loading={isLoading} size={14} color="#42b3f5" speedMultiplier={0.8}/>
            </div>
        );
    }
    return <div className="min-h-screen">
        <div className="flex flex-wrap">
            {posts && posts.map(post => <PostCard key={post.id} post={post}/>)}
        </div>
        <div className="fixed bottom-10 right-10 rounded-full h-16 w-16 bg-white border shadow-md flex items-center justify-center">
            <Link to="/posts/create">
                <GiFeather size={28}/>
            </Link>
        </div>
    </div>;
}

export default PostsView;