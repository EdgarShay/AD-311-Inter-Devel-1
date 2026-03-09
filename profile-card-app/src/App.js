// App.js
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <h1>Profile Card Tests</h1>

      {/* Normal cases */}
      <UserProfile
        name="Jane Doe"
        email="jane.doe@example.com"
        photoUrl="https://example.com/user-photo.jpg"
      />
      <UserProfile
        name="John Smith"
        email="john.smith@example.com"
        photoUrl="https://example.com/user-photo2.jpg"
      />
      <UserProfile
        name="Alice Johnson"
        email="alice.j@example.com"
        photoUrl="https://example.com/user-photo3.jpg"
      />

      {/* Edge cases */}
      <UserProfile name="" email="" photoUrl="" />  {/* Empty props */}
      <UserProfile name="😀 Emoji Name" email="emoji@example.com" photoUrl="" /> {/* Emoji */}
      <UserProfile
        name={"VeryLongName".repeat(10)}
        email="longname@example.com"
        photoUrl="https://example.com/user-photo.jpg"
      /> {/* Very long name */}
    </div>
  );
}

export default App;