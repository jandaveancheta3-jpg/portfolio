'use client';
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/home">🏠 Home</Link></li>
        <li><Link href="/about">👤 About</Link></li>
        <li><Link href="/skills">💡 Skills</Link></li>
        <li><Link href="/projects">📁 Projects</Link></li>
        <li><Link href="/hobbies">🎮 Hobbies</Link></li>
        <li><Link href="/education">📚 Education</Link></li>
        <li><Link href="/achievements">🏆 Achievements</Link></li>
        <li><Link href="/resume">📄 Resume</Link></li>
        <li><Link href="/contact">📞 Contact</Link></li>
        <li><Link href="/gallery">🖼️ Gallery</Link></li>
      </ul>
    </nav>
  );
}
export default Navigation;