import { TOKEN } from "./constant";

export async function Responce(Endpoint: string) {
  const response = await fetch(`https://api.themoviedb.org/3${Endpoint}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}
