import { redirect } from "next/navigation";
import Navigation from "../_components/Navigation";
import { auth } from "../_lib/auth";

async function layout({ children }) {
  const session = await auth();

  if (!session) {
    redirect("/login");
    // throw new Error("You need to login first");
  }

  return (
    <div className="lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-2">
      <Navigation session={session} />
      <div className="mx-4">{children}</div>
    </div>
  );
}

export default layout;
