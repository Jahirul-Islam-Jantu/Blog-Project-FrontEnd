import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import BlogDetail from "../pages/BlogDetail.jsx";
import PostByCategory from "../pages/PostByCategory.jsx";

const Routes = () => {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" component={Home} />
                    <Route path="/blog-details/:id" component={BlogDetail} />
                    <Route path="/postByCategory" component={PostByCategory} />
                </Routes>
            </HashRouter>
        </div>
    );
};

export default Routes;