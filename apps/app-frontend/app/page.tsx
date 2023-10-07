"use client"

import { useFindUserByIdQuery } from "../graphql/user.generated";

export default function Page(): JSX.Element {
  const { data, isLoading } = useFindUserByIdQuery({ id: '123' });
  const { findUserById } = data || { findUserById : { id: 'default' } };

  if (isLoading) {
    return <>loading</>
  }

  return (
    <div>
      data id: {findUserById.id} 
    </div>
  );
}
