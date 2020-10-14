import React, { useEffect } from 'react'



const Dashboard = ({ setAuth }) => {


 


  const getProfile = async () => {
  try {
      const res = await fetch("http://localhost:3000/dashboard", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      // toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
   <div className><h1 className="text-black">heloo</h1></div>
   <button onClick={e => logout(e)} className="btn btn-primary">
</button>
  </>
    
  )
}

export default Dashboard
