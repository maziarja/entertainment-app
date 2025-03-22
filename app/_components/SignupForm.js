"use client";
import Link from "next/link";
import { useState } from "react";
import { signupAction } from "../_lib/action";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);
  const [showInvalidPassword, setShowInvalidPassword] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  };

  async function handleSignupAction(formData) {
    const result = await signupAction(formData);
    setShowInvalidEmail(result?.error?.email);
    setShowInvalidPassword(result?.error?.password);
    if (result?.error?.confirmPassword) {
      toast.error(result?.error?.confirmPassword);
      resetForm();
    }
    if (result?.error?.message) {
      toast.error(result?.error?.message);
      resetForm();
    }

    if (result?.sucess) {
      toast.success(
        "Account created successfully! Please check your email to verify your account",
      );
      resetForm();
      redirect("/login");
    }
  }

  return (
    <div className="mx-auto flex max-w-[400px] flex-col">
      <svg
        className="mx-auto mt-12 mb-15"
        width="33"
        height="27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
          fill="#FC4747"
        />
      </svg>
      <div className="bg-semiDarkBlue mx-4 rounded-[10px] p-6">
        <p className="text-heading-l mb-10">Sign Up</p>
        <form action={handleSignupAction} className="flex flex-col gap-6">
          <div className="relative">
            <input
              className={`border-greyishBlue text-body-m caret-red w-full border-b pb-4 outline-none focus:border-white ${showInvalidEmail && "border-red"}`}
              name="email"
              type="email"
              value={email.slice(0, 1000)}
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
              className={`border-greyishBlue text-body-m caret-red w-full border-b pb-4 outline-none focus:border-white ${showInvalidPassword && "border-red"}`}
              type="password"
              name="password"
              max={1000}
              min={8}
              value={password.slice(0, 1000)}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              // required
            />
            {showInvalidPassword && (
              <span className="text-body-s text-red absolute right-0">
                Can&apos;t be empty
              </span>
            )}
          </div>
          <input
            className="border-greyishBlue text-body-m caret-red mb-10 border-b pb-4 outline-none focus:border-white"
            type="password"
            name="repeatPassword"
            value={repeatPassword.slice(0, 1000)}
            max={1000}
            min={8}
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Repeat Password"
            // required
          />
          <button className="bg-red text-body-m hover:text-semiDarkBlue mb-6 cursor-pointer rounded-[8px] py-3 hover:bg-white">
            Create an account
          </button>
          <p className="text-body-m text-center">
            Already have an account?&nbsp;{" "}
            <Link className="text-red" href="/login">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
