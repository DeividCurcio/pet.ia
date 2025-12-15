import Link from 'next/link';

const tabs = [
  { key: 'home', label: 'Home', href: '/', color: 'pastelPink', icon: '🐾' },
  { key: 'pet', label: 'Pet', href: '/pet', color: 'pastelYellow', icon: '🐶' },
  { key: 'games', label: 'Games', href: '/games', color: 'pastelBlue', icon: '🎮' },
  { key: 'shop', label: 'Shop', href: '/shop', color: 'pastelGreen', icon: '🛒' },
  { key: 'profile', label: 'Profile', href: '/profile', color: 'pastelPurple', icon: '👤' },
];

export default function BottomTabs({ active }: { active: string }) {
  return (
    <nav className="w-full flex justify-around items-center py-2 bg-white shadow-lg">
      {tabs.map(tab => (
        <Link key={tab.key} href={tab.href} className={`flex flex-col items-center text-xs font-bold transition-all ${active === tab.key ? `text-${tab.color} scale-110` : 'text-gray-400'}`}> 
          <span className="text-2xl mb-1">{tab.icon}</span>
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
