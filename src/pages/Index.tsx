
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, CheckCircle, TrendingUp, BarChart3, Users, Target, DollarSign, Shield, Clock, Zap } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">Callaba</div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("hero")} className="text-gray-600 hover:text-gray-900 transition-colors">Главная</button>
              <button onClick={() => scrollToSection("cases")} className="text-gray-600 hover:text-gray-900 transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection("pricing")} className="text-gray-600 hover:text-gray-900 transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</button>
              <button onClick={() => scrollToSection("audit")} className="text-gray-600 hover:text-gray-900 transition-colors">Аудит</button>
            </nav>
            <Button onClick={() => scrollToSection("audit")} className="bg-blue-600 hover:bg-blue-700">
              Получить аудит
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Увеличиваем прибыль<br />на маркетплейсах<br />
              <span className="text-blue-600">в 3-10 раз</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Мы не агентство. Мы — ваш внешний отдел по повышению продаж на WB и Ozon. 
              Системный подход, автоматизация и ответственность за результат.
            </p>
            <Button onClick={() => scrollToSection("audit")} size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Получить аудит бесплатно
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Вам это знакомо?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, text: "Реклама сжирает всю маржу" },
              { icon: ArrowUp, text: "Возвраты растут, а прибыль — нет" },
              { icon: BarChart3, text: "80% ассортимента — мертвый груз" },
              { icon: Shield, text: "Нет контроля за процессами" },
              { icon: Clock, text: "Ручная аналитика мешает росту" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            Мы не агентство.<br />
            Мы — ваш внешний отдел по повышению продаж на маркетплейсах
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            (WB, Ozon)
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Стратегия 6–12 месяцев", description: "Долгосрочное планирование роста" },
              { icon: Zap, title: "Автоматизация до 80% рутины", description: "Освобождаем время для стратегии" },
              { icon: BarChart3, title: "BI-аналитика в реальном времени", description: "Принимайте решения на основе данных" },
              { icon: Users, title: "Вся команда — в одной связке", description: "Координированная работа экспертов" },
              { icon: CheckCircle, title: "Ответственность — за результат", description: "Гарантируем достижение KPI" }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Рост прибыли через системный подход
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "БАДы (Ozon)",
                before: "200К ₽",
                after: "6М ₽",
                metric: "ДРР: 25% → 3%"
              },
              {
                category: "Настольные игры (WB)",
                before: "200К ₽",
                after: "6М ₽",
                metric: "Рост органики в 15 раз"
              },
              {
                category: "Продукты (WB)",
                before: "500К ₽",
                after: "5М ₽",
                metric: "Оптимизация SKU -70%"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.category}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Было:</span>
                      <span className="text-red-500 font-semibold">{item.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Стало:</span>
                      <span className="text-green-500 font-semibold text-xl">{item.after}</span>
                    </div>
                    <Separator />
                    <p className="text-blue-600 font-medium text-center">{item.metric}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Под ваш уровень зрелости
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "БАЗА",
                price: "от 50 000₽",
                features: ["Аналитика", "Отчёты", "Базовая оптимизация"]
              },
              {
                name: "ПРОРЫВ",
                price: "от 100 000₽",
                features: ["Маркетинг", "IT решения", "Финансы", "Команда экспертов"],
                popular: true
              },
              {
                name: "МАСШТАБ",
                price: "от 200 000₽",
                features: ["BI аналитика", "6 специалистов", "Полное сопровождение", "Персональный менеджер"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`p-6 ${plan.popular ? 'ring-2 ring-blue-600' : ''} hover:shadow-lg transition-shadow`}>
                <CardContent className="pt-6">
                  {plan.popular && (
                    <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                      Популярный
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 italic">
            Команда сильнее одного e-com менеджера.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Часто спрашивают
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "А где гарантии?",
                answer: "Пилот + KPI. Оплата по результату после достижения целевых показателей."
              },
              {
                question: "Нам дорого",
                answer: "Мы заменяем целый отдел. Стоимость одного сотрудника часто превышает наши тарифы, а мы даём команду экспертов."
              },
              {
                question: "У нас узкая ниша",
                answer: "Есть опыт работы в 14 отраслях. Системный подход работает в любой нише."
              }
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="audit" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Получите бесплатный аудит
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            30 минут. Анализ точек роста. Прогноз прибыли.
          </p>
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 999-99-99"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Получить аудит
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Callaba</div>
              <p className="text-gray-400">
                Ваш внешний отдел по повышению продаж на маркетплейсах
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Меню</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection("cases")} className="hover:text-white transition-colors">Кейсы</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="hover:text-white transition-colors">Тарифы</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection("audit")} className="hover:text-white transition-colors">Аудит</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Телефон: +7 (987) 455-64-71</li>
                <li>WhatsApp: +7 (987) 455-64-71</li>
                <li>Email: info@callaba.agency</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2024 Callaba. Все права защищены.</p>
            <button className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
