import Input from "@/components/Input";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [varient, setVarient] = useState("login");

  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) =>
      currentVarient === "login" ? "signUp" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        name,
        email,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [name, email, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {varient === "login" ? "Sign In" : "Sign Up"}
            </h2>

            <div className="flex flex-col gap-4">
              <form>
                {varient === "signUp" && (
                  <Input
                    label="Username"
                    id="name"
                    onChange={(e: any) => {
                      setName(e.target.value);
                    }}
                    value={name}
                  />
                )}
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <Input
                  label="Password"
                  id="password"
                  type="password"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
              </form>
            </div>

            <button
              onClick={varient === "login" ? login : register}
              className="bg-red-600 py-3 text-white font-semibold tracking-wider rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {varient === "login" ? "Sign In" : "Sign Up"}
            </button>

            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>

            <p className="text-neutral-500 mt-12 text-start font-medium">
              {varient === "login"
                ? "New to Netflix?"
                : "Already have an Account?"}

              <span
                onClick={toggleVarient}
                className="text-white ml-1 hover:underline cursor-pointer select-none"
              >
                {varient === "login" ? "Sign up now" : "Sign In"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
