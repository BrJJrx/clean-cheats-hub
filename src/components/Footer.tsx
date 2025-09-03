import { useLanguage } from "@/components/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-glow">
                <span className="text-lg font-bold text-primary-foreground">C</span>
              </div>
              <span className="text-xl font-bold">{t('footer.company')}</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('nav.home')}</a></li>
              <li><a href="#cheats" className="hover:text-primary transition-colors">{t('nav.cheats')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.support')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CheatStore. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}