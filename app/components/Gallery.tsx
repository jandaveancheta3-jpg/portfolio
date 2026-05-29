import Image from "next/image";

function GalleryPage() {
  return (
    <div>
      <h1>Photo Gallery</h1>
      
      <div>
        <h2>Project Screenshots</h2>
        <div>

          <div>
            <Image
              src="/background.png"
              alt="E-commerce Website Homepage"
              width={300}
              height={200}
            />
            <p>📸 E-commerce Website Homepage</p>
          </div>

          <div>
            <Image
              src="/gallery/taskmanager.png"
              alt="Task Manager Dashboard"
              width={300}
              height={200}
            />
            <p>📸 Task Manager Dashboard</p>
          </div>

          <div>
            <Image
              src="/gallery/weatherapp.png"
              alt="Weather App Interface"
              width={300}
              height={200}
            />
            <p>📸 Weather App Interface</p>
          </div>

        </div>
      </div>
      
      <div>
        <h2>Event Photos</h2>
        <div>

          <div>
            <Image
              src="/gallery/hackathon.jpg"
              alt="Hackathon 2024"
              width={300}
              height={200}
            />
            <p>📷 Hackathon 2024</p>
          </div>

          <div>
            <Image
              src="/gallery/workshop.jpg"
              alt="Coding Workshop"
              width={300}
              height={200}
            />
            <p>📷 Coding Workshop</p>
          </div>

          <div>
            <Image
              src="/gallery/graduation.jpg"
              alt="Graduation Day"
              width={300}
              height={200}
            />
            <p>📷 Graduation Day</p>
          </div>

        </div>
      </div>
      
      <div>
        <h2>Personal Moments</h2>
        <div>

          <div>
            <Image
              src="/gallery/project.jpg"
              alt="Working on a project"
              width={300}
              height={200}
            />
            <p>🎯 Working on a project</p>
          </div>

          <div>
            <Image
              src="/gallery/team.jpg"
              alt="Team meeting"
              width={300}
              height={200}
            />
            <p>🎯 Team meeting</p>
          </div>

          <div>
            <Image
              src="/gallery/coding.jpg"
              alt="Coding session"
              width={300}
              height={200}
            />
            <p>🎯 Coding session</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default GalleryPage;