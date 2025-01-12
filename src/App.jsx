import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import PostByCategory from "./pages/PostByCategory.jsx";

const App = () => {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogDetails/:ID" element={<DetailsPage />} />
                    <Route path="/blogCategory/:categoryID" element={<PostByCategory />} />
                </Routes>
            </HashRouter>
        </div>
    );
};

export default App;