// Homepage component with list of posts
import { Link } from "react-router-dom";

export default function Home() {
const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" }
];

return (
    <div>
<h1>React Router Blog</h1>
<ul>
        {posts.map(post => (
    <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
        ))}
    </ul>
    </div>
);
}