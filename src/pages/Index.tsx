
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
    
    try {
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
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-medium text-white">Callaba</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection("hero")} className="text-gray-300 hover:text-white transition-colors text-base">Главная</button>
              <button onClick={() => scrollToSection("cases")} className="text-gray-300 hover:text-white transition-colors text-base">Кейсы</button>
              <button onClick={() => scrollToSection("pricing")} className="text-gray-300 hover:text-white transition-colors text-base">Тарифы</button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-300 hover:text-white transition-colors text-base">FAQ</button>
              <button onClick={() => scrollToSection("audit")} className="text-gray-300 hover:text-white transition-colors text-base">Аудит</button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button onClick={() => scrollToSection("audit")} className="hidden lg:inline-flex bg-white hover:bg-gray-100 text-black px-6 py-3 text-base font-medium rounded-lg">
                Получить аудит
              </Button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-800 py-4">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection("hero")} className="text-gray-300 hover:text-white transition-colors text-left text-base">Главная</button>
                <button onClick={() => scrollToSection("cases")} className="text-gray-300 hover:text-white transition-colors text-left text-base">Кейсы</button>
                <button onClick={() => scrollToSection("pricing")} className="text-gray-300 hover:text-white transition-colors text-left text-base">Тарифы</button>
                <button onClick={() => scrollToSection("faq")} className="text-gray-300 hover:text-white transition-colors text-left text-base">FAQ</button>
                <button onClick={() => scrollToSection("audit")} className="text-gray-300 hover:text-white transition-colors text-left text-base">Аудит</button>
                <Button onClick={() => scrollToSection("audit")} className="bg-white hover:bg-gray-100 text-black w-full mt-4 rounded-lg py-3">
                  Получить аудит
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center bg-black relative overflow-hidden">
        {/* Gradient orbs background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
              Увеличиваем прибыль<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                на маркетплейсах
              </span><br />
              в 3-10 раз
            </h1>
            <p className="text-2xl text-gray-300 mb-16 leading-relaxed max-w-5xl mx-auto">
              Мы не агентство. Мы — ваш внешний отдел по повышению продаж на WB и Ozon. 
              Системный подход, автоматизация и ответственность за результат.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Button onClick={() => scrollToSection("audit")} className="bg-white hover:bg-gray-100 text-black px-10 py-4 text-lg font-medium rounded-lg">
                Получить аудит бесплатно
              </Button>
            </div>

            {/* Graphics slot */}
            <div className="border-t border-gray-800 pt-16">
              <div className="bg-gray-900 rounded-2xl p-16 border border-gray-800">
                <div className="text-center text-gray-500">
                  <TrendingUp className="h-20 w-20 mx-auto mb-6 text-gray-600" />
                  <p className="text-lg font-medium text-gray-400">Место для анимации/видео успеха</p>
                  <p className="text-base text-gray-500 mt-2">График роста, карточка до/после</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-6">Вам это знакомо?</h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto">Проблемы, с которыми сталкиваются владельцы бизнеса на маркетплейсах</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, text: "Реклама сжирает всю маржу", color: "text-red-400" },
              { icon: TrendingUp, text: "Возвраты растут, а прибыль — нет", color: "text-orange-400" },
              { icon: BarChart3, text: "80% ассортимента — мертвый груз", color: "text-yellow-400" },
              { icon: Shield, text: "Нет контроля за процессами", color: "text-blue-400" },
              { icon: Clock, text: "Ручная аналитика мешает росту", color: "text-purple-400" }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-10 text-center">
                  <div className="mb-8">
                    <item.icon className={`h-12 w-12 ${item.color} mx-auto`} />
                  </div>
                  <p className="text-white font-medium text-xl leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-10 max-w-6xl mx-auto leading-tight">
              Мы не агентство.<br />
              Мы — ваш внешний отдел по повышению продаж на маркетплейсах
            </h2>
            <p className="text-2xl text-gray-400 mb-12">
              (WB, Ozon)
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Target, title: "Стратегия 6–12 месяцев", description: "Долгосрочное планирование роста с четкими KPI" },
              { icon: Zap, title: "Автоматизация до 80% рутины", description: "Освобождаем время для стратегических решений" },
              { icon: BarChart3, title: "BI-аналитика в реальном времени", description: "Принимайте решения на основе актуальных данных" },
              { icon: Users, title: "Вся команда — в одной связке", description: "Координированная работа экспертов разного профиля" },
              { icon: CheckCircle, title: "Ответственность — за результат", description: "Гарантируем достижение целевых показателей" }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <item.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-6 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
              Рост прибыли через системный подход
            </h2>
            <p className="text-2xl text-gray-400">Реальные результаты наших клиентов</p>
          </div>
          
          {/* Graphics Slots */}
          <div className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-16 border border-gray-800">
              <div className="grid md:grid-cols-3 gap-10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-800 rounded-xl h-80 flex items-center justify-center border border-gray-700">
                    <div className="text-center text-gray-500">
                      <Target className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                      <p className="text-lg font-medium text-gray-400">Фото карточки до/после</p>
                      <p className="text-base text-gray-500 mt-2">Кейс {i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
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
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-10">
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 text-lg font-medium rounded-full">
                      {item.growth}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-10">{item.category}</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium text-lg">Было:</span>
                      <span className="text-gray-300 font-semibold text-lg">{item.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium text-lg">Стало:</span>
                      <span className="text-green-400 font-bold text-2xl">{item.after}</span>
                    </div>
                    <Separator className="my-6 bg-gray-700" />
                    <p className="text-blue-400 font-medium text-center bg-blue-500/10 py-4 px-6 rounded-xl border border-blue-500/20 text-lg">{item.metric}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
              Под ваш уровень зрелости
            </h2>
            <p className="text-2xl text-gray-400">Выберите тариф, который подходит вашему бизнесу</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
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
              <Card key={index} className={`relative ${plan.recommended ? 'bg-gray-800 border-blue-500' : 'bg-gray-900 border-gray-800'} hover:bg-gray-800 transition-colors`}>
                <CardContent className="p-12">
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white text-base font-medium px-6 py-2 rounded-full">
                        Популярный
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-medium text-white mb-4">{plan.name}</h3>
                    <p className="text-5xl font-light text-white mb-2">{plan.price}</p>
                    <p className="text-gray-400 text-lg">в месяц</p>
                  </div>
                  <ul className="space-y-5 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full py-4 rounded-lg text-lg ${plan.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'} font-medium`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-20 text-2xl font-light italic">
            Команда сильнее одного e-com менеджера.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
              Часто спрашивают
            </h2>
            <p className="text-2xl text-gray-400">Ответы на самые популярные вопросы</p>
          </div>
          <div className="space-y-8">
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
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-10">
                  <h3 className="text-2xl font-medium text-white mb-6">{item.question}</h3>
                  <p className="text-gray-300 leading-relaxed text-xl font-light">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="audit" className="py-32 bg-black">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-10">
            Получите бесплатный аудит
          </h2>
          <p className="text-2xl text-gray-300 mb-20 leading-relaxed">
            30 минут. Анализ точек роста. Прогноз прибыли.<br />
            Покажем конкретные шаги для увеличения продаж.
          </p>
          
          {/* Graphics Slot */}
          <div className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-16 border border-gray-800">
              <div className="text-center text-gray-500">
                <TrendingUp className="h-20 w-20 mx-auto mb-6 text-gray-600" />
                <p className="text-lg font-medium text-gray-400">Место для примера аудита</p>
                <p className="text-base text-gray-500 mt-2">Скриншот отчёта, диаграммы</p>
              </div>
            </div>
          </div>
          
          <Card className="max-w-lg mx-auto bg-gray-900 border-gray-800">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-left">
                  <Label htmlFor="name" className="text-gray-300 font-medium text-lg">Имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    required
                    className="mt-3 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 py-4 text-lg"
                  />
                </div>
                <div className="text-left">
                  <Label htmlFor="phone" className="text-gray-300 font-medium text-lg">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 999-99-99"
                    required
                    className="mt-3 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 py-4 text-lg"
                  />
                </div>
                <Button type="submit" className="w-full bg-white hover:bg-gray-100 text-black py-4 font-medium rounded-lg text-lg">
                  Получить аудит
                </Button>
                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-1">
              <div className="text-2xl font-medium text-white mb-8">Callaba</div>
              <p className="text-gray-400 leading-relaxed text-base">
                Ваш внешний отдел по повышению продаж на маркетплейсах
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-gray-300 mb-6 uppercase tracking-wider">МЕНЮ</h3>
              <ul className="space-y-4 text-gray-500 text-base">
                <li><button onClick={() => scrollToSection("hero")} className="hover:text-gray-300 transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection("cases")} className="hover:text-gray-300 transition-colors">Кейсы</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="hover:text-gray-300 transition-colors">Тарифы</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-gray-300 transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection("audit")} className="hover:text-gray-300 transition-colors">Аудит</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-gray-300 mb-6 uppercase tracking-wider">КОНТАКТЫ</h3>
              <div className="text-gray-500 text-base space-y-3">
                <p>Телефон: +7 (987) 455-64-71</p>
                <p>Email: info@callaba.agency</p>
                <p>WhatsApp: +7 (987) 455-64-71</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-gray-300 mb-6 uppercase tracking-wider">ДОКУМЕНТЫ</h3>
              <ul className="space-y-4 text-gray-500 text-base">
                <li><button className="hover:text-gray-300 transition-colors">Политика конфиденциальности</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Пользовательское соглашение</button></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-16 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-base">Copyright © 2025 Callaba. Все права защищены.</p>
            <p className="text-gray-600 text-base mt-4 md:mt-0">
              ИП Иванов И.И. ИНН 123456789012
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
