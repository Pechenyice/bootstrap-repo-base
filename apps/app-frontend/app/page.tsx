"use client"

import { useEffect } from "react";
import axios from "axios";
import { useFindUserByIdQuery } from "../graphql/user.generated";

export default function Page(): JSX.Element {
  const { data, isLoading } = useFindUserByIdQuery({ id: '123' });
  const { findUserById } = data || { findUserById : { id: 'default' } };

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get('http://localhost:8000/health');

      // eslint-disable-next-line no-console -- i know
      console.log(result);
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises -- no need to wait
    fetch();
  }, []);

  if (isLoading) {
    return <>loading</>
  }

  return (
    <div>
      data id: {findUserById.id} 
    </div>
  );
}
