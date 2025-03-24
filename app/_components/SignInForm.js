"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signInWithCredentials } from "../_lib/action";
import toast from "react-hot-toast";
import { useMovies } from "../context/MoviesContext";
import { useRouter } from "next/navigation";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);
  const [showInvalidPassword, setShowInvalidPassword] = useState(false);
  const { refreshSession } = useMovies();

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  const router = useRouter();
  async function handleSignInWithCredentials(formData) {
    const result = await signInWithCredentials(formData);
    setShowInvalidEmail(result?.error?.email);
    setShowInvalidPassword(result?.error?.password);
    if (result?.error?.message) {
      toast.error("Incorrect email or password. Please try again");
      resetForm();
    }
    await refreshSession();
    router.push("/");
  }

  return (
    <form
      action={handleSignInWithCredentials}
      className="mb-8 flex flex-col gap-6"
    >
      <div className="relative">
        <input
          className={`border-greyishBlue w-full ${showInvalidEmail && "border-red"} text-body-m caret-red border-b pb-4 outline-none focus:border-white`}
          type="email"
          value={email.slice(0, 1000)}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          // required
        />
        {showInvalidEmail && (
          <span className="text-body-s text-red absolute right-0">
            Can&apos;t be empty
          </span>
        )}
      </div>
      <div className="relative">
        <input
          className={`border-greyishBlue text-body-m caret-red mb-10 w-full border-b pb-4 outline-none focus:border-white ${showInvalidPassword && "border-red"}`}
          value={password.slice(0, 1000)}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          // required
        />
        {showInvalidPassword && (
          <span className="text-body-s text-red absolute right-0">
            Can&apos;t be empty
          </span>
        )}
      </div>
      <button className="bg-red text-body-m hover:text-semiDarkBlue mb-6 cursor-pointer rounded-[8px] py-3 hover:bg-white">
        Login to your account
      </button>
      <div className="text-body-m mx-auto flex flex-col gap-2">
        <p>
          {" "}
          Don&apos;t have an account?&nbsp;
          <Link className="text-red" href="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignInForm;
