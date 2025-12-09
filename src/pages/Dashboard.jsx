import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="dashboard w-full h-screen">
      <>
        <header className="navbar">
          <nav className="text-white flex items-center justify-between px-12 py-4">
            <h1 className="text-2xl font-extrabold uppercase">Dashboard</h1>
            <div className="flex items-center justify-between gap-6">
              {user ? (
                <>
                  <h2 onClick={logout} className="font-bold text-xl">
                    {user.user_metadata.full_name}
                  </h2>
                  <img
                    src={user?.user_metadata.picture}
                    alt="logo"
                    width={40}
                    className="rounded-full object-cover"
                  />
                </>
              ) : (
                <>
                  <h2 onClick={logout} className="font-bold text-xl">
                    Anonymous
                  </h2>
                  <img
                    src="https://vycrdkusyqcdikdvambj.supabase.co/storage/v1/object/public/mygalery/logoA.png"
                    alt="logo"
                    width={40}
                    className="rounded-full object-cover"
                  />
                </>
              )}
            </div>
          </nav>
        </header>
        <div class="wrapper mt-24 border-2">
          <svg className="dsds">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Welcome To DashBoard
            </text>
          </svg>
        </div>
      </>
    </div>
  );
}
