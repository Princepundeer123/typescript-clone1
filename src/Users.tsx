import { FC, useEffect, useState } from "react";
import { getUsers } from "./Api";
import { User } from "./modules/user";

const Users: FC = () => {

  const [users, setUsers] = useState<{results: User[]}>();

    useEffect(() => {
   const Response = getUsers();
     Response.then((data) => {
        setUsers(data);
     })
    }, []);

    return (
        <div>

        </div>
    );
}