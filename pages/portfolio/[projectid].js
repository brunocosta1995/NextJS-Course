import { useRouter } from "next/router";

export default function PortfolioProjects() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  console.log(router.query.projectid);

  if (Number(router.query.projectid) === 1) return <h1>Portfolio Projects 1</h1>;
  if (Number(router.query.projectid) === 2) return <h1>Portfolio Projects 2</h1>;

  return <h1>Portfolio for All Projects</h1>;
   

  
}
