import Link from "next/link";

export default function Home({ users }) {
return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
    <h1>Next.js Users</h1>
    <ul>
        {users.map(user => (
        <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
        ))}
    </ul>
    </div>
);
}

// Fetch users from JSONPlaceholder
export async function getStaticProps() {
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await res.json();
return { props: { users } };
}