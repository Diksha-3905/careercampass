
import { useEffect, useState } from 'react'
import { RadarChart, Radar, PolarAngleAxis, PolarGrid, ResponsiveContainer } from 'recharts'
import { generateCareerRecommendations } from '../services/gemini'

const skillsData = [
  { subject: 'Python', A: 30, B: 80 },
  { subject: 'Statistics', A: 40, B: 70 },
  { subject: 'ML', A: 20, B: 90 },
  { subject: 'Data Viz', A: 50, B: 60 },
  { subject: 'SQL', A: 60, B: 70 },
]

export default function DashboardPage() {
  const [recommendations, setRecommendations] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would get answers from state/context/API
    const mockAnswers = {
      0: ["Mathematics and Logic", "Science and Technology"],
      1: ["Analytical and problem-solving"],
      2: ["Remote work"],
      3: ["None (just starting)"],
      4: ["Bachelor's Degree"]
    }

    const fetchRecommendations = async () => {
      const data = await generateCareerRecommendations(mockAnswers)
      setRecommendations(data)
      setLoading(false)
    }

    fetchRecommendations()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Generating your personalized recommendations...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Career Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Your Skills Assessment</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar 
                    name="Your Skills" 
                    dataKey="A" 
                    stroke="#3b82f6" 
                    fill="#3b82f6" 
                    fillOpacity={0.6} 
                  />
                  <Radar 
                    name="Required Skills" 
                    dataKey="B" 
                    stroke="#22c55e" 
                    fill="#22c55e" 
                    fillOpacity={0.6} 
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Career Match Scores</h2>
            <div className="space-y-4">
              {recommendations?.careers.map((career: any, index: number) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{career.title}</h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {Math.floor(Math.random() * 30) + 70}% Match
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div 
                      className="h-2 bg-blue-600 rounded-full" 
                      style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Recommended Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations?.careers.map((career: any, index: number) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{career.title}</h3>
                <p className="text-gray-600 mb-3">{career.description}</p>
                
                <div className="mb-3">
                  <h4 className="font-medium mb-1">Skills Needed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((skill: string, i: number) => (
                      <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="font-medium">Salary Range:</h4>
                  <p className="text-gray-600">{career.salary}</p>
                </div>

                <div className="mb-3">
                  <h4 className="font-medium">Growth Potential:</h4>
                  <p className="text-gray-600">{career.growth}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Learning Resources:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    {career.resources.map((resource: string, i: number) => (
                      <li key={i}>{resource}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
  