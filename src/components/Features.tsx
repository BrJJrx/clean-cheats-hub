import { Shield, RefreshCw, Headphones } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('features.safe'),
      description: t('features.safe.desc'),
    },
    {
      icon: RefreshCw,
      title: t('features.updated'),
      description: t('features.updated.desc'),
    },
    {
      icon: Headphones,
      title: t('features.support'),
      description: t('features.support.desc'),
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}