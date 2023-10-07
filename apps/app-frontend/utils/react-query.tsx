"use client";

import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());

  return (
    // @ts-expect-error -- @tanstack/react-query to support React v18
    <QueryClientProvider client={client}>
        {children}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;