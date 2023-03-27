import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import BucketMenu from "./components/BucketMenu";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BucketMenu />} />
                    <Route path="/add" element={<Add />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
