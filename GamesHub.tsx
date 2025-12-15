import Link from 'next/link';

const games = [
  { key: 'tap-frenzy', label: 'Pet Tap Frenzy', icon: '🐾', href: '/games/tap-frenzy' },
  { key: 'feed-the-pet', label: 'Feed the Pet', icon: '🍖', href: '/games/feed-the-pet' },
  { key: 'jump-adventure', label: 'Pet Jump Adventure', icon: '🏃‍♂️', href: '/games/jump-adventure' },
  { key: 'grooming-master', label: 'Grooming Master', icon: '🛁', href: '/games/grooming-master' },
  { key: 'trick-training', label: 'Trick Training', icon: '🤹‍♂️', href: '/games/trick-training' },
  { key: 'park-battle', label: 'Pet Park Battle', icon: '⚔️', href: '/games/park-battle' },
  { key: 'daily-puzzle', label: 'Daily Pet Puzzle', icon: '🧩', href: '/games/daily-puzzle' },
];

export default function GamesHub() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {games.map(game => (
        <Link key={game.key} href={game.href} className="bg-pastelPink rounded-xl flex flex-col items-center justify-center p-4 shadow-lg hover:scale-105 transition-all">
          <span className="text-4xl mb-2">{game.icon}</span>
          <span className="font-bold text-pastelPurple">{game.label}</span>
        </Link>
      ))}
    </div>
  );
}
