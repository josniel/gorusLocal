import { Routes, Route } from "react-router-dom";
// import AccountPage from "../pages/AccountPage";
// import HomePage from "../pages/HomePage";
import Index from "../pages/Index";
import Settings from "../pages/Settings";
import Register from "../pages/Register";
import SingIn from "../pages/SingIn";
import PublicRoute from "./PublicRoute";
// import roles from "../helpers/role";
import routes from "../helpers/routes";

export default function AppRouter () {
  return(
    <Routes>
      <Route element={<PublicRoute /> }>
        <Route exact path={routes.login} element={ <SingIn /> } />
      </Route>
      <Route element={<PublicRoute /> }>
        <Route exact path={routes.register} element={ <Register /> } />
      </Route>
      <Route element={<PublicRoute /> }>
        <Route exact path={routes.home} element={ <Index /> } />
      </Route>
      <Route element={<PublicRoute /> }>
        <Route exact path={routes.settings} element={ <Settings /> } />
      </Route>
      {/* <Route element={<PublicRoute /> }>
        <Route exact path={routes.login} element={ <LoginPage /> } />
      </Route>
      <Route element={<PrivateRoute /> }>
        <Route exact path={routes.account} element={ <AccountPage /> } />
      </Route>
      <Route element={<PrivateRoute /> }>
        <Route exact path={routes.projects} element={ <ProjectsPage /> } />
      </Route>
      <Route element={<PrivateRoute /> }>
        <Route exact path={routes.project()} element={ <ProjectPage /> } />
      </Route>
      <Route element={<PrivateRoute hasRole={roles.admin} /> }>
        <Route exact path={routes.admin.users} element={ <UsersPage /> } />
      </Route>
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  )
}
