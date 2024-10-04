import "./App.css";
import { Route, Routes } from "react-router-dom";

// <============= Page imports start here =============>
// <------------- User pages imports --------------->
import { Home, Blogs, Contact, About, Team, BlogDetailsPage, Login, Signup } from "./pages/client_pages/index";

// <------------- Dashboard pages imports --------------->
import {
  AddBlogs,
  Category,
  Dashboard,
  DashboardBlogsPage,
  DashboardPage,
  PendingBlogs,
  Settings,
  Users,
} from "./pages/dashboard/index";

// <============= Components imports start here =============>
import {
  UpdateBlogs,
  BlogsContainer,
  DraftBlogsContainer,
} from "./components/index";

// <============= Additional Components import =============>
import Layout from "./components/Layout";
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
                {" "}
                <Home />{" "}
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
          <Route path="/team"element={<Layout><Team /></Layout>}/>

          {/* <-------------- Login & Signup Page ---------------> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* <============ User Routes End here ============> */}

          {/* <============ Dashboard Routes Start here ============> */}

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<DashboardPage />} />
            <Route path="category" element={<Category />} />
            <Route path="blogs" element={<DashboardBlogsPage />}>
              <Route path="" element={<BlogsContainer />} />
              <Route path="update/:id" element={<UpdateBlogs />} />
            </Route>
            <Route path="blogs/add" element={<AddBlogs />} />
            <Route path="blogs/pending" element={<PendingBlogs />}>
              <Route path="" element={<DraftBlogsContainer />} />
              <Route path="update/:id" element={<UpdateBlogs />} />
            </Route>
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          {/* <============ Dashboard Routes End here ============> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
