import useAuthUser from "../utils/hooks/useAuthUser";

export function UserProfileDetails(props) {
    const authUser = useAuthUser();
    const notMe = authUser.id !== props.user?.id;

    return <div className="flex justify-between mt-4 items-center px-4">
        <div className="flex space-x-2 items-center">
            <div className="w-14 h-14 rounded-full bg-gray-100"></div>
            <div className="flex flex-col">
                <span> {`${props.user?.firstName} ${props.user?.lastName}`}</span>
                <span className="text-xs text-slate-600">{props.user?.username}</span>
            </div>
        </div>
        {notMe &&
            <div>
                <button className="py-1.5 px-2 rounded bg-sky-600 text-white text-sm"> Follow</button>
            </div>
        }
    </div>;
}