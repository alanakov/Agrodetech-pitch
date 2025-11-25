import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Check, Brain, AlertTriangle, BarChart3, FileText, Upload, Cpu, Download, Zap, Shield, TrendingUp, Users } from 'lucide-react';
// imagem do hero removida — import desnecessário removido

interface LandingPageProps {
  onNavigateToLogin: () => void;
}

export function LandingPage({ onNavigateToLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#00C853] rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl text-gray-900">AgroDetect</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#funcionalidades" className="text-gray-600 hover:text-[#00C853] transition-colors">Funcionalidades</a>
            <a href="#como-funciona" className="text-gray-600 hover:text-[#00C853] transition-colors">Como Funciona</a>
            <a href="#precos" className="text-gray-600 hover:text-[#00C853] transition-colors">Preços</a>
            <Button variant="outline" onClick={onNavigateToLogin}>Entrar</Button>
            <Button onClick={onNavigateToLogin} className="bg-[#00C853] hover:bg-[#047857]">
              Começar Agora
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - texto à esquerda, estatísticas empilhadas à direita */}
      <section className="pt-32 md:pt-36 pb-16 px-6 bg-gradient-to-b from-[#E6F7F1] to-white">
        <div className="max-w-7xl mx-auto md:flex md:items-start md:gap-8 md:justify-between">
          {/* Coluna da esquerda: título, descrição e CTAs */}
          <div className="w-full flex flex-col justify-between md:w-3/4 text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-gray-900">
              Contagem Automática de Nematoides com Inteligência Artificial
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl">
              Transforme imagens microscópicas em relatórios agronômicos precisos em minutos. Identifique espécies, monitore infestações e tome decisões de manejo baseadas em dados.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button onClick={onNavigateToLogin} size="lg" className="bg-[#00C853] hover:bg-[#047857]">
                Ver Planos e Preços
              </Button>
              <Button onClick={onNavigateToLogin} size="lg" variant="outline">
                Agendar Demonstração
              </Button>
            </div>
          </div>

          {/* Coluna da direita: estatísticas empilhadas verticalmente */}
          <div className="w-full md:w-1/4 mt-8 md:mt-0 md:pr-8 lg:pr-12">
            <div className="h-full flex flex-col justify-start items-end gap-8 w-full">
              <div className="w-full md:max-w-xs md:text-right text-right">
                <div className="text-3xl md:text-4xl lg:text-5xl text-[#00C853] font-semibold">90%</div>
                <div className="text-gray-600">Redução no tempo</div>
              </div>

              <div className="w-full md:max-w-xs md:text-right text-right">
                <div className="text-3xl md:text-4xl lg:text-5xl text-[#00C853] font-semibold">99%</div>
                <div className="text-gray-600">Precisão da IA</div>
              </div>

              <div className="w-full md:max-w-xs md:text-right text-right">
                <div className="text-3xl md:text-4xl lg:text-5xl text-[#00C853] font-semibold">10-30min</div>
                <div className="text-gray-600">Para poucos minutos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Funcionalidades que Transformam seu Laboratório</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia de ponta para automatizar análises, eliminar erros humanos e aumentar a produtividade
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-[#00C853] transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-[#E6F7F1] rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-[#00C853]" />
                </div>
                <CardTitle>Identificação Automática</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  IA que conta e classifica espécies (Meloidogyne, Pratylenchus) eliminando erro humano
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#00C853] transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-[#E6F7F1] rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-[#00C853]" />
                </div>
                <CardTitle>Alertas de Risco</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sistema inteligente que identifica níveis de infestação (Alto, Médio, Baixo) automaticamente
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#00C853] transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-[#E6F7F1] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#00C853]" />
                </div>
                <CardTitle>Inteligência de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Gráficos de evolução temporal e mapas de calor de risco para tomada de decisão
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#00C853] transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-[#E6F7F1] rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#00C853]" />
                </div>
                <CardTitle>Relatórios Profissionais</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  PDFs customizáveis com logo do laboratório e recomendações de manejo agronômico
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="bg-[#E6F7F1] border-0">
              <CardHeader>
                <Zap className="w-8 h-8 text-[#00C853] mb-2" />
                <CardTitle>10x Mais Rápido</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reduza análises de 30 minutos para 5 minutos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#E6F7F1] border-0">
              <CardHeader>
                <Shield className="w-8 h-8 text-[#00C853] mb-2" />
                <CardTitle>Confiabilidade Garantida</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Elimine erros de contagem manual e variações entre analistas
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-[#E6F7F1] border-0">
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-[#00C853] mb-2" />
                <CardTitle>Escale seu Negócio</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Processe mais amostras sem aumentar equipe
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 px-6 bg-[#E6F7F1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Como Funciona</h2>
            <p className="text-xl text-gray-600">
              Processo simples e automatizado em 3 passos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/4 left-1/3 right-1/3 h-1 bg-[#00C853] opacity-20"></div>
            
            <Card className="relative bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#00C853] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  1
                </div>
                <Upload className="w-12 h-12 text-[#00C853] mx-auto mb-4" />
                <CardTitle>Upload da Imagem</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Faça upload da imagem microscópica da amostra de solo diretamente na plataforma
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="relative bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#00C853] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  2
                </div>
                <Cpu className="w-12 h-12 text-[#00C853] mx-auto mb-4" />
                <CardTitle>Análise da IA</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  A Inteligência Artificial processa, identifica e conta automaticamente os nematoides
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="relative bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#00C853] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  3
                </div>
                <Download className="w-12 h-12 text-[#00C853] mx-auto mb-4" />
                <CardTitle>Relatório de Manejo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Receba relatório completo com gráficos, análises e recomendações agronômicas
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">Planos e Preços</h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para seu laboratório
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Básico */}
            <Card className="border-2 flex flex-col">
              <CardHeader>
                <CardTitle>Básico</CardTitle>
                <CardDescription>Para laboratórios iniciantes</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl text-gray-900">R$ 199</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>250 créditos de análise/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Identificação automática de espécies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Relatórios PDF básicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Dashboard web</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Suporte por email</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button onClick={onNavigateToLogin} className="w-full bg-white text-[#00C853] border-2 border-[#00C853] hover:bg-[#E6F7F1]">
                  Começar Agora
                </Button>
              </CardFooter>
            </Card>

            {/* Profissional - Destaque */}
            <Card className="border-4 border-[#00C853] shadow-xl relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-[#00C853] text-white px-4 py-1">
                  Mais Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>Profissional</CardTitle>
                <CardDescription>Para laboratórios em crescimento</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl text-gray-900">R$ 499</span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>750 créditos de análise/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Tudo do plano Básico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Acesso à API completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Dashboard avançado com gráficos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Armazenamento ilimitado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Relatórios customizáveis com logo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Suporte prioritário</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button onClick={onNavigateToLogin} className="w-full bg-[#00C853] hover:bg-[#047857]">
                  Começar Agora
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise */}
            <Card className="border-2 flex flex-col">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription></CardDescription>
                <div className="mt-4">
                  <span className="text-4xl text-gray-900">Personalizado</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00C853] mt-0.5 flex-shrink-0" />
                    <span>Personalizado de acordo com a preferência do cliente.</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button onClick={onNavigateToLogin} variant="outline" className="w-full">
                  Falar com Vendas
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="py-20 px-6 bg-[#E6F7F1]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Confiado por Laboratórios em Todo Brasil</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#00C853] rounded-full flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl text-[#00C853]">500+</div>
                    <div className="text-gray-600">Laboratórios</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Laboratórios parceiros utilizam AgroDetect diariamente
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#00C853] rounded-full flex items-center justify-center text-white">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl text-[#00C853]">1M+</div>
                    <div className="text-gray-600">Análises</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Amostras processadas com sucesso
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#00C853] rounded-full flex items-center justify-center text-white">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl text-[#00C853]">40%</div>
                    <div className="text-gray-600">Aumento</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Média de aumento na capacidade produtiva
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-[#00C853] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">
            Pronto para Revolucionar suas Análises?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a centenas de laboratórios que já economizam tempo e aumentam a precisão com AgroDetect
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={onNavigateToLogin} size="lg" className="bg-[#00C853] text-white border-transparent">
              Começar Agora
            </Button>
            <Button onClick={onNavigateToLogin} size="lg" className="bg-[#00C853] text-white border-transparent">
              Agendar Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#00C853] rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl text-white">AgroDetect</span>
              </div>
              <p className="text-sm">
                Contagem de Nematoides com Precisão de IA
              </p>
            </div>
            <div>
              <div className="text-white mb-4">Produto</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#funcionalidades" className="hover:text-[#00C853] transition-colors">Funcionalidades</a></li>
                <li><a href="#precos" className="hover:text-[#00C853] transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-[#00C853] transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-4">Recursos</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00C853] transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-[#00C853] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#00C853] transition-colors">Suporte</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white mb-4">Empresa</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#00C853] transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-[#00C853] transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-[#00C853] transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 AgroDetect. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}