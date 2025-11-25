import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { 
  ArrowLeft, 
  Download, 
  FileText,
  Image as ImageIcon,
  Settings,
  CheckCircle2
} from 'lucide-react';

interface ReportGeneratorProps {
  analysisId: string;
  onBack: () => void;
}

export function ReportGenerator({ analysisId, onBack }: ReportGeneratorProps) {
  const [reportConfig, setReportConfig] = useState({
    includeCharts: true,
    includeRecommendations: true,
    includeRawData: true,
    includeMethodology: true,
    customNotes: ''
  });

  const handleDownload = () => {
    // Simulate PDF download
    alert('Relatório PDF será baixado em breve!\n\nEm produção, isso geraria um PDF personalizado com todas as configurações selecionadas.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Resultados
            </Button>
            <Button onClick={handleDownload} className="bg-[#00C853] hover:bg-[#047857]">
              <Download className="w-4 h-4 mr-2" />
              Baixar Relatório PDF
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl text-gray-900 mb-2">Gerar Relatório Personalizado</h1>
          <p className="text-gray-600">
            Configure o conteúdo do relatório antes de baixar o PDF
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configurações do Relatório
                </CardTitle>
                <CardDescription>
                  Selecione quais informações incluir no relatório
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Gráficos e Visualizações</Label>
                    <p className="text-sm text-gray-500">
                      Inclui gráficos de distribuição por espécie, profundidade e evolução temporal
                    </p>
                  </div>
                  <Switch
                    checked={reportConfig.includeCharts}
                    onCheckedChange={(checked) => 
                      setReportConfig({ ...reportConfig, includeCharts: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Recomendações de Manejo</Label>
                    <p className="text-sm text-gray-500">
                      Recomendações agronômicas geradas pela IA
                    </p>
                  </div>
                  <Switch
                    checked={reportConfig.includeRecommendations}
                    onCheckedChange={(checked) => 
                      setReportConfig({ ...reportConfig, includeRecommendations: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Dados Brutos da Análise</Label>
                    <p className="text-sm text-gray-500">
                      Tabelas com contagem detalhada por amostra
                    </p>
                  </div>
                  <Switch
                    checked={reportConfig.includeRawData}
                    onCheckedChange={(checked) => 
                      setReportConfig({ ...reportConfig, includeRawData: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Metodologia e Informações Técnicas</Label>
                    <p className="text-sm text-gray-500">
                      Descrição do método de análise e acurácia da IA
                    </p>
                  </div>
                  <Switch
                    checked={reportConfig.includeMethodology}
                    onCheckedChange={(checked) => 
                      setReportConfig({ ...reportConfig, includeMethodology: checked })
                    }
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Informações do Laboratório
                </CardTitle>
                <CardDescription>
                  Personalize o cabeçalho do relatório
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="lab-name">Nome do Laboratório</Label>
                  <Input
                    id="lab-name"
                    defaultValue="Laboratório AgriTech"
                    placeholder="Nome do seu laboratório"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lab-contact">Contato</Label>
                  <Input
                    id="lab-contact"
                    defaultValue="contato@agritech.com | (11) 98765-4321"
                    placeholder="Email e telefone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="analyst-name">Nome do Analista Responsável</Label>
                  <Input
                    id="analyst-name"
                    placeholder="Nome do profissional"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="client-name">Cliente / Produtor</Label>
                  <Input
                    id="client-name"
                    defaultValue="Fazenda São João"
                    placeholder="Nome do cliente"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Logo do Laboratório
                </CardTitle>
                <CardDescription>
                  Adicione o logo do seu laboratório ao cabeçalho
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#00C853] transition-all cursor-pointer">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-gray-900 mb-2">
                    Clique para fazer upload do logo
                  </div>
                  <div className="text-sm text-gray-500">
                    PNG ou JPG (máx. 2MB)
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Observações Adicionais</CardTitle>
                <CardDescription>
                  Adicione notas ou comentários personalizados ao relatório
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Digite observações adicionais que deseja incluir no relatório..."
                  className="min-h-32"
                  value={reportConfig.customNotes}
                  onChange={(e) => 
                    setReportConfig({ ...reportConfig, customNotes: e.target.value })
                  }
                />
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Preview do Relatório</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="border-b pb-4 mb-4">
                        <div className="w-16 h-16 bg-[#00C853] rounded-lg flex items-center justify-center mb-3">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-xs text-gray-500 mb-1">RELATÓRIO DE ANÁLISE</div>
                        <div className="text-sm text-gray-900">Laboratório AgriTech</div>
                        <div className="text-xs text-gray-500">ID: #{analysisId}</div>
                      </div>

                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="text-gray-500 mb-1">Amostra</div>
                          <div className="text-gray-900">Fazenda São João - Lote A1</div>
                        </div>

                        <div>
                          <div className="text-gray-500 mb-1">Seções Incluídas</div>
                          <div className="space-y-1">
                            {reportConfig.includeCharts && (
                              <div className="flex items-center gap-1 text-[#00C853]">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Gráficos</span>
                              </div>
                            )}
                            {reportConfig.includeRecommendations && (
                              <div className="flex items-center gap-1 text-[#00C853]">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Recomendações</span>
                              </div>
                            )}
                            {reportConfig.includeRawData && (
                              <div className="flex items-center gap-1 text-[#00C853]">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Dados Brutos</span>
                              </div>
                            )}
                            {reportConfig.includeMethodology && (
                              <div className="flex items-center gap-1 text-[#00C853]">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Metodologia</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {reportConfig.customNotes && (
                          <div>
                            <div className="text-gray-500 mb-1">Observações</div>
                            <div className="text-gray-900 text-xs line-clamp-3">
                              {reportConfig.customNotes}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-center">
                      <Button 
                        onClick={handleDownload}
                        className="w-full bg-[#00C853] hover:bg-[#047857]"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Gerar PDF
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        Formato A4 • Orientação Retrato
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4 bg-[#E6F7F1] border-[#00C853]">
                <CardContent className="pt-6">
                  <div className="text-sm text-gray-700">
                    <strong>Dica:</strong> O relatório será gerado com logo do laboratório, 
                    marca d'água de autenticidade e assinatura digital.
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
