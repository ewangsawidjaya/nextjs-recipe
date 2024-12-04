export default async function Page({params}: {params: {id: string}}) {
    const {id} = await params;
    return <p>Recipe Detail Page {id} </p>;
}