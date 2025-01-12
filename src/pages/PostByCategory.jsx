import LayOut from "../layout/LayOut.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { postByCategory} from "../apiRequest/apiRequest.js";
import Loader from "../components/Loader.jsx";
import BlogList from "../components/BlogList.jsx";

const PostByCategory = () => {
    let {categoryID} = useParams()

    const [list, setList] = useState([])
    useEffect(() => {
        (async ()=>{
            let response =  await postByCategory(categoryID)
            setList(response)
        })()
    }, [categoryID]);

    return (
        <LayOut>
            {list === null ? <Loader/>:<BlogList list={list}/>}
        </LayOut>
    );
};

export default PostByCategory;