"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const message = formData.get("message") as string

  // Validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Here you would typically send the email or save to a database
  // For now, we'll simulate a successful submission
  console.log("Contact form submission:", { name, email, company, message })

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "Thanks for reaching out! We'll get back to you within one business day.",
  }
}
