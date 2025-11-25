import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { ResultsDetail } from './components/ResultsDetail';
import { ReportGenerator } from './components/ReportGenerator';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'dashboard' | 'results' | 'report'>('landing');
  const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);

  const navigateToLogin = () => setCurrentPage('login');
  const navigateToDashboard = () => setCurrentPage('dashboard');
  const navigateToLanding = () => setCurrentPage('landing');
  const navigateToResults = (analysisId: string) => {
    setSelectedAnalysis(analysisId);
    setCurrentPage('results');
  };
  const navigateToReport = (analysisId: string) => {
    setSelectedAnalysis(analysisId);
    setCurrentPage('report');
  };
  const navigateBackToResults = () => setCurrentPage('results');

  return (
    <div>
      {currentPage === 'landing' && <LandingPage onNavigateToLogin={navigateToLogin} />}
      {currentPage === 'login' && <Login onLoginSuccess={navigateToDashboard} onBackToHome={navigateToLanding} />}
      {currentPage === 'dashboard' && <Dashboard onNavigateToResults={navigateToResults} onLogout={navigateToLanding} />}
      {currentPage === 'results' && <ResultsDetail analysisId={selectedAnalysis!} onBackToDashboard={navigateToDashboard} onNavigateToReport={navigateToReport} />}
      {currentPage === 'report' && <ReportGenerator analysisId={selectedAnalysis!} onBack={navigateBackToResults} />}
    </div>
  );
}