import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// <============= Page imports start here =============>
// <------------- User pages imports --------------->
import {
  Home,
  Blogs,
  Contact,
  About,
  Team,
  BlogDetailsPage,
  Login,
  Signup,
} from "./pages/client_pages/index";

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
import CategoryPage from "./pages/client_pages/CategoryPage";
import RoleProtectedRole from "./components/utlity/RoleProtectedRoute";
import { useSelector } from "react-redux";

/**
 * App component serves as the main entry point for routing in the application.
 * It handles both user-facing and admin dashboard routes, 
 * utilizing role-based access control for secure navigation.
 */

function App() {
  // Retrieve authenticated user information from Redux state
  const authUser = useSelector((state) => state.user.user);

  console.log(authUser);

  return (
    <>
      {/* Ensure page scrolls to top on navigation */}
      <ScrollToTop />
      <main className="flex items-center justify-center flex-col bg-white">
        {/* Define routes for the application */}
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
            path="/blogs/details/:id"
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

          {/* <-------------- About Page ---------------> */}
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          {/* <-------------- Category Page ---------------> */}
          <Route
            path="/category"
            element={
              <Layout>
                <CategoryPage />
              </Layout>
            }
          />

          {/* <-------------- Team Page ---------------> */}
          <Route
            path="/team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />

          {/* <-------------- Login & Signup Pages ---------------> */}
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <Signup />}
          />

          {/* <============ Dashboard Routes Start here ============> */}

          {/* <-------------- Dashboard ---------------> */}
          <Route
            path="/dashboard"
            element={
              <RoleProtectedRole allowedRoles={["admin", "author"]}>
                <Dashboard />
              </RoleProtectedRole>
            }
          >
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
            <Route
              path="users"
              element={
                <RoleProtectedRole allowedRoles={["admin"]}>
                  <Users />
                </RoleProtectedRole>
              }
            />
          </Route>
          {/* <============ Dashboard Routes End here ============> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
