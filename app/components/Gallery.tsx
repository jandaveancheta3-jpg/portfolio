import Image from "next/image";

export default function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>

      <div className="card">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={300}
          height={300}
          style={{ borderRadius: "12px" }}
        />
      </div>
    </div>
  );
}