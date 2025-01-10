import {useEffect, useState} from "react";
import {categoriesItem} from "../apiRequest/apiRequest.js";
import {NavLink} from "react-router-dom";

const LayOut = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async ()=>{
           let response =  await categoriesItem()
            setCategories(response)
        })()
    }, []);

    return (
        <div>
            <div className="navbar shadow  bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu flexImportant menu-sm dropdown-content bg-base-100 flex flex-col  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={"/"} className="flex my-[10px] flex-col">Home</NavLink>
                            {
                                categories.map((category) => {
                                    return <NavLink to={"/blogCategory/"+category?.id} className="flex my-[10px] flex-col">{category?.name}</NavLink>
                                })
                            }
                            <li>
                                <a>Categories</a>
                                {
                                    categories.map((category) => {
                                        return <NavLink  to={"/blogCategory/"+category?.id} className="flex my-[10px] align-middle  flex-col">{category?.name}</NavLink>
                                    })
                                }
                            </li>

                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl">Daily Blog</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className=" menu flexImportant flex align-middle menu-horizontal px-1 ">
                        <NavLink to={"/"} className="flex mx-[10px] flex-col">Home</NavLink>
                        {
                            categories.map((category) => {
                                return <NavLink to={"/blogCategory/"+category?.id} className="flex mx-[20px]">{category?.name}</NavLink>
                            })
                        }
                        <li>
                            <details>
                                <summary className="cursor-pointer">Categories</summary>
                                <ul className="p-2">
                                    {
                                        categories.map((category) => {
                                            return <NavLink to={"/blogCategory/"+category?.id}  className="flex flex-col my-[20px]">{category?.name}</NavLink>
                                        })
                                    }

                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>

            </div>
            {props.children}
        </div>
    );
};

export default LayOut;