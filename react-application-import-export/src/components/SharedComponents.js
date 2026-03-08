
export function Button({ label = "Default Button" }) {
return (
    <button onClick={() => alert(label)}>
    {label}
    </button>
);
}