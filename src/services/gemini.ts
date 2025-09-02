
export async function generateCareerRecommendations(answers: Record<number, string[]>) {
  // In a real app, you would call the Gemini API here
  // This is a mock implementation for demonstration
  
  const prompt = `Based on these answers, suggest 3 career paths:
  ${JSON.stringify(answers)}

  For each career path, provide:
  - Career title
  - Description
  - Required skills
  - Average salary range in India
  - Future growth prospects
  - Recommended learning resources

  Format the response as JSON with this structure:
  {
    "careers": [
      {
        "title": "",
        "description": "",
        "skills": [],
        "salary": "",
        "growth": "",
        "resources": []
      }
    ]
  }`

  // Mock response
  return {
    careers: [
      {
        title: "Data Scientist",
        description: "Analyze complex data to help organizations make better decisions using statistical methods and machine learning.",
        skills: ["Python", "Statistics", "Machine Learning", "Data Visualization"],
        salary: "₹6-15 LPA",
        growth: "High (30% expected growth in next 5 years)",
        resources: [
          "Google Data Analytics Professional Certificate",
          "NPTEL's Data Science for Engineers",
          "Kaggle courses"
        ]
      },
      {
        title: "UX Designer",
        description: "Create user-friendly interfaces and experiences for digital products focusing on usability and aesthetics.",
        skills: ["User Research", "Figma", "Prototyping", "UI Design"],
        salary: "₹4-12 LPA",
        growth: "High (25% expected growth)",
        resources: [
          "Google UX Design Professional Certificate",
          "Interaction Design Foundation courses",
          "Udemy's UX Design Bootcamp"
        ]
      },
      {
        title: "Digital Marketing Specialist",
        description: "Develop and implement online marketing strategies to promote brands and products.",
        skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
        salary: "₹3-8 LPA",
        growth: "Moderate (20% expected growth)",
        resources: [
          "Google Digital Garage Fundamentals",
          "HubSpot Academy",
          "Meta Blueprint"
        ]
      }
    ]
  }
}
  