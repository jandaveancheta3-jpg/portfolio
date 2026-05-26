'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavigationWrapper() {
  const pathname = usePathname();
  
  const navItems = [
    { path: '/home', name: '🏠 Home' },
    { path: '/about', name: '👤 About' },
    { path: '/skills', name: '💡 Skills' },
    { path: '/projects', name: '📁 Projects' },
    { path: '/hobbies', name: '🎮 Hobbies' },
    { path: '/education', name: '📚 Education' },
    { path: '/achievements', name: '🏆 Achievements' },
    { path: '/resume', name: '📄 Resume' },
    { path: '/contact', name: '📞 Contact' },
    { path: '/gallery', name: '🖼️ Gallery' },
  ];
  
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              href={item.path}
              style={{
                color: pathname === item.path ? '#667eea' : '#333',
                borderBottom: pathname === item.path ? '2px solid #667eea' : 'none'
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavigationWrapper;