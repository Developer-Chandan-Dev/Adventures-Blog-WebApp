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
import PrivateRoute from "./components/utlity/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const authUser = useSelector((state) => state.user.user);
  // const navigate = useNavigate();

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

          {/* <-------------- Contact Page ---------------> */}
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          {/* Category Page */}
          <Route
            path="/category"
            element={
              <Layout>
                <CategoryPage />
              </Layout>
            }
          />

          {/* <-------------- Contact Page ---------------> */}
          <Route
            path="/team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />

          {/* <-------------- Login & Signup Page ---------------> */}
          <Route path="/login" element={authUser ? <Navigate to="/"/> : <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/"/> : <Signup />} />

          {/* <============ User Routes End here ============> */}

          {/* <============ Dashboard Routes Start here ============> */}

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                {" "}
                <Dashboard />{" "}
              </PrivateRoute>
            }
          >
            <Route
              path=""
              element={
                <PrivateRoute>
                  {" "}
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="category"
              element={
                <PrivateRoute>
                  {" "}
                  <Category />
                </PrivateRoute>
              }
            />
            <Route
              path="blogs"
              element={
                <PrivateRoute>
                  {" "}
                  <DashboardBlogsPage />
                </PrivateRoute>
              }
            >
              <Route
                path=""
                element={
                  <PrivateRoute>
                    {" "}
                    <BlogsContainer />
                  </PrivateRoute>
                }
              />
              <Route
                path="update/:id"
                element={
                  <PrivateRoute>
                    {" "}
                    <UpdateBlogs />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="blogs/add"
              element={
                <PrivateRoute>
                  {" "}
                  <AddBlogs />
                </PrivateRoute>
              }
            />
            <Route
              path="blogs/pending"
              element={
                <PrivateRoute>
                  {" "}
                  <PendingBlogs />
                </PrivateRoute>
              }
            >
              <Route
                path=""
                element={
                  <PrivateRoute>
                    {" "}
                    <DraftBlogsContainer />
                  </PrivateRoute>
                }
              />
              <Route
                path="update/:id"
                element={
                  <PrivateRoute>
                    {" "}
                    <UpdateBlogs />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="settings"
              element={
                <PrivateRoute>
                  {" "}
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="users"
              element={
                <PrivateRoute>
                  {" "}
                  <Users />
                </PrivateRoute>
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
