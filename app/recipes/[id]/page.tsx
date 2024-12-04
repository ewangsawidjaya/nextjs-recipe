export default async function Page({params}: {params: {id: string}}) {
    const id = params.id;
    return <p>Recipe Detail Page {id} </p>;
}