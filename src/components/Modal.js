import React from 'react';

const Modal = ({modalType, actions}) => {
    const signOutModal = ['signout', 'logout'].includes(modalType.toLowerCase());
    const {cancel, logout} = actions;

    return (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white w-96 rounded-md shadow-md p-4">
                {signOutModal &&
                    <div className="flex flex-col">
                        <p className="text-center font-medium text-lg"> Are you sure you want to logout?</p>
                        <div className="flex space-x-3 mt-3">
                            <button type="button" className="block w-1/2 rounded p-1.5 border text-slate-600"
                                    onClick={cancel}> Cancel
                            </button>
                            <button type="button" className="block w-1/2 rounded p-1.5 border text-white bg-red-600"
                                    onClick={logout}> Logout
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
};

export default Modal;