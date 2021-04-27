import React from "react";

const ClientsList = ({ clients }) => {
  return (
    <ul className="clientsList">
      {clients.map((client) => (
        <li key={client.id}>{client.name}</li>
      ))}
    </ul>
  );
};

export default ClientsList;
