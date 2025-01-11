import LayOut from "../layout/LayOut.jsx";
import BlogList from "../components/BlogList.jsx";
import {useEffect, useState} from "react";
import {blogListItem} from "../apiRequest/apiRequest.js";
import Loader from "../components/Loader.jsx";
import Buttons from "../components/Buttons.jsx";


const Home = () => {

    const [list, setList] = useState(null)

    useEffect(() => {
        (async ()=>{
            let response =  await blogListItem()
            setList(response)
        })()
    }, []);

    return (
        <LayOut>
            {list === null ? <Loader/>:<BlogList list={list}/>}

            <Buttons/>

        </LayOut>
    );
};

export default Home;