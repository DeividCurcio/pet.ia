import { useState } from 'react';
import { useUserStore } from '@store/userStore';

export default function PetProfileCreator() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const [photo, setPhoto] = useState('');
  const addPet = useUserStore(s => s.addPet);

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPhoto(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!name || !breed || !photo) return;
    addPet({ id: Date.now().toString(), name, breed, bio, photo });
    setName(''); setBreed(''); setBio(''); setPhoto('');
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg flex flex-col items-center">
      <input type="file" accept="image/*" onChange={handlePhoto} className="mb-2" />
      {photo && <img src={photo} alt="pet" className="w-24 h-24 rounded-full mb-2 border-4 border-pastelPink" />}
      <input className="mb-2 px-2 py-1 rounded" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
      <input className="mb-2 px-2 py-1 rounded" placeholder="Raça" value={breed} onChange={e => setBreed(e.target.value)} />
      <textarea className="mb-2 px-2 py-1 rounded" placeholder="Bio" value={bio} onChange={e => setBio(e.target.value)} />
      <button className="bg-pastelBlue text-white px-4 py-2 rounded-lg font-bold" onClick={handleSave}>Salvar Pet</button>
    </div>
  );
}
