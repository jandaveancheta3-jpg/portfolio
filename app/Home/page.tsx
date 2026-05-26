function HomePage() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Hi! I'm [JAN Dave], a passionate Motorcycle Mechanic and a BSIT GRADUATE.</p>
      <p>This is my personal portfolio website where you can learn more about me, my skills, and my projects.</p>
      <button>View My Work</button>
    </div>
  );
}
export default HomePage;

import Link from 'next/link';

// ... inside your HomePage function
<Link href="/about">
  <button className="your-button-styles">
    View My Work
  </button>
</Link>