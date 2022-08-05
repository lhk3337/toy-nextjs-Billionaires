const { NEXT_PUBLIC_API_URL } = process.env;

export function ApiData(setPerson) {
  (async () => {
    const results = await (await fetch(NEXT_PUBLIC_API_URL)).json();
    setPerson(results);
  })();
}
