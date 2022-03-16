import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import { ContainerProvider } from './utils/container'
import Layout from "./components/layouts/Layout";
import AppRouter from "./routers/AppRouter";
import './App.css'

function App() {
  console.log('appRouter', AppRouter)
  return (
    <div>
        <ContainerProvider>
          <Router>
            <AuthProvider>
              <Layout>
                <AppRouter />
              </Layout>
            </AuthProvider>
          </Router>
        </ContainerProvider>
    </div>
  );
}

export default App;
