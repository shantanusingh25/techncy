'use server';
export async function submitProjectInquiry(formData) {
  
  // Server-side validation
  const projectName = formData.get('projectName');
  const name = formData.get('name');
  const email = formData.get('email');
  const budget = formData.get('budget');
  const meetingType = formData.get('meetingType');
  const meetingDate = formData.get('meetingDate');
  const remarks = formData.get('remarks');

  if (!projectName || !name || !email || !budget || !meetingType || !meetingDate) {
    return { error: "Please fill in all required fields" };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address" };
  }

  // Process form submission - in production connect to your database or API
  console.log("Form submitted:", {
    projectName,
    name,
    email,
    budget,
    meetingType,
    meetingDate,
    remarks
  });

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}