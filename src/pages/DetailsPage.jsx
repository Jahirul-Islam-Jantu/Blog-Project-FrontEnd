import LayOut from "../layout/LayOut.jsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {detailsPostItem} from "../apiRequest/apiRequest.js";
import Loader from "../components/Loader.jsx";
import BlogDetail from "../components/BlogDetail.jsx";

const DetailsPage = () => {
    let {ID} = useParams();

    const [list, setList] = useState(null);

    useEffect( () => {
        (async ()=>{
            let result = await detailsPostItem(ID)
            setList(result)
        })()
    }, [ID]);
    return (
        <LayOut>
            {list === null ? <Loader/>:<BlogDetail list={list}/>}
        </LayOut>
    );
};

export default DetailsPage;