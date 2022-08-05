import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import Modal from "./Modal";


const AppHeader = (props) => {
    const [isShowingDropdown, setIsShowingDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('user'));

    const toggleModals = () => {
        setShowMenu(false);
        setIsShowingDropdown(false);
    }

    const cancel = () => {
        setShowModal(false)
    }
    const logout = () => {
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
        navigate("/login", {replace: true});
    }

    return (
        <div>
            <nav className="py-2 px-4 border-b relative">
                <div className="flex justify-between items-center">
                    <Link to="/"
                          className="h-12 w-12 p-2 rounded-full flex items-center justify-center bg-slate-100">Logo</Link>

                    <nav className="hidden sm:flex">
                        <ul className="flex space-x-6">
                            <li>
                                <Link to="posts"> Posts </Link>
                            </li>
                            <li>
                                <Link to="explore"> Explore </Link>
                            </li>
                        </ul>
                    </nav>

                    {!user && <Link to="/login" className="hidden sm:flex">
                        Login
                    </Link>}

                    <div className="relative hidden sm:block">
                        {user &&
                            <button type="button"
                                    onClick={() => setShowMenu(s => !s)}> Welcome, {user.firstName}</button>}
                        {showMenu && <nav
                            className="absolute z-10 bg-white shadow-md border -right-2 top-8 rounded-md w-24 overflow-clip">
                            <ul>
                                <li className="px-2 py-1 text-sm hover:bg-sky-200">
                                    <Link to={`users/${user.id}`}>Profile</Link>

                                </li>
                                <li className="px-2 py-1 text-sm hover:bg-sky-200">
                                    <button onClick={() => {
                                        setShowModal(true)
                                        setShowMenu(false)
                                    }
                                    }> Logout
                                    </button>
                                </li>
                            </ul>
                        </nav>}
                    </div>


                    <button type="button" className="sm:hidden"
                            onClick={() => setIsShowingDropdown(prevState => !prevState)}>
                        {isShowingDropdown && <ImCross className="h-8 w-8 text-slate-700"/>}
                        {!isShowingDropdown && <GiHamburgerMenu className="h-8 w-8 text-slate-700"/>}
                    </button>

                    {/*    Drop down */}
                    {isShowingDropdown && <nav className="absolute w-screen inset-x-0 top-[67px] z-10">
                        <div className="rounded bg-white shadow-lg overflow-clip border">
                            <div className="py-3 px-4 text-sm text-gray-900">
                                <div>Bonnie Green</div>
                                <div className="font-medium truncate">name@flowbite.com</div>
                            </div>
                            <ul className="py-1 text-sm text-gray-700"
                                aria-labelledby="dropdownInformationButton">
                                <li>
                                    <Link to="#"
                                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Explore</Link>
                                </li>
                                <li>
                                    <Link to="#"
                                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Timeline</Link>
                                </li>
                                <li>
                                    <Link to={`/users/${user.id}`}
                                          className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                                </li>
                            </ul>
                            <div>
                                <Link to="login"
                                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log
                                    in</Link>
                            </div>
                        </div>
                    </nav>}


                </div>
                {(showMenu || isShowingDropdown) &&
                    <button className="fixed inset-0 z-0 cursor-default" onClick={toggleModals}></button>}
            </nav>
            {showModal && <Modal modalType="signout" actions={{cancel, logout}}/>}
        </div>
    )
};

export default AppHeader;