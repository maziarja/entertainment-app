import GoogleSignIn from "../_components/GoogleSignIn";
import SignInForm from "../_components/SignInForm";

export const metadata = {
  title: "Login",
};
function page() {
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
      <div className="bg-semiDarkBlue mx-4 flex flex-col rounded-[10px] p-6">
        <p className="text-heading-l mb-10">Login</p>
        <SignInForm />
        <GoogleSignIn />
      </div>
    </div>
  );
}

export default page;
