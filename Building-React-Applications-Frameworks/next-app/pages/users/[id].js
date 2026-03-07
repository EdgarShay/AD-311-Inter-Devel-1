import Link from "next/link";

export default function User({ user }) {
return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
    <h1>{user.name}</h1>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Website:</strong> {user.website}</p>
    <Link href="/">← Back to Home</Link>
    </div>
);
}

export async function getStaticPaths() {
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const users = await res.json();

const paths = users.map(user => ({
    params: { id: user.id.toString() }
}));

return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
const user = await res.json();

return { props: { user } };
}