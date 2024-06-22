import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Blog from "./pages/Blog";
import Student from "./pages/Student";
import Businessman from "./pages/Businessman";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-black">
          <BeatLoader
            color={"#dc2626"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/businessman" element={<Businessman />} />
            <Route path="/student" element={<Student />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
