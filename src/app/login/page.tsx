'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Alert, CircularProgress } from "@mui/material";
import Link from "next/link";
export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [load, setLoad] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onLogin = async () => {
    try {
      setLoad(true);
      setShowAlert(false);

      const response = await axios.post("/api/users/login", user);
      const status = response.status;

      if (status === 400 || status === 409) {
        setShowAlert(true);
      } else {
        console.log(response.data);
        router.push("/profile");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setShowAlert(true);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <span className="bg-gray-300 min-h-screen flex flex-col">
      {showAlert && (
        <Alert variant="filled" severity="error">
          Check credentials
        </Alert>
      )}

      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 shadow-sm">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center font-semibold">Sign In</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="username"
            placeholder="username"
            onChange={(e) =>
              setUser({ ...user, username: e.target.value })
            }
          />

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email*"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password*"
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green-700 text-white hover:bg-green-600 focus:outline-none my-1"
            onClick={onLogin}
            disabled={buttonDisabled}
          >
            Log In
          </button>
        </div>

        <div className="text-grey-dark mt-6">
          Create an account?{" "}
          <Link
            className="no-underline border-b border-blue text-blue-500 hover:font-bold"
            href="/signup"
          >
            Sign Up
          </Link>
          {load && (
            <div className="flex justify-center">
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
    </span>
  );
}
