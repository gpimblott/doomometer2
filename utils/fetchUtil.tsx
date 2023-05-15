
export function fetchFromApi(path:string) {
    const HOSTNAME: string = process.env["NEXT_PUBLIC_API_HOST"] || "http://localhost:3000";
    const fullPath = HOSTNAME + path;

    return fetch(fullPath)
        .then((response) => {
            return response.json();
        }).catch((error) => {
            console.error(error);
        });
}