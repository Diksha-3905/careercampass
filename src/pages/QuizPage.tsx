
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

const questions = [
  {
    id: 1,
    question: "Which subjects interest you the most?",
    type: "multiple",
    options: [
      "Mathematics and Logic",
      "Science and Technology",
      "Arts and Creativity",
      "Business and Finance",
      "Social Sciences",
      "Sports and Physical Activities"
    ]
  },
  {
    id: 2,
    question: "How would you describe your strengths?",
    type: "multiple",
    options: [
      "Analytical and problem-solving",
      "Creative and innovative",
      "Leadership and management",
      "Communication and interpersonal",
      "Technical and hands-on",
      "Organizational and detail-oriented"
    ]
  },
  {
    id: 3,
    question: "What kind of work environment do you prefer?",
    type: "single",
    options: [
      "Remote work",
      "Office environment",
      "Hybrid (mix of both)",
      "Field work",
      "Flexible (changes often)"
    ]
  },
  {
    id: 4,
    question: "How many years of experience do you have in your field of interest?",
    type: "single",
    options: [
      "None (just starting)",
      "1-2 years",
      "3-5 years",
      "5+ years"
    ]
  },
  {
    id: 5,
    question: "What is your highest level of education?",
    type: "single",
    options: [
      "High School",
      "Diploma",
      "Bachelor's Degree",
      "Master's Degree",
      "PhD or higher"
    ]
  }
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleAnswer = (option: string) => {
    const currentAnswers = answers[currentQuestion] || []
    const question = questions[currentQuestion]
    
    if (question.type === "single") {
      setAnswers({...answers, [currentQuestion]: [option]})
    } else {
      if (currentAnswers.includes(option)) {
        setAnswers({
          ...answers,
          [currentQuestion]: currentAnswers.filter(a => a !== option)
        })
      } else {
        setAnswers({
          ...answers,
          [currentQuestion]: [...currentAnswers, option]
        })
      }
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Process answers and generate recommendations
    navigate('/dashboard')
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Career Assessment Quiz
            </h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {questions[currentQuestion].question}
            </h3>
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <div 
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    (answers[currentQuestion] || []).includes(option)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg disabled:opacity-50"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Previous
            </button>
            
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion]?.length}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
              >
                Next
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!answers[currentQuestion]?.length || isSubmitting}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Get Recommendations'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
  