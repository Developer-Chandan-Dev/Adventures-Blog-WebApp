import { Route, Routes } from "react-router-dom";
import "./App.css";

// <============= Page imports start here =============>
// <------------- User pages imports --------------->
import Home from "./pages/client_pages/Home";
import Blogs from "./pages/client_pages/Blogs";
import Contact from "./pages/client_pages/Contact";
import About from "./pages/client_pages/About";
import Community from "./pages/client_pages/Community";
import BlogDetailsPage from "./pages/client_pages/BlogDetailsPage";

// <------------- Dashboard pages imports --------------->
import Dashboard from "./pages/dashboard/Dashboard";

// <============= Components imports start here =============>
import Layout from "./components/Layout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import DashboardBlogsPage from "./pages/dashboard/DashboardBlogsPage";
import AddBlogs from "./pages/dashboard/AddBlogs";
import PendingBlogs from "./pages/dashboard/PendingBlogs";
import Settings from "./pages/dashboard/Settings";

// <============= Additional Components import =============>
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <main className="flex items-center justify-center flex-col bg-white">
        <Routes>
          {/* <============ User Routes Start here ============> */}

          {/* <------------- Home Page --------------> */}

          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          {/* <-------------- Blogs Page ---------------> */}
          <Route
            path="/blogs"
            element={
              <Layout>
                <Blogs />
              </Layout>
            }
          />

          {/* <-------------- Blogs Details Page ---------------> */}
          <Route
            path="/blogs/details"
            element={
              <Layout>
                <BlogDetailsPage />
              </Layout>
            }
          />

          {/* <-------------- Contact Page ---------------> */}
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

          {/* <-------------- Contact Page ---------------> */}
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          {/* <-------------- Contact Page ---------------> */}
          <Route
            path="/community"
            element={
              <Layout>
                <Community />
              </Layout>
            }
          />

          {/* <============ User Routes End here ============> */}

          {/* <============ Dashboard Routes Start here ============> */}

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardPage />} />
            <Route path="blogs" element={<DashboardBlogsPage />} />
            <Route path="blogs/add" element={<AddBlogs />} />
            <Route path="blogs/pending" element={<PendingBlogs />} />
            <Route path="settings" element={<Settings />} />

            <Route path="blogs" element={<DashboardBlogsPage />} />
            <Route path="blogs" element={<DashboardBlogsPage />} />
          </Route>
          {/* <============ Dashboard Routes End here ============> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
