import { useSocialStore } from '@store/socialStore';
import { mockPosts, mockUsers, mockPets } from '@mock/mockData';
import { useEffect } from 'react';

function PostCard({ post }: { post: any }) {
  const user = mockUsers.find(u => u.id === post.userId);
  const pet = mockPets.find(p => p.id === post.petId);
  return (
    <div className="bg-white rounded-xl shadow-md p-3 mb-3 flex flex-col">
      <div className="flex items-center mb-2">
        <img src={user?.avatar} alt={user?.name} className="w-8 h-8 rounded-full mr-2" />
        <span className="font-bold text-pastelPurple">{user?.name}</span>
        <span className="ml-2 text-xs text-pastelBlue">com {pet?.name}</span>
      </div>
      <img src={post.photo} alt="pet" className="w-full h-40 object-cover rounded-lg mb-2" />
      <span className="text-pastelBlue mb-1">{post.caption}</span>
      <div className="flex gap-4 text-xs">
        <span>❤️ {post.likes}</span>
        <span>💬 {post.comments}</span>
      </div>
    </div>
  );
}

export default function SocialFeed() {
  const posts = useSocialStore(s => s.posts);
  useEffect(() => {
    if (posts.length === 0) {
      // Carrega posts mockados no primeiro acesso
      mockPosts.forEach(p => useSocialStore.getState().addPost(p));
    }
  }, []);
  return (
    <div className="w-full max-w-md mx-auto mt-4">
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
