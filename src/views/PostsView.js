import {useQuery} from "@tanstack/react-query";
import {getFollowingPosts} from "../api/PostApi";
import PostCard from "../components/PostCard";
import {GiFeather} from "react-icons/gi";
import {Link} from "react-router-dom";
import {LoaderView} from "../components/LoaderView";
import {getUsers} from "../api/User";
import useAuthUser from "../utils/hooks/useAuthUser";
import {UserProfileDetails} from "../components/UserProfileDetails";


function PostsView(props) {
    const {id: userId} = JSON.parse(localStorage.getItem("user"));
    const {data, error, isError, isLoading} = useQuery(['timeline', userId], () => getFollowingPosts(userId))
    const {data: users} = useQuery(['users'] , () => getUsers());
    const posts = data?.data?.payload;
    const authUser = useAuthUser();

    if (isLoading) {
        return (
            <LoaderView/>
        );
    }
    return <div className="min-h-screen">
        <div className="flex flex-wrap">
            {posts && posts.map(post =>
                <PostCard key={post.id} post={post}/>)
            }
            {!posts.length &&
                <div className="w-full max-w-2xl mx-auto">
                <p className="my-4 font-bold underline text-center">Follow others to see what they post </p>
                <section>
                    {users?.data?.payload.filter(u => u.id !== authUser.id).map((user, index) =>
                        <UserProfileDetails key={index} user={user}/>
                    )}
                </section>

            </div>
            }
        </div>
        <div
            className="fixed bottom-10 right-10 rounded-full h-16 w-16 bg-white border shadow-md flex items-center justify-center">
            <Link to="/posts/create">
                <GiFeather size={28}/>
            </Link>
        </div>
    </div>;
}

export default PostsView;