import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Dynamically read API base URL from .env or fallback to localhost
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error("Failed to parse user from localStorage", err);
        localStorage.removeItem("user");
      }
    }
  }, []);

  // Fetch all blogs on mount
  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get(`${baseURL}/blog/all`);
        setBlogData(res.data.blogs);
      } catch (error) {
        console.error("Error in all blogs API:", error);
      }
    };
    allBlogs();
  }, []);

  // Login user and save to localStorage
  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  // Logout user and clear localStorage
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <StoreContext.Provider value={{ blogData, user, loginUser, logoutUser }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
