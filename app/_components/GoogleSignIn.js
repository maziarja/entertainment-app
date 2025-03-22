import { signInAction } from "../_lib/action";

function GoogleSignIn() {
  return (
    <form className="mx-auto" action={signInAction}>
      <button className="border-greyishBlue text-body-m flex cursor-pointer items-center gap-4 rounded-[8px] border p-2 font-medium hover:border-white">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span className="text-body-m">Continue with Google</span>
      </button>
    </form>
  );
}

export default GoogleSignIn;
