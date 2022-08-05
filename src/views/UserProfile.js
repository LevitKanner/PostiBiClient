import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getUserPosts} from "../api/PostApi";
import {getUser} from "../api/User";
import PostCard from "../components/PostCard";
import {UserProfileDetails} from "../components/UserProfileDetails";

const UserProfile = () => {
    const {id} = useParams();
    const {data: userPosts} = useQuery([`user-posts-${id}`], () => getUserPosts(id));
    const {data: userData} = useQuery([`user-${id}`], () => getUser(id));
    const user = userData?.data.payload;

    return (
        <section className="max-w-4xl mx-auto">
            <UserProfileDetails user={user}/>
            <div className="mt-4">
                <span className="inline-block border-b-2 border-sky-600 pb-1 px-4 "> Posts </span>
                <div className="flex flex-wrap">
                    {userPosts?.data.payload.map((post, index) =>
                        <PostCard key={index} post={post}/>)
                    }
                </div>

            </div>
        </section>
    )
}

export default UserProfile;