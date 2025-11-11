export class RestClientException {
  constructor(readonly message: string[]) {}
}

export function queryString(form: Record<string, unknown>) {
  const searchParams = new URLSearchParams();

  Object.keys(form).forEach((key) => {
    const value = form[key];
    if (value === undefined || value === null) return;
    searchParams.append(key, String(value));
  });

  return searchParams.toString();
}

export const POST_CONFIG: RequestInit = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export const PUT_CONFIG: RequestInit = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
};
