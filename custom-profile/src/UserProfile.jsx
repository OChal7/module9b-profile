function UserProfile() {

  const name = "Oscar Chaltiel";
  const bio = "Developer who loves hiking, golf, my dog and building cool stuff.";
  const profileImage = "https://images.unsplash.com/photo-1753648394939-f86f994cbbff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D";

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "100px auto",
        padding: "50px",
        borderRadius: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
        borderRadius: "50px"
      }}
    >
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "16px",
        }}
      />
      <h1 style={{ fontSize: "24px", margin: "12px 0 8px 0" }}>{name}</h1>
      <p style={{ fontSize: "16px", color: "#555" }}>{bio}</p>
    </div>
  );
}

export default UserProfile;
