import { CheatCard } from "@/components/CheatCard";
import { useLanguage } from "@/components/LanguageContext";

export function Products() {
  const { t, language } = useLanguage();

  const cheats = [
    {
      title: language === 'pt' ? 'CS2 Premium' : 'CS2 Premium',
      description: language === 'pt' ? 'Cheat completo para Counter-Strike 2 com aimbot, wallhack e muito mais.' : 'Complete cheat for Counter-Strike 2 with aimbot, wallhack and much more.',
      price: 'R$ 29,90',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&crop=center',
      features: language === 'pt' ? ['Aimbot avançado', 'Wallhack ESP', 'Radar hack', 'Anti-ban protection'] : ['Advanced aimbot', 'Wallhack ESP', 'Radar hack', 'Anti-ban protection'],
      popular: true,
    },
    {
      title: language === 'pt' ? 'Valorant Pro' : 'Valorant Pro',
      description: language === 'pt' ? 'Dominante no Valorant com recursos exclusivos e segurança máxima.' : 'Dominate in Valorant with exclusive features and maximum security.',
      price: 'R$ 34,90',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&crop=center',
      features: language === 'pt' ? ['Trigger bot', 'Skin changer', 'No recoil', 'Silent aim'] : ['Trigger bot', 'Skin changer', 'No recoil', 'Silent aim'],
    },
    {
      title: language === 'pt' ? 'Apex Legends Elite' : 'Apex Legends Elite',
      description: language === 'pt' ? 'Cheat premium para Apex Legends com recursos únicos.' : 'Premium cheat for Apex Legends with unique features.',
      price: 'R$ 39,90',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center',
      features: language === 'pt' ? ['Bone aimbot', 'Item ESP', 'Speed hack', 'No spread'] : ['Bone aimbot', 'Item ESP', 'Speed hack', 'No spread'],
    },
    {
      title: language === 'pt' ? 'Fortnite Victory' : 'Fortnite Victory',
      description: language === 'pt' ? 'Garanta suas vitórias royale com nosso cheat atualizado.' : 'Secure your royale victories with our updated cheat.',
      price: 'R$ 24,90',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop&crop=center',
      features: language === 'pt' ? ['Aimbot suave', 'Building ESP', 'Chest finder', 'Storm prediction'] : ['Smooth aimbot', 'Building ESP', 'Chest finder', 'Storm prediction'],
    },
    {
      title: language === 'pt' ? 'PUBG Master' : 'PUBG Master',
      description: language === 'pt' ? 'Seja o último sobrevivente com vantagem total no PUBG.' : 'Be the last survivor with total advantage in PUBG.',
      price: 'R$ 27,90',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop&crop=center',
      features: language === 'pt' ? ['Long range aimbot', 'Vehicle ESP', 'Loot ESP', 'No grass'] : ['Long range aimbot', 'Vehicle ESP', 'Loot ESP', 'No grass'],
    },
    {
      title: language === 'pt' ? 'Rust Survival' : 'Rust Survival',
      description: language === 'pt' ? 'Sobreviva e domine em Rust com nossos recursos exclusivos.' : 'Survive and dominate in Rust with our exclusive features.',
      price: 'R$ 32,90',
      image: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?w=400&h=300&fit=crop&crop=center',
      features: language === 'pt' ? ['Player ESP', 'Animal ESP', 'Resource ESP', 'Night vision'] : ['Player ESP', 'Animal ESP', 'Resource ESP', 'Night vision'],
    },
  ];

  return (
    <section id="cheats" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('products.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cheats.map((cheat, index) => (
            <CheatCard key={index} {...cheat} />
          ))}
        </div>
      </div>
    </section>
  );
}