export default async function GetApi(url) {
    try {
        const res = await fetch(url);
        const { results } = await res.json();
        return results;
    } catch (err) {
        console.error(err);
    }
}
