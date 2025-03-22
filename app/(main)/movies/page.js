import MoviesPage from "@/app/_components/MoviesPage";

export const metadata = {
  title: "Movies",
};

async function page() {
  return <MoviesPage />;
}

export default page;
