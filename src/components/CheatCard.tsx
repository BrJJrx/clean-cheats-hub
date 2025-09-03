import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/LanguageContext";

interface CheatCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export function CheatCard({ title, description, price, image, features, popular }: CheatCardProps) {
  const { t } = useLanguage();

  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {popular && (
        <Badge className="absolute top-4 right-4 z-10 bg-success text-success-foreground">
          Popular
        </Badge>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-4">
          <span className="text-sm text-muted-foreground">{t('products.from')}</span>
          <div className="text-2xl font-bold text-primary">{price}</div>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2">{t('products.features')}</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-success hover:bg-success/90 text-success-foreground"
          size="lg"
        >
          {t('products.buy')}
        </Button>
      </CardFooter>
    </Card>
  );
}