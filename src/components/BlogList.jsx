import {Link} from "react-router-dom";

const BlogList = ({list}) => {
    return (
        <div>
            <div className="container mx-auto my-16 p-10">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {
                        list.map((item) => {
                            return (
                                <Link to={"/"} key={item?.id} className="card w-full glass">
                                    <figure>
                                        <img src={item.img} alt="Card"/>
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item?.title}</h2>
                                        <p className="card-text">{item?.short}</p>
                                    </div>
                                </Link>
                            )
                    })
                    }

                </div>
            </div>
        </div>
    );
};

export default BlogList;