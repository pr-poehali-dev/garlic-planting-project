import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const garlicProducts = [
  {
    id: 1,
    name: "Чеснок озимый Любаша",
    image: "/img/3514e188-72a8-4ea5-9cfa-8942ea59550b.jpg",
    price: "350 ₽/кг",
    description: "Крупные головки, устойчив к заморозкам",
    guarantee: "99% всхожести",
    inStock: true
  },
  {
    id: 2,
    name: "Чеснок яровой Гулливер",
    image: "/img/708251e8-a1f7-4984-a075-c969a94cc49a.jpg",
    price: "420 ₽/кг",
    description: "Сладковатый вкус, долгое хранение",
    guarantee: "98% всхожести",
    inStock: true
  },
  {
    id: 3,
    name: "Чеснок Рокамболь",
    image: "/img/69b2f39d-8e1c-44bb-be52-0fa69e175f3f.jpg",
    price: "480 ₽/кг",
    description: "Слоновый чеснок, гигантские размеры",
    guarantee: "97% всхожести",
    inStock: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-vintage-cream to-vintage-beige">
      {/* Header */}
      <header className="bg-vintage-cream shadow-sm border-b border-vintage-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Sprout" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-vintage-dark">СадОгород</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-vintage-dark hover:text-primary transition-colors">Каталог</a>
              <a href="#delivery" className="text-vintage-dark hover:text-primary transition-colors">Доставка</a>
              <a href="#contacts" className="text-vintage-dark hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-vintage-dark mb-6">
            Чеснок на посадку
          </h2>
          <p className="text-xl text-vintage-brown/80 mb-8 max-w-2xl mx-auto">
            Качественный посадочный материал с гарантией всхожести. 
            Выращиваем с заботой о природе и вашем урожае.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-primary text-white px-4 py-2">
              <Icon name="Shield" size={16} className="mr-2" />
              Гарантия качества
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
              <Icon name="Truck" size={16} className="mr-2" />
              Быстрая доставка
            </Badge>
            <Badge className="bg-accent text-accent-foreground px-4 py-2">
              <Icon name="Leaf" size={16} className="mr-2" />
              Экологично
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="catalog" className="py-16 bg-vintage-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-vintage-dark mb-4">Наш каталог</h3>
            <p className="text-vintage-brown/70 max-w-2xl mx-auto">
              Отборные сорта чеснока для посадки. Каждая партия проходит проверку на всхожесть.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {garlicProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        Нет в наличии
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-white">
                      {product.guarantee}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-vintage-dark text-xl">{product.name}</CardTitle>
                  <p className="text-vintage-brown/70">{product.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <div className="flex items-center text-primary">
                      <Icon name="CheckCircle" size={16} className="mr-1" />
                      <span className="text-sm">Сертифицирован</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    disabled={!product.inStock}
                    variant={product.inStock ? "default" : "secondary"}
                  >
                    {product.inStock ? (
                      <>
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        В корзину
                      </>
                    ) : (
                      "Временно нет"
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-16 bg-vintage-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-vintage-dark mb-4">Наши гарантии</h3>
            <p className="text-vintage-brown/70">Мы отвечаем за качество каждой луковицы</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Seedling" className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-vintage-dark mb-2">Высокая всхожесть</h4>
              <p className="text-vintage-brown/70 text-sm">До 99% всходов при соблюдении условий посадки</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Award" className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-vintage-dark mb-2">Премиум качество</h4>
              <p className="text-vintage-brown/70 text-sm">Отбираем только лучшие экземпляры</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-vintage-dark mb-2">Защита покупки</h4>
              <p className="text-vintage-brown/70 text-sm">Возврат средств при неудовлетворительном результате</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Truck" className="text-primary" size={32} />
              </div>
              <h4 className="font-semibold text-vintage-dark mb-2">Быстрая доставка</h4>
              <p className="text-vintage-brown/70 text-sm">Отправляем в течение 24 часов по всей России</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vintage-dark text-vintage-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Sprout" size={24} />
                <h3 className="text-xl font-bold">СадОгород</h3>
              </div>
              <p className="text-white/80 text-sm">
                Качественный посадочный материал для вашего сада с 2015 года.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Озимый чеснок</li>
                <li>Яровой чеснок</li>
                <li>Элитные сорта</li>
                <li>Семенной лук</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Доставка</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>По России</li>
                <li>Почта России</li>
                <li>СДЭК</li>
                <li>Самовывоз</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@sadogorod.ru</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            © 2024 СадОгород. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;