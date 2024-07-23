import { useRouter } from "next/router"

export default function ClientsProjectsPage() {

    const router = useRouter();
    console.log(router.asPath);
    console.log(router.query);

    return <h1>Projects from a Client: {router.query.id}</h1>
}