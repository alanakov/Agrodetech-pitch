import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Brain, ArrowLeft } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: () => void;
  onBackToHome: () => void;
}

export function Login({ onLoginSuccess, onBackToHome }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate signup
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F7F1] to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Button 
          variant="ghost" 
          onClick={onBackToHome}
          className="mb-6 hover:bg-white/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para Home
        </Button>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-[#00C853] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl">AgroDetect</CardTitle>
            <CardDescription>
              Contagem de Nematoides com Precisão de IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="signup">Cadastrar</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input 
                      id="login-email" 
                      type="email" 
                      placeholder="seu@laboratorio.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Senha</Label>
                    <Input 
                      id="login-password" 
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-600">Lembrar-me</span>
                    </label>
                    <a href="#" className="text-[#00C853] hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#00C853] hover:bg-[#047857]"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Entrando...' : 'Entrar'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Nome Completo</Label>
                    <Input 
                      id="signup-name" 
                      type="text" 
                      placeholder="João Silva"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-lab">Nome do Laboratório</Label>
                    <Input 
                      id="signup-lab" 
                      type="text" 
                      placeholder="Laboratório AgriTech"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email Profissional</Label>
                    <Input 
                      id="signup-email" 
                      type="email" 
                      placeholder="contato@laboratorio.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Senha</Label>
                    <Input 
                      id="signup-password" 
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm">Confirmar Senha</Label>
                    <Input 
                      id="signup-confirm" 
                      type="password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="rounded mt-1" required />
                      <span>
                        Aceito os <a href="#" className="text-[#00C853] hover:underline">Termos de Uso</a> e <a href="#" className="text-[#00C853] hover:underline">Política de Privacidade</a>
                      </span>
                    </label>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#00C853] hover:bg-[#047857]"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Criando conta...' : 'Criar Conta'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continue com</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <Button variant="outline" type="button">
                Google
              </Button>
              <Button variant="outline" type="button">
                Microsoft
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}