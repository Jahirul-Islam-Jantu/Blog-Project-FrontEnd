import LayOut from "../layout/LayOut.jsx";

const BlogDetail = ({list}) => {
    return (
        <LayOut>
            <div className="container mx-auto my-16 p-10">
                <div className="grid grid-cols-1 px-10 mt-2 md:grid-cols-1 lg:grid-cols-1">
                    <div className="card w-100 glass">
                             <figure>
                                 <img src={list?.postDetails?.img} alt="Details Image"/>
                             </figure>
                        <div className="card-body">
                             <h2 className="card-title">{list?.["postDetails"]?.["title"]}</h2>
                            <p>{list?.postDetails?.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </LayOut>
    );
};

export default BlogDetail;