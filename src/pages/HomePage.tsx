
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-blue-600">CareerPath Advisor</h1>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Discover Your Ideal Career Path
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Get personalized career recommendations based on your skills, 
            interests, and the latest job market trends.
          </p>
          
          <Link 
            to="/quiz" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </main>
    </div>
  )
}
  