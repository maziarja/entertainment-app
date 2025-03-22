"use server";

import { redirect } from "next/navigation";
import { supabase } from "../api/supabase";
import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/",
  });
}

export async function signInWithCredentials(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Form validation
  if (!email)
    return {
      error: {
        email: "Can't be empty",
        password: null,
      },
    };
  if (!password)
    return {
      error: {
        email: null,
        password: "Can't be empty",
      },
    };

  /////////

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error,
    };
  }

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
  });

  return { success: true };
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/login",
  });
}

export async function signupAction(formData) {
  const password = formData.get("password");
  const repeatPassword = formData.get("repeatPassword");
  const email = formData.get("email");

  //// Form validation
  if (!email)
    return {
      error: {
        email: "Can't be empty",
      },
    };
  if (!password)
    return {
      error: {
        password: "Can't be empty",
      },
    };

  if (repeatPassword !== password) {
    return {
      error: {
        confirmPassword: "Password is not match",
      },
    };
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
  const isValidPassword = passwordRegex.test(password);
  if (!isValidPassword)
    return {
      error: {
        message:
          "Password must be at least 7 characters long, include at least one uppercase letter, and one special character",
      },
    };
  ///////

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      error,
    };
  }

  return { sucess: true };
}
