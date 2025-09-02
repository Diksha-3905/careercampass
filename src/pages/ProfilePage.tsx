
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { updateProfile } from 'firebase/auth'

export default function ProfilePage() {
  const [user] = useAuthState(auth)
  const [name, setName] = useState(user?.displayName || '')
  const [education, setEducation] = useState('')
  const [skills, setSkills] = useState('')
  const [interests, setInterests] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      if (user) {
        await updateProfile(user, { displayName: name })
        // In a real app, you would save other fields to Firestore
      }
      setIsEditing(false)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Your Profile</h2>
            {isEditing ? (
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Profile'}
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
              >
                Edit Profile
              </button>
            )}
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-500">
                {user?.email?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-gray-600">{user?.email}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              ) : (
                <p className="text-gray-800">{name || 'Not provided'}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
              {isEditing ? (
                <select
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select</option>
                  <option value="High School">High School</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="PhD or higher">PhD or higher</option>
                </select>
              ) : (
                <p className="text-gray-800">{education || 'Not provided'}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
              {isEditing ? (
                <textarea
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="List your skills separated by commas"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              ) : (
                <p className="text-gray-800">
                  {skills || 'Not provided'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
              {isEditing ? (
                <textarea
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="List your interests separated by commas"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              ) : (
                <p className="text-gray-800">
                  {interests || 'Not provided'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  