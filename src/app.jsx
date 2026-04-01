import React, { useState } from 'react';
import { 
  Zap, 
  MapPin, 
  History, 
  Target, 
  FileText, 
  Users, 
  Microscope, 
  MessageSquare, 
  ShieldCheck,
  Download,
  PlusCircle,
  ArrowRight,
  Save,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Heart
} from 'lucide-react';

const App = () => {
  const [step, setStep] = useState(1);
  const [moduleData, setModuleData] = useState({
    title: '',
    hook: '',
    essentialQuestion: '',
    primaryCompetency: 'Research Design & Data Management',
    secondaryCompetency: 'Policy Advocacy',
    historyAnchor: '',
    resistanceLineage: '',
    fieldwork: '',
    summativeProduct: '',
    exitPulseQuestion: '',
    cognitiveLiftScore: 50,
    isThirdSpaceAligned: false
  });

  const historyGhosts = [
    { title: "The Robert Moses Legacy", description: "The West Side Highway as a physical barrier to the waterfront." },
    { title: "Redlining in Harlem", description: "1930s HOLC maps vs. modern urban heat island data." },
    { title: "The Sewage Seven", description: "The 1980s resistance against the North River Sewage Plant." },
    { title: "Diesel Bus Depots", description: "The historical concentration of depots in Northern Manhattan." }
  ];

  const handleInputChange = (field, value) => {
    setModuleData(prev => ({ ...prev, [field]: value }));
  };

  const downloadPlaybook = () => {
    const content = `
# WE ACT EHJLT Module: ${moduleData.title || 'Untitled Investigation'}
---
## 1. THE SPARK (The Hook)
${moduleData.hook}

## 2. THE GHOST (History Anchor)
${moduleData.historyAnchor}

## 3. THE POWER (Competencies)
- Primary: ${moduleData.primaryCompetency}
- Secondary: ${moduleData.secondaryCompetency}

## 4. THE ACTION (Cognitive Lift)
${moduleData.fieldwork}

## 5. THE PROOF (Summative Product)
${moduleData.summativeProduct}

## 6. THE PULSE (Evaluation)
Exit Pulse Question: ${moduleData.exitPulseQuestion}

## 7. THE AUDIT
- Cognitive Lift Score: ${moduleData.cognitiveLiftScore}%
- Third Space Aligned: ${moduleData.isThirdSpaceAligned ? 'YES' : 'NO'}

Generated via WE ACT EJ Studio
    `;
    const element = document.createElement("a");
    const file = new Blob([content], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = `${(moduleData.title || 'EJ_Module').replace(/\s+/g, '_')}_Playbook.md`;
    document.body.appendChild(element);
    element.click();
  };

  const steps = [
    { id: 1, label: "The Spark", icon: <Zap className="w-4 h-4" /> },
    { id: 2, label: "The Ghost", icon: <History className="w-4 h-4" /> },
    { id: 3, label: "The Power", icon: <Target className="w-4 h-4" /> },
    { id: 4, label: "The Action", icon: <MapPin className="w-4 h-4" /> },
    { id: 5, label: "The Proof", icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 6, label: "The Pulse", icon: <Activity className="w-4 h-4" /> },
    { id: 7, label: "The Audit", icon: <ShieldCheck className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-8">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-green-600 p-2 rounded-xl shadow-lg shadow-green-200">
            <Zap className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-800 uppercase">
              WE ACT <span className="text-green-600 font-light italic">EJ Studio</span>
            </h1>
            <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">YEHJLT Standardization Hub</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <nav className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 px-2">7-Step Build</h3>
            {steps.map((s) => (
              <button 
                key={s.id}
                onClick={() => setStep(s.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all mb-1 ${
                  step === s.id ? 'bg-green-50 text-green-700 font-bold border-l-4 border-green-600' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {s.icon} {s.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="lg:col-span-9 space-y-6">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-10">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-slate-800 tracking-tight">1. Design the <span className="text-green-600 italic">Spark</span></h2>
                  <div className="space-y-6 pt-4">
                    <input 
                      type="text" 
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-4 focus:ring-green-100 text-xl font-bold"
                      placeholder="Module Title (e.g., Beauty Justice)"
                      value={moduleData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                    />
                    <textarea 
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 h-32 text-lg"
                      placeholder="What is the mystery piece? (The Hook)"
                      value={moduleData.hook}
                      onChange={(e) => handleInputChange('hook', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-slate-800 tracking-tight">2. Uncover the <span className="text-orange-600 italic">Ghost</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {historyGhosts.map((ghost, idx) => (
                      <button key={idx} onClick={() => handleInputChange('historyAnchor', ghost.description)} className="text-left p-4 rounded-xl border border-slate-200 hover:border-orange-500 hover:bg-orange-50">
                        <h4 className="text-sm font-bold">{ghost.title}</h4>
                      </button>
                    ))}
                  </div>
                  <textarea className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 h-32" value={moduleData.historyAnchor} onChange={(e) => handleInputChange('historyAnchor', e.target.value)} />
                </div>
              )}

              {step === 7 && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-slate-800 tracking-tight">7. Final <span className="text-slate-900 italic">Audit</span></h2>
                  <div className="bg-slate-900 rounded-3xl p-8 text-white">
                    <h3 className="text-green-400 font-bold uppercase text-xs mb-2">Module Review</h3>
                    <h2 className="text-3xl font-black">{moduleData.title || "Untitled Module"}</h2>
                  </div>
                  <button onClick={downloadPlaybook} className="w-full bg-green-600 text-white p-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3">
                    <Download /> DOWNLOAD PLAYBOOK
                  </button>
                </div>
              )}
            </div>
            
            <div className="bg-slate-50 p-8 flex justify-between">
              <button onClick={() => setStep(s => Math.max(1, s - 1))} className="text-slate-400 font-bold" disabled={step === 1}>Back</button>
              {step < 7 && (
                <button onClick={() => setStep(s => Math.min(7, s + 1))} className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3">
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
