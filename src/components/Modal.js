import React from 'react';
import {AiOutlineCheckCircle} from "react-icons/ai";
import {Link} from "react-router-dom";
import {IoWarningOutline} from "react-icons/io5";

const Modal = ({modalType, actions}) => {
    const signOutModal = ['signout', 'logout'].includes(modalType.toLowerCase());
    const createdModal = ['success'].includes(modalType.toLowerCase());

    return (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-20">
            <div className="bg-white w-96 rounded-md shadow-md p-4">
                {signOutModal &&
                    <div className="flex flex-col items-center">
                        <IoWarningOutline className="text-red-600 h-20 w-20"/>
                        <p className="text-center font-medium text-lg"> Are you sure you want to logout?</p>
                        <div className="flex space-x-3 mt-3 w-full">
                            <button type="button" className="block w-1/2 rounded p-1.5 border text-slate-600"
                                    onClick={actions.cancel}> Cancel
                            </button>
                            <button type="button" className="block w-1/2 rounded p-1.5 border text-white bg-red-600"
                                    onClick={actions.logout}> Logout
                            </button>
                        </div>
                    </div>
                }
                {createdModal &&
                    <div className="flex flex-col items-center">
                        <AiOutlineCheckCircle className="text-green-600 h-20 w-20"/>
                        <p className="text-center font-medium text-lg"> Success</p>
                        <div className="flex space-x-3 mt-3 w-full">
                            <Link to="/posts"
                                  className="block text-center w-full rounded p-1.5 border text-white bg-green-600"> Ok
                            </Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
};

export default Modal;