import React, { useState } from "react";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vacancy: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("vacancy", formData.vacancy);
    data.append("message", formData.message);
    data.append("resume", formData.resume);

    try {
      const response = await fetch("/career.php", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      alert(result.message);
      if (result.status === "success") {
        setFormData({ name: "", email: "", phone: "", vacancy: "", message: "", resume: null });
      }
    } catch (err) {
      alert("Something went wrong. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Join Our Team</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">
          Apply for one of our open positions below. Fill the form and attach your resume to get started.
        </p>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden md:flex">
          {/* Left: Form */}
          <div className="md:w-1/2 p-8 md:p-12">
            <form className="space-y-6"  action="career.php" method="POST">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 form-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 form-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 123 4567"
                  className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 form-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Vacancy</label>
                <select
                  name="vacancy"
                  value={formData.vacancy}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 form-input"
                >
                  <option value="">Select a position</option>
                  <option value="Mobile/Web Developer">Mobile/Web Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Growth & Marketing Intern">Growth & Marketing Intern</option>
                  <option value="Product & Operations Assistant">Product & Operations Assistant</option>
                  <option value="Outreach & Partnerships Coordinator">Outreach & Partnerships Coordinator</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Cover Letter / Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write a short message or cover letter..."
                  className="mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 form-input"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Resume (PDF, DOCX)</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md shadow-sm text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Right: Info/Illustration */}
          <div className="md:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-indigo-100 text-lg mb-6">
              MacTech Global Ventures is a hub for innovation, creativity, and professional growth. Join our team and help us build solutions that impact the world.
            </p>
            <ul className="space-y-3 text-indigo-100">
              <li>💡 Innovative and challenging projects</li>
              <li>🌍 Global exposure and collaboration</li>
              <li>🚀 Career growth and learning opportunities</li>
              <li>🤝 Inclusive and supportive team culture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
