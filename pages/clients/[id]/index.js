import { useRouter } from "next/router";

export default function ClientsProjectsPage() {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

    function loadProjecthandler() {
        router.push('/clients/max/ProjectA');
        //alernativa - replace recarrega a página nova mas não VOLTA
        router.replace('/clients/max/ProjectA');
        //alternativa a push com parâmetros
        router.push({
            pathname: '/clients/[id]/[projectsclientesid]',
            query: {id: 'max', projectsclientesid: 'ProjectABCD'}
        })
    }

  return (
    <div>
      <h1>Projects from a Client: url="{router.query.id}"</h1>
      <button onClick={loadProjecthandler}>Select Project A</button>
    </div>
  );
}
