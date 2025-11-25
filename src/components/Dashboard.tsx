import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Brain, 
  Upload, 
  Clock, 
  FileText, 
  Settings, 
  CreditCard,
  LogOut,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Calendar
} from 'lucide-react';

interface DashboardProps {
  onNavigateToResults: (analysisId: string) => void;
  onLogout: () => void;
}

// Mock data
const recentAnalyses = [
  {
    id: '001',
    sampleName: 'Amostra - Fazenda São João - Lote A1',
    date: '2025-11-18',
    nematodeCount: 1250,
    riskLevel: 'high',
    species: 'Meloidogyne incognita',
    status: 'completed'
  },
  {
    id: '002',
    sampleName: 'Amostra - Fazenda Boa Vista - Lote B3',
    date: '2025-11-17',
    nematodeCount: 450,
    riskLevel: 'medium',
    species: 'Pratylenchus brachyurus',
    status: 'completed'
  },
  {
    id: '003',
    sampleName: 'Amostra - Sítio Esperança - Talhão 5',
    date: '2025-11-17',
    nematodeCount: 180,
    riskLevel: 'low',
    species: 'Meloidogyne javanica',
    status: 'completed'
  },
  {
    id: '004',
    sampleName: 'Amostra - Fazenda Santa Clara - Área C',
    date: '2025-11-16',
    nematodeCount: 890,
    riskLevel: 'high',
    species: 'Pratylenchus zeae',
    status: 'completed'
  },
  {
    id: '005',
    sampleName: 'Amostra - Chácara Verde - Quadra 2',
    date: '2025-11-16',
    nematodeCount: 320,
    riskLevel: 'medium',
    species: 'Meloidogyne incognita',
    status: 'processing'
  },
  {
    id: '006',
    sampleName: 'Amostra - Fazenda Progresso - Setor D',
    date: '2025-11-15',
    nematodeCount: 95,
    riskLevel: 'low',
    species: 'Helicotylenchus spp',
    status: 'completed'
  }
];

export function Dashboard({ onNavigateToResults, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'upload' | 'history' | 'plans' | 'settings'>('dashboard');

  const getRiskBadge = (level: string) => {
    switch (level) {
      case 'high':
        return <Badge className="bg-[#FF5252] text-white hover:bg-[#FF5252]">Alto Risco</Badge>;
      case 'medium':
        return <Badge className="bg-orange-500 text-white hover:bg-orange-500">Médio Risco</Badge>;
      case 'low':
        return <Badge className="bg-[#00C853] text-white hover:bg-[#00C853]">Baixo Risco</Badge>;
      default:
        return <Badge variant="secondary">Desconhecido</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'processing') {
      return <Badge variant="outline" className="text-blue-600 border-blue-600">Processando</Badge>;
    }
    return <Badge variant="outline" className="text-[#00C853] border-[#00C853]">Concluído</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#00C853] rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl text-gray-900">AgroDetect</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <Button
                  variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('dashboard')}
                  className={activeTab === 'dashboard' ? 'bg-[#00C853] hover:bg-[#047857]' : ''}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
                <Button
                  variant={activeTab === 'upload' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('upload')}
                  className={activeTab === 'upload' ? 'bg-[#00C853] hover:bg-[#047857]' : ''}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Novo Upload
                </Button>
                <Button
                  variant={activeTab === 'history' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('history')}
                  className={activeTab === 'history' ? 'bg-[#00C853] hover:bg-[#047857]' : ''}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Histórico
                </Button>
                <Button
                  variant={activeTab === 'plans' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('plans')}
                  className={activeTab === 'plans' ? 'bg-[#00C853] hover:bg-[#047857]' : ''}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Planos
                </Button>
                <Button
                  variant={activeTab === 'settings' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('settings')}
                  className={activeTab === 'settings' ? 'bg-[#00C853] hover:bg-[#047857]' : ''}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Configurações
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-sm text-gray-900">Laboratório AgriTech</div>
                <div className="text-xs text-gray-500">contato@agritech.com</div>
              </div>
              <Button variant="ghost" onClick={onLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm text-gray-600">Total de Análises</CardTitle>
                  <FileText className="w-4 h-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl text-gray-900">847</div>
                  <p className="text-xs text-gray-500 mt-1">
                    <span className="text-[#00C853]">+12%</span> desde o mês passado
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm text-gray-600">Concluídas</CardTitle>
                  <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl text-gray-900">842</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Taxa de sucesso: 99.4%
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm text-gray-600">Em Processamento</CardTitle>
                  <Clock className="w-4 h-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl text-gray-900">5</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Tempo médio: 45 segundos
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm text-gray-600">Uso do Plano</CardTitle>
                  <TrendingUp className="w-4 h-4 text-gray-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl text-gray-900">547/750</div>
                  <Progress value={73} className="mt-2 h-2" />
                  <p className="text-xs text-gray-500 mt-1">
                    73% utilizado - Plano Profissional
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Alert Card */}
            <Card className="bg-[#E6F7F1] border-[#00C853]">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#00C853] rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Análises de Alto Risco Detectadas</div>
                    <p className="text-sm text-gray-600">
                      2 amostras recentes apresentaram alta infestação de nematoides. Revise os relatórios e recomendações de manejo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <CardDescription>Suas análises mais recentes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAnalyses.map((analysis) => (
                    <div
                      key={analysis.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#00C853] transition-all cursor-pointer"
                      onClick={() => onNavigateToResults(analysis.id)}
                    >
                      <div className="flex-1">
                        <div className="text-gray-900 mb-1">{analysis.sampleName}</div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(analysis.date).toLocaleDateString('pt-BR')}
                          </span>
                          <span>{analysis.species}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right mr-4">
                          <div className="text-2xl text-gray-900">{analysis.nematodeCount}</div>
                          <div className="text-xs text-gray-500">nematoides/100cm³</div>
                        </div>
                        <div className="flex flex-col gap-2">
                          {getRiskBadge(analysis.riskLevel)}
                          {getStatusBadge(analysis.status)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Nova Análise</CardTitle>
                <CardDescription>
                  Faça upload de imagens microscópicas para análise automática
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-[#00C853] transition-all cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-gray-900 mb-2">
                    Arraste arquivos aqui ou clique para selecionar
                  </div>
                  <div className="text-sm text-gray-500">
                    Formatos aceitos: JPG, PNG, TIFF (máx. 10MB)
                  </div>
                  <Button className="mt-6 bg-[#00C853] hover:bg-[#047857]">
                    Selecionar Arquivos
                  </Button>
                </div>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-sm text-gray-700 block mb-2">Nome da Amostra</label>
                    <input
                      type="text"
                      placeholder="Ex: Fazenda São João - Lote A1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C853]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-700 block mb-2">Profundidade (cm)</label>
                      <input
                        type="text"
                        placeholder="0-20"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C853]"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700 block mb-2">Cultura</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C853]">
                        <option>Soja</option>
                        <option>Milho</option>
                        <option>Cana-de-açúcar</option>
                        <option>Algodão</option>
                        <option>Outro</option>
                      </select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'history' && (
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Análises</CardTitle>
              <CardDescription>Todas as suas análises processadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAnalyses.map((analysis) => (
                  <div
                    key={analysis.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-[#E6F7F1] transition-all cursor-pointer"
                    onClick={() => onNavigateToResults(analysis.id)}
                  >
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">{analysis.sampleName}</div>
                      <div className="text-sm text-gray-500">{analysis.species}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-gray-500">
                        {new Date(analysis.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="text-right">
                        <div className="text-lg text-gray-900">{analysis.nematodeCount}</div>
                      </div>
                      {getRiskBadge(analysis.riskLevel)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'plans' && (
          <Card>
            <CardHeader>
              <CardTitle>Seu Plano Atual</CardTitle>
              <CardDescription>Plano Profissional</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-[#E6F7F1] rounded-lg">
                  <div>
                    <div className="text-2xl text-gray-900 mb-2">R$ 499/mês</div>
                    <div className="text-sm text-gray-600">Próxima cobrança: 01/12/2025</div>
                  </div>
                  <Button variant="outline">Gerenciar Assinatura</Button>
                </div>
                <div>
                  <div className="text-gray-900 mb-4">Uso de Créditos</div>
                  <Progress value={73} className="h-3 mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>547 de 750 créditos utilizados</span>
                    <span>203 restantes</span>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <div className="text-gray-900 mb-4">Recursos Incluídos</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                      750 créditos de análise por mês
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                      Acesso à API completa
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                      Dashboard avançado com gráficos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                      Armazenamento ilimitado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                      Relatórios customizáveis com logo
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Laboratório</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-gray-700 block mb-2">Nome do Laboratório</label>
                  <input
                    type="text"
                    defaultValue="Laboratório AgriTech"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C853]"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-700 block mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="contato@agritech.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C853]"
                  />
                </div>
                <Button className="bg-[#00C853] hover:bg-[#047857]">
                  Salvar Alterações
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customização de Relatórios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-gray-700 block mb-2">Logo do Laboratório</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">
                      Clique para fazer upload do logo
                    </div>
                  </div>
                </div>
                <Button className="bg-[#00C853] hover:bg-[#047857]">
                  Atualizar Logo
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
