import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewHome = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  // Helper function to read a specific cookie value natively
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  // Helper function to delete a cookie natively by expiring it
  const removeCookieNative = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post("http://localhost:3002", {}, { withCredentials: true });

        const { status, user } = data;

        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, { position: "top-right" });
          setLoading(false);
        } else {
          removeCookieNative("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        removeCookieNative("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [navigate]);

  const Logout = () => {
    removeCookieNative("token");
    navigate("/login");
  };

  if (loading) {
    return <div style={{ padding: "20px" }}>Loading dashboard...</div>;
  }

  return (
    <>
      <div className="home_page" style={{ marginTop: "10rem" }}>
        <h4>
          <span> Welcome , {username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default NewHome;
