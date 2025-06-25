import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Info from './Components/Info'

function BusinessCard() {
  const [activeTab, setActiveTab] = useState('contact')

  const renderContent = () => {
    switch(activeTab) {
      case 'contact':
        return <Contact />
      case 'services':
        return <Services />
      case 'info':
        return <Info />
      default:
        return <Contact />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        
        {/* Profile Section */}
        <Header />

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/20">
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'contact'
                ? 'text-white bg-white/10 border-b-2 border-green-400'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'services'
                ? 'text-white bg-white/10 border-b-2 border-green-400'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === 'info'
                ? 'text-white bg-white/10 border-b-2 border-green-400'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Info
          </button>
        </div>

        {/* Content Sections */}
        <div className="p-6">
          {renderContent()}
        </div>

        {/* Action Buttons */}
        <Footer />
      </div>
      
      {/* Developer Credit */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-xs opacity-70">
          Developed by <a href="https://rijoan.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-400 underline transition-colors">Rijoan Maruf</a>
        </p>
      </div>
    </div>
  )
}

function App() {
  return <BusinessCard />
}

export default App
