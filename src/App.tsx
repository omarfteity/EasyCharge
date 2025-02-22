import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Home from "./components/home";
import LandingPage from "./components/landing/LandingPage";
import Features from "./components/landing/Features";
import Pricing from "./components/landing/Pricing";
import About from "./components/landing/About";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import Profile from "./components/dashboard/Profile";
import Vehicle from "./components/dashboard/Vehicle";
import History from "./components/dashboard/History";
import Map from "./components/dashboard/Map";
import Payments from "./components/dashboard/Payments";
import Notifications from "./components/dashboard/Notifications";
import Settings from "./components/dashboard/Settings";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/history" element={<History />} />
        <Route path="/map" element={<Map />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
