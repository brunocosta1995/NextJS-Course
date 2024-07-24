import { useRouter } from "next/router"

export default function ProjectFromClient() {

    const router = useRouter();

    console.log(router.query);
    console.log(router.pathname);

    return <h1>Specific Project from Client - Name: {router.query.projectsclientesid}</h1>
}