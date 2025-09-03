import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.cheats': 'Cheats',
    'nav.support': 'Suporte',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Os Melhores Cheats para Seus Jogos',
    'hero.subtitle': 'Domine seus jogos favoritos com nossos cheats premium, seguros e sempre atualizados.',
    'hero.cta': 'Ver Cheats',
    'hero.learn': 'Saiba Mais',
    
    // Features
    'features.safe': 'Seguro e Confiável',
    'features.safe.desc': 'Todos os nossos cheats são testados e livres de vírus.',
    'features.updated': 'Sempre Atualizado',
    'features.updated.desc': 'Atualizações automáticas para manter compatibilidade.',
    'features.support': 'Suporte 24/7',
    'features.support.desc': 'Nossa equipe está sempre pronta para te ajudar.',
    
    // Products
    'products.title': 'Nossos Cheats Premium',
    'products.subtitle': 'Escolha o cheat perfeito para seu jogo favorito',
    'products.from': 'A partir de',
    'products.buy': 'Comprar Agora',
    'products.features': 'Recursos inclusos:',
    
    // Footer
    'footer.company': 'CheatStore',
    'footer.description': 'Sua loja confiável de cheats premium para os melhores jogos.',
    'footer.links': 'Links Úteis',
    'footer.support': 'Suporte',
    'footer.legal': 'Legal',
    'footer.terms': 'Termos de Uso',
    'footer.privacy': 'Política de Privacidade',
    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.cheats': 'Cheats',
    'nav.support': 'Support',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'The Best Cheats for Your Games',
    'hero.subtitle': 'Master your favorite games with our premium, safe and always updated cheats.',
    'hero.cta': 'View Cheats',
    'hero.learn': 'Learn More',
    
    // Features
    'features.safe': 'Safe & Reliable',
    'features.safe.desc': 'All our cheats are tested and virus-free.',
    'features.updated': 'Always Updated',
    'features.updated.desc': 'Automatic updates to maintain compatibility.',
    'features.support': '24/7 Support',
    'features.support.desc': 'Our team is always ready to help you.',
    
    // Products
    'products.title': 'Our Premium Cheats',
    'products.subtitle': 'Choose the perfect cheat for your favorite game',
    'products.from': 'Starting from',
    'products.buy': 'Buy Now',
    'products.features': 'Included features:',
    
    // Footer
    'footer.company': 'CheatStore',
    'footer.description': 'Your trusted premium cheat store for the best games.',
    'footer.links': 'Useful Links',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms of Use',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}