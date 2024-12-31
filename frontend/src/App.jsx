import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

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
  CategoryPage,
  Dashboard,
  DashboardPage,
  PublishedBlogsPage,
  SettingsPage,
  UsersPage,
} from "./pages/dashboard/index";

// <============= Components imports start here =============>
import { UpdateBlogs } from "./components/index";

// <============= Additional Components import =============>
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import RoleProtectedRole from "./components/utlity/RoleProtectedRoute";
import { useSelector } from "react-redux";
import Unauthorized from "./pages/client_pages/Unauthorized";
import DraftBlogsPage from "./pages/dashboard/DraftBlogsPage";

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

          {/* Unauthorized */}
          <Route path="/unauthorized" element={<Unauthorized />} />

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
            path="/blogs/categories"
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
            <Route path="category" element={<CategoryPage />} />
            <Route path="blogs" element={<PublishedBlogsPage />}></Route>
            <Route path="blogs/add" element={<AddBlogs />} />
            <Route path="blogs/pending" element={<DraftBlogsPage />}>
              <Route path="update/:id" element={<UpdateBlogs />} />
            </Route>
            <Route path="settings" element={<SettingsPage />} />
            <Route
              path="users"
              element={
                <RoleProtectedRole allowedRoles={["admin"]}>
                  <UsersPage />
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
