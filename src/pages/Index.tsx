
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, CheckCircle, TrendingUp, BarChart3, Users, Target, DollarSign, Shield, Clock, Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Here you would typically send the data to your backend
    // For now, we'll simulate sending to info@callaba.agency
    try {
      // This would be replaced with actual email sending logic
      const response = await fetch('/api/send-audit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          email: 'info@callaba.agency'
        }),
      });
      
      if (response.ok) {
        alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: "", phone: "" });
      }
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Произошла ошибка. Попробуйте позже или свяжитесь с нами напрямую.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900 tracking-tight">Callaba</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <button onClick={() => scrollToSection("hero")} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">Главная</button>
              <button onClick={() => scrollToSection("cases")} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">Кейсы</button>
              <button onClick={() => scrollToSection("pricing")} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">Тарифы</button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">FAQ</button>
              <button onClick={() => scrollToSection("audit")} className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium">Аудит</button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button onClick={() => scrollToSection("audit")} className="hidden lg:inline-flex bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 text-sm font-medium">
                Получить аудит
              </Button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection("hero")} className="text-gray-700 hover:text-gray-900 transition-colors text-left">Главная</button>
                <button onClick={() => scrollToSection("cases")} className="text-gray-700 hover:text-gray-900 transition-colors text-left">Кейсы</button>
                <button onClick={() => scrollToSection("pricing")} className="text-gray-700 hover:text-gray-900 transition-colors text-left">Тарифы</button>
                <button onClick={() => scrollToSection("faq")} className="text-gray-700 hover:text-gray-900 transition-colors text-left">FAQ</button>
                <button onClick={() => scrollToSection("audit")} className="text-gray-700 hover:text-gray-900 transition-colors text-left">Аудит</button>
                <Button onClick={() => scrollToSection("audit")} className="bg-gray-900 hover:bg-gray-800 text-white w-full mt-4">
                  Получить аудит
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Увеличиваем прибыль<br />на маркетплейсах<br />
                <span className="text-indigo-600">в 3-10 раз</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Мы не агентство. Мы — ваш внешний отдел по повышению продаж на WB и Ozon. 
                Системный подход, автоматизация и ответственность за результат.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection("audit")} size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium">
                  Получить аудит бесплатно
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-medium border-gray-300 text-gray-700 hover:bg-gray-50">
                  Смотреть кейсы
                </Button>
              </div>
            </div>
            
            {/* Slot for Hero Graphics */}
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-sm font-medium">Место для графики роста продаж</p>
                  <p className="text-xs text-gray-400 mt-1">Диаграммы, скриншоты до/после</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Вам это знакомо?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Проблемы, с которыми сталкиваются владельцы бизнеса на маркетплейсах</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, text: "Реклама сжирает всю маржу", color: "text-red-500" },
              { icon: TrendingUp, text: "Возвраты растут, а прибыль — нет", color: "text-orange-500" },
              { icon: BarChart3, text: "80% ассортимента — мертвый груз", color: "text-yellow-500" },
              { icon: Shield, text: "Нет контроля за процессами", color: "text-blue-500" },
              { icon: Clock, text: "Ручная аналитика мешает росту", color: "text-purple-500" }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <item.icon className={`h-12 w-12 ${item.color} mx-auto`} />
                  </div>
                  <p className="text-gray-900 font-medium text-lg leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
              Мы не агентство.<br />
              Мы — ваш внешний отдел по повышению продаж на маркетплейсах
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              (WB, Ozon)
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Стратегия 6–12 месяцев", description: "Долгосрочное планирование роста с четкими KPI" },
              { icon: Zap, title: "Автоматизация до 80% рутины", description: "Освобождаем время для стратегических решений" },
              { icon: BarChart3, title: "BI-аналитика в реальном времени", description: "Принимайте решения на основе актуальных данных" },
              { icon: Users, title: "Вся команда — в одной связке", description: "Координированная работа экспертов разного профиля" },
              { icon: CheckCircle, title: "Ответственность — за результат", description: "Гарантируем достижение целевых показателей" }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <item.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Рост прибыли через системный подход
            </h2>
            <p className="text-xl text-gray-600">Реальные результаты наших клиентов</p>
          </div>
          
          {/* Slot for Screenshots */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Target className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                      <p className="text-sm font-medium">Скриншот кейса {i}</p>
                      <p className="text-xs text-gray-400">До/После</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "БАДы (Ozon)",
                before: "200К ₽",
                after: "6М ₽",
                metric: "ДРР: 25% → 3%",
                growth: "x30"
              },
              {
                category: "Настольные игры (WB)",
                before: "200К ₽",
                after: "6М ₽",
                metric: "Рост органики в 15 раз",
                growth: "x30"
              },
              {
                category: "Продукты питания (WB)",
                before: "500К ₽",
                after: "5М ₽",
                metric: "Оптимизация SKU -70%",
                growth: "x10"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                      {item.growth}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{item.category}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Было:</span>
                      <span className="text-gray-500 font-semibold">{item.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Стало:</span>
                      <span className="text-green-600 font-bold text-xl">{item.after}</span>
                    </div>
                    <Separator className="my-4" />
                    <p className="text-indigo-600 font-medium text-center bg-indigo-50 py-2 px-4 rounded-lg">{item.metric}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Под ваш уровень зрелости
            </h2>
            <p className="text-xl text-gray-600">Выберите тариф, который подходит вашему бизнесу</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "БАЗА",
                price: "от 50 000₽",
                features: ["Аналитика и отчёты", "Базовая оптимизация", "Консультации 2 раза в неделю", "Настройка рекламы"],
                recommended: false
              },
              {
                name: "ПРОРЫВ",
                price: "от 100 000₽",
                features: ["Комплексный маркетинг", "IT решения и автоматизация", "Финансовое планирование", "Команда из 4 экспертов", "Еженедельные созвоны"],
                recommended: true
              },
              {
                name: "МАСШТАБ",
                price: "от 200 000₽",
                features: ["BI аналитика в реальном времени", "6 специалистов в команде", "Полное сопровождение", "Персональный менеджер", "Ежедневная связь"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`p-8 relative ${plan.recommended ? 'ring-2 ring-indigo-600 scale-105' : ''} hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white`}>
                <CardContent className="pt-6">
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                        Популярный
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-1">{plan.price}</p>
                    <p className="text-gray-600">в месяц</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full py-3 ${plan.recommended ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-900 hover:bg-gray-800'} text-white font-medium`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-12 text-lg italic">
            Команда сильнее одного e-com менеджера.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Часто спрашивают
            </h2>
            <p className="text-xl text-gray-600">Ответы на самые популярные вопросы</p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "А где гарантии?",
                answer: "Пилот + KPI. Оплата по результату после достижения целевых показателей. Первый месяц работаем на результат, и только после достижения согласованных метрик получаем оплату."
              },
              {
                question: "Нам дорого",
                answer: "Мы заменяем целый отдел. Стоимость одного сотрудника часто превышает наши тарифы, а мы даём команду экспертов с опытом и результатами. Экономия на зарплатах, налогах и обучении персонала."
              },
              {
                question: "У нас узкая ниша",
                answer: "Есть опыт работы в 14 отраслях. Системный подход работает в любой нише — от товаров для дома до высокотехнологичной продукции. Принципы роста продаж универсальны."
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="audit" className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Получите бесплатный аудит
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            30 минут. Анализ точек роста. Прогноз прибыли.<br />
            Покажем конкретные шаги для увеличения продаж.
          </p>
          
          {/* Slot for Graphics */}
          <div className="mb-12">
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="text-center text-gray-400">
                <TrendingUp className="h-16 w-16 mx-auto mb-4" />
                <p className="text-sm font-medium">Место для примера аудита</p>
                <p className="text-xs text-gray-500 mt-1">Скриншот отчёта, диаграммы</p>
              </div>
            </div>
          </div>
          
          <Card className="max-w-md mx-auto bg-white">
            <CardContent className="pt-8 pb-8 px-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left">
                  <Label htmlFor="name" className="text-gray-700 font-medium">Имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    required
                    className="mt-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="text-left">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 999-99-99"
                    required
                    className="mt-2 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-medium">
                  Получить аудит
                </Button>
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Callaba</div>
              <p className="text-gray-600 leading-relaxed">
                Ваш внешний отдел по повышению продаж на маркетплейсах
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Навигация</h3>
              <ul className="space-y-3 text-gray-600">
                <li><button onClick={() => scrollToSection("hero")} className="hover:text-gray-900 transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection("cases")} className="hover:text-gray-900 transition-colors">Кейсы</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="hover:text-gray-900 transition-colors">Тарифы</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-gray-900 transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection("audit")} className="hover:text-gray-900 transition-colors">Аудит</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Контакты</h3>
              <ul className="space-y-3 text-gray-600">
                <li>Телефон: +7 (987) 455-64-71</li>
                <li>WhatsApp: +7 (987) 455-64-71</li>
                <li>Email: info@callaba.agency</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Документы</h3>
              <ul className="space-y-3 text-gray-600">
                <li><button className="hover:text-gray-900 transition-colors">Политика конфиденциальности</button></li>
                <li><button className="hover:text-gray-900 transition-colors">Пользовательское соглашение</button></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-200" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2024 Callaba. Все права защищены.</p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              Сделано для роста вашего бизнеса
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
