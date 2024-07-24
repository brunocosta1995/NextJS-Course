import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
    { id: "bruno", name: "Bruno" },
    { id: "pam", name: "Pamela" },
  ];

  const newClients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
    { id: "bruno", name: "Bruno" },
    { id: "pam", name: "Pamela" },
  ];

  return (
    <>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
        {/* Alternativa ao href */}
        <li style={{color: "red", backgroundColor: 'black'}}>Alternativa</li>
        {newClients.map((newClient) => {
          return (
            <li>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: newClient.id },
                }}
              >{newClient.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
