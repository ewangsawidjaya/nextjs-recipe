import Link from "next/link";

export default function Page(){
    return (
        <div>
            <p>Recipes Page</p>
            <ul>
                <li><Link href='/recipes/1'>Recipe 1</Link></li>
            </ul>
        </div>
    );
}