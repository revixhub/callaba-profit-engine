
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
            <div className="text-xl font-medium text-white">scale</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection("hero")} className="text-gray-300 hover:text-white transition-colors text-sm">Главная</button>
              <button onClick={() => scrollToSection("cases")} className="text-gray-300 hover:text-white transition-colors text-sm">Кейсы</button>
              <button onClick={() => scrollToSection("pricing")} className="text-gray-300 hover:text-white transition-colors text-sm">Тарифы</button>
              <button onClick={() => scrollToSection("faq")} className="text-gray-300 hover:text-white transition-colors text-sm">FAQ</button>
              <button onClick={() => scrollToSection("audit")} className="text-gray-300 hover:text-white transition-colors text-sm">Аудит</button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button onClick={() => scrollToSection("audit")} className="hidden lg:inline-flex bg-white hover:bg-gray-100 text-black px-4 py-2 text-sm font-medium rounded-md">
                Book a Demo →
              </Button>
              <button className="hidden lg:inline-flex text-gray-300 hover:text-white text-sm">Log In</button>
              
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
                <button onClick={() => scrollToSection("hero")} className="text-gray-300 hover:text-white transition-colors text-left">Главная</button>
                <button onClick={() => scrollToSection("cases")} className="text-gray-300 hover:text-white transition-colors text-left">Кейсы</button>
                <button onClick={() => scrollToSection("pricing")} className="text-gray-300 hover:text-white transition-colors text-left">Тарифы</button>
                <button onClick={() => scrollToSection("faq")} className="text-gray-300 hover:text-white transition-colors text-left">FAQ</button>
                <button onClick={() => scrollToSection("audit")} className="text-gray-300 hover:text-white transition-colors text-left">Аудит</button>
                <Button onClick={() => scrollToSection("audit")} className="bg-white hover:bg-gray-100 text-black w-full mt-4 rounded-md">
                  Book a Demo →
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Увеличиваем прибыль<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                на маркетплейсах
              </span><br />
              в 3-10 раз
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Мы не агентство. Мы — ваш внешний отдел по повышению продаж на WB и Ozon. 
              Системный подход, автоматизация и ответственность за результат.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button onClick={() => scrollToSection("audit")} className="bg-white hover:bg-gray-100 text-black px-8 py-3 text-base font-medium rounded-md">
                Book a Demo →
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-base font-medium rounded-md">
                Build AI →
              </Button>
            </div>

            {/* Logo strip */}
            <div className="border-t border-gray-800 pt-12">
              <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider">Scale works with Generative AI Companies, U.S. Government Agencies & Enterprises</p>
              <div className="flex justify-center items-center space-x-12 opacity-60">
                {/* Placeholder for client logos */}
                <div className="w-16 h-8 bg-gray-700 rounded"></div>
                <div className="w-16 h-8 bg-gray-700 rounded"></div>
                <div className="w-16 h-8 bg-gray-700 rounded"></div>
                <div className="w-16 h-8 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Frontier AI Research</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative to improve model capabilities through challenging private evaluations and novel research.
            </p>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md border border-gray-700">
              Learn More →
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Leaderboards",
                title: "SEAL Leaderboards: Expert-Driven Private Evaluations",
                icon: "🎯"
              },
              {
                category: "Research", 
                title: "LLMs Easily Jailbroken as Browser Agents",
                icon: "❌"
              },
              {
                category: "Research",
                title: "Multi-Turn Human Jailbreaks on LLM Defenses", 
                icon: "🔒"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-8">
                  <div className="text-3xl mb-6">{item.icon}</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider mb-3">{item.category}</div>
                  <h3 className="text-white text-xl font-medium leading-tight">{item.title}</h3>
                  <div className="mt-6">
                    <button className="text-gray-400 hover:text-white">
                      <ArrowUp className="h-4 w-4 rotate-45" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI for Enterprise Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-6">AI FOR THE ENTERPRISE</div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">Generative AI Architecture</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Whether you're building your own models or applying foundation models to your business, data remains the biggest bottleneck to AI.
            </p>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md border border-gray-700">
              Book a Demo →
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Вам это знакомо?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Проблемы, с которыми сталкиваются владельцы бизнеса на маркетплейсах</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, text: "Реклама сжирает всю маржу", color: "text-red-400" },
              { icon: TrendingUp, text: "Возвраты растут, а прибыль — нет", color: "text-orange-400" },
              { icon: BarChart3, text: "80% ассортимента — мертвый груз", color: "text-yellow-400" },
              { icon: Shield, text: "Нет контроля за процессами", color: "text-blue-400" },
              { icon: Clock, text: "Ручная аналитика мешает росту", color: "text-purple-400" }
            ].map((item, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <item.icon className={`h-8 w-8 ${item.color} mx-auto`} />
                  </div>
                  <p className="text-white font-medium text-lg leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 max-w-5xl mx-auto leading-tight">
              Мы не агентство.<br />
              Мы — ваш внешний отдел по повышению продаж на маркетплейсах
            </h2>
            <p className="text-xl text-gray-400 mb-8">
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
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <item.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-32 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Рост прибыли через системный подход
            </h2>
            <p className="text-xl text-gray-400">Реальные результаты наших клиентов</p>
          </div>
          
          {/* Graphics Slots */}
          <div className="mb-16">
            <div className="bg-gray-900 rounded-xl p-12 border border-gray-800">
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-800 rounded-lg h-64 flex items-center justify-center border border-gray-700">
                    <div className="text-center text-gray-500">
                      <Target className="h-12 w-12 mx-auto mb-3 text-gray-600" />
                      <p className="text-sm font-medium text-gray-400">Скриншот кейса {i}</p>
                      <p className="text-xs text-gray-500 mt-1">До/После</p>
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
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {item.growth}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-8">{item.category}</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Было:</span>
                      <span className="text-gray-300 font-semibold">{item.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 font-medium">Стало:</span>
                      <span className="text-green-400 font-bold text-xl">{item.after}</span>
                    </div>
                    <Separator className="my-4 bg-gray-700" />
                    <p className="text-blue-400 font-medium text-center bg-blue-500/10 py-3 px-4 rounded-lg border border-blue-500/20">{item.metric}</p>
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
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Под ваш уровень зрелости
            </h2>
            <p className="text-xl text-gray-400">Выберите тариф, который подходит вашему бизнесу</p>
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
              <Card key={index} className={`relative ${plan.recommended ? 'bg-gray-800 border-blue-500' : 'bg-gray-900 border-gray-800'} hover:bg-gray-800 transition-colors`}>
                <CardContent className="p-10">
                  {plan.recommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                        Популярный
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-medium text-white mb-2">{plan.name}</h3>
                    <p className="text-4xl font-light text-white mb-1">{plan.price}</p>
                    <p className="text-gray-400">в месяц</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full py-3 rounded-md ${plan.recommended ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'} font-medium`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-16 text-lg font-light italic">
            Команда сильнее одного e-com менеджера.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Часто спрашивают
            </h2>
            <p className="text-xl text-gray-400">Ответы на самые популярные вопросы</p>
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
              <Card key={index} className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium text-white mb-4">{item.question}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg font-light">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Lead Form */}
      <section id="audit" className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Получите бесплатный аудит
          </h2>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed">
            30 минут. Анализ точек роста. Прогноз прибыли.<br />
            Покажем конкретные шаги для увеличения продаж.
          </p>
          
          {/* Graphics Slot */}
          <div className="mb-16">
            <div className="bg-gray-900 rounded-xl p-12 border border-gray-800">
              <div className="text-center text-gray-500">
                <TrendingUp className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                <p className="text-sm font-medium text-gray-400">Место для примера аудита</p>
                <p className="text-xs text-gray-500 mt-1">Скриншот отчёта, диаграммы</p>
              </div>
            </div>
          </div>
          
          <Card className="max-w-md mx-auto bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-left">
                  <Label htmlFor="name" className="text-gray-300 font-medium">Имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    required
                    className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="text-left">
                  <Label htmlFor="phone" className="text-gray-300 font-medium">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 999-99-99"
                    required
                    className="mt-2 bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <Button type="submit" className="w-full bg-white hover:bg-gray-100 text-black py-3 font-medium rounded-md">
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
      <footer className="bg-black border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-1">
              <div className="text-xl font-medium text-white mb-6">Callaba</div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Ваш внешний отдел по повышению продаж на маркетплейсах
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-4 uppercase tracking-wider">PRODUCTS</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li><button onClick={() => scrollToSection("hero")} className="hover:text-gray-300 transition-colors">Scale Data Engine</button></li>
                <li><button onClick={() => scrollToSection("cases")} className="hover:text-gray-300 transition-colors">Scale GenAI Platform</button></li>
                <li><button onClick={() => scrollToSection("pricing")} className="hover:text-gray-300 transition-colors">Scale Donovan</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-4 uppercase tracking-wider">COMPANY</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li><button className="hover:text-gray-300 transition-colors">About</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Careers</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Security</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Terms</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Privacy</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-4 uppercase tracking-wider">RESOURCES</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li><button className="hover:text-gray-300 transition-colors">Blog</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Contact Us</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Documentation</button></li>
                <li><button className="hover:text-gray-300 transition-colors">Community</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-4 uppercase tracking-wider">FOLLOW US</h3>
              <div className="text-gray-500 text-sm">
                <p>Телефон: +7 (987) 455-64-71</p>
                <p>Email: info@callaba.agency</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-12 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">Copyright © 2025 Scale AI, Inc. All rights reserved.</p>
            <p className="text-gray-600 text-sm mt-4 md:mt-0">
              Terms of Use & Privacy Policy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
