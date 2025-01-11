import LayOut from "../layout/LayOut.jsx";
import BlogList from "../components/BlogList.jsx";
import {useEffect, useState} from "react";
import {blogListItem} from "../apiRequest/apiRequest.js";

const Home = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        (async ()=>{
            let response =  await blogListItem()
            setList(response)
        })()
    }, []);

    return (
        <LayOut>
            <BlogList list={list} setList={setList} />
        </LayOut>
    );
};

export default Home;