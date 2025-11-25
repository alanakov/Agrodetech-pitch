import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { 
  ArrowLeft, 
  Download, 
  AlertTriangle, 
  Calendar, 
  MapPin,
  FileText,
  TrendingUp,
  Brain
} from 'lucide-react';
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';

interface ResultsDetailProps {
  analysisId: string;
  onBackToDashboard: () => void;
  onNavigateToReport: (analysisId: string) => void;
}

// Mock data for charts
const speciesData = [
  { name: 'Meloidogyne incognita', value: 720, color: '#00C853' },
  { name: 'Pratylenchus brachyurus', value: 380, color: '#4CAF50' },
  { name: 'Helicotylenchus spp', value: 150, color: '#81C784' }
];

const depthData = [
  { depth: '0-10cm', count: 580, fill: '#00C853' },
  { depth: '10-20cm', count: 450, fill: '#4CAF50' },
  { depth: '20-30cm', count: 220, fill: '#81C784' }
];

const temporalData = [
  { month: 'Mai', count: 450 },
  { month: 'Jun', count: 680 },
  { month: 'Jul', count: 820 },
  { month: 'Ago', count: 950 },
  { month: 'Set', count: 1100 },
  { month: 'Out', count: 1250 }
];

export function ResultsDetail({ analysisId, onBackToDashboard, onNavigateToReport }: ResultsDetailProps) {
  const totalNematodes = speciesData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBackToDashboard}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Dashboard
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Exportar Dados
              </Button>
              <Button onClick={() => onNavigateToReport(analysisId)} className="bg-[#00C853] hover:bg-[#047857]">
                <Download className="w-4 h-4 mr-2" />
                Baixar Relatório PDF
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header with Alert */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl text-gray-900 mb-2">
                Amostra - Fazenda São João - Lote A1
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  18/11/2025
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Lote A1 - Profundidade 0-30cm
                </span>
                <span>ID: #{analysisId}</span>
              </div>
            </div>
            <Badge className="bg-[#00C853] text-white text-lg px-4 py-2">
              <Brain className="w-5 h-5 mr-2" />
              Processado por IA
            </Badge>
          </div>

          <Alert className="bg-[#FF5252] border-[#FF5252] text-white">
            <AlertTriangle className="w-5 h-5 text-white" />
            <AlertTitle className="text-white text-lg">Alto Risco de Infestação Detectado</AlertTitle>
            <AlertDescription className="text-white">
              A população de nematoides está acima do limiar de dano econômico para a cultura. 
              Recomenda-se ação imediata de manejo.
            </AlertDescription>
          </Alert>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Contagem Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-gray-900">{totalNematodes}</div>
              <p className="text-xs text-gray-500 mt-1">nematoides/100cm³ de solo</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Espécie Dominante</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-900">M. incognita</div>
              <p className="text-xs text-gray-500 mt-1">57.6% da população total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Nível de Risco</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-[#FF5252] text-white hover:bg-[#FF5252]">Alto Risco</Badge>
              <p className="text-xs text-gray-500 mt-2">Limiar: &gt;500/100cm³</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gray-600">Tendência</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#FF5252]" />
                <span className="text-2xl text-[#FF5252]">+38%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">em relação ao mês anterior</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Donut Chart - Species Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Espécie</CardTitle>
              <CardDescription>
                Identificação automática via Inteligência Artificial
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={speciesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  >
                    {speciesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {speciesData.map((species, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: species.color }}
                      />
                      <span className="text-gray-700">{species.name}</span>
                    </div>
                    <span className="text-gray-900">{species.value} un.</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart - Depth Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Profundidade</CardTitle>
              <CardDescription>
                Análise estratificada do perfil do solo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={depthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="depth" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                    {depthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-[#E6F7F1] rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Análise:</strong> Maior concentração na camada superficial (0-10cm), 
                  indicando infestação recente. Recomenda-se amostragem adicional para confirmar 
                  a profundidade de dispersão.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Line Chart - Temporal Evolution */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Evolução Temporal da População</CardTitle>
            <CardDescription>
              Histórico de contagem nos últimos 6 meses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={temporalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#00C853" 
                  strokeWidth={3}
                  name="Nematoides/100cm³"
                  dot={{ fill: '#00C853', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Crescimento</div>
                <div className="text-2xl text-[#FF5252]">+177%</div>
                <div className="text-xs text-gray-500">Desde Maio</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Taxa Mensal</div>
                <div className="text-2xl text-orange-500">+23.5%</div>
                <div className="text-xs text-gray-500">Crescimento médio</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Projeção (30 dias)</div>
                <div className="text-2xl text-[#FF5252]">~1,550</div>
                <div className="text-xs text-gray-500">Se não tratado</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-2 border-[#00C853]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#00C853] rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                Recomendações de Manejo
              </CardTitle>
              <CardDescription>Geradas automaticamente pela IA</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-[#00C853] pl-4">
                  <div className="text-gray-900 mb-2">1. Rotação de Culturas</div>
                  <p className="text-sm text-gray-600">
                    Implementar rotação com gramíneas não hospedeiras (Brachiaria, Panicum) 
                    por pelo menos 2 safras consecutivas. Redução esperada: 60-80%.
                  </p>
                </div>

                <div className="border-l-4 border-[#00C853] pl-4">
                  <div className="text-gray-900 mb-2">2. Controle Biológico</div>
                  <p className="text-sm text-gray-600">
                    Aplicar nematicidas biológicos à base de <em>Pochonia chlamydosporia</em> ou 
                    <em>Bacillus subtilis</em>. Dose: 2-3 kg/ha. Aplicação preventiva recomendada.
                  </p>
                </div>

                <div className="border-l-4 border-[#00C853] pl-4">
                  <div className="text-gray-900 mb-2">3. Manejo do Solo</div>
                  <p className="text-sm text-gray-600">
                    Incorporar matéria orgânica (torta de mamona 2 t/ha) 30 dias antes do plantio. 
                    Aumenta população de predadores naturais.
                  </p>
                </div>

                <div className="border-l-4 border-[#00C853] pl-4">
                  <div className="text-gray-900 mb-2">4. Monitoramento</div>
                  <p className="text-sm text-gray-600">
                    Realizar nova análise em 45-60 dias para avaliar eficácia do tratamento. 
                    Meta: reduzir população abaixo de 500/100cm³.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informações Adicionais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-2">Cultura Atual</div>
                  <div className="text-gray-900">Soja (Glycine max)</div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-2">Histórico da Área</div>
                  <div className="text-gray-900">Soja consecutiva (3 safras)</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Monocultura favorece multiplicação de <em>Meloidogyne</em>
                  </p>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-2">Tipo de Solo</div>
                  <div className="text-gray-900">Latossolo Vermelho (textura argilosa)</div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-2">Condições Climáticas</div>
                  <div className="text-gray-900">Temperatura: 24-28°C | Umidade: 65%</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Condições favoráveis à reprodução de nematoides
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-2">Método de Análise</div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[#00C853] text-white">
                      Visão Computacional
                    </Badge>
                    <Badge variant="outline">
                      Deep Learning
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Modelo treinado com 50.000+ imagens microscópicas. 
                    Acurácia: 99.2%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center justify-between p-6 bg-white rounded-lg border border-gray-200">
          <div>
            <div className="text-gray-900 mb-1">Precisa de ajuda com as recomendações?</div>
            <p className="text-sm text-gray-600">
              Nossa equipe de agrônomos está disponível para consulta
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              Agendar Consultoria
            </Button>
            <Button onClick={() => onNavigateToReport(analysisId)} className="bg-[#00C853] hover:bg-[#047857]">
              <Download className="w-4 h-4 mr-2" />
              Baixar Relatório Completo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}