import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSlidingIn, setIsSlidingIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [emailError, setEmailError] = useState(''); // State for email error

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsSlidingIn(true); // Start sliding in
    }, 100); // Delay before the animation starts
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear email error when user types in the email field
    if (name === 'email') {
      setEmailError(''); // Clear the error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionSuccess(false);
    setSubmissionError('');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Veuillez entrer une adresse email valide.'); // Set email error
      setIsSubmitting(false); // Allow resubmission
      return; // Prevent submission
    }

    try {
      const response = await axios.post('http://localhost:8000/api/contacts/', formData);
      if (response.status === 201) {
        setSubmissionSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      }
    } catch (error) {
      setSubmissionError('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white" style={{ top: "20px" }}>
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-start">
          {/* Image container that slides in from the left */}
          <div
            className={`w-1/2 p-4 transform transition-transform duration-700 ${isSlidingIn ? 'translate-x-0' : '-translate-x-full opacity-0'}`}
          >
            <img
              alt="A vintage styled menu with French text describing various cooking methods"
              className="w-full"
              height="600"
              src="https://storage.googleapis.com/a1aa/image/lRkLPrGFhR4GGxnCt6ScleIK2CTPtXB9F5o45eUUogFiWYtTA.jpg"
              width="400"
            />
          </div>

          {/* Form container */}
          <div
            className={`w-1/2 p-4 transform transition-transform duration-700 ${isSlidingIn ? 'translate-x-0' : 'translate-x-full opacity-0'}`}
          >
            <h3 className={`text-5xl font-roboto font-bold text-black transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ color: "#ca8a04" }}> CONTACT</h3>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Nom
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  id="name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  id="email"
                  type="email"
                  required
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>} {/* Display email error */}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
                  Sujet
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  id="subject"
                  type="text"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                className={`w-full py-2 px-4 bg-orange-500 text-white font-medium rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                type="submit"
                style={{ background: "#ca8a04" }}
                disabled={isSubmitting} // Disable the button while submitting
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer'}
              </button>
            </form>
            {submissionSuccess && <p className="text-green-500 mt-4">Votre message a été envoyé avec succès!</p>}
            {submissionError && <p className="text-red-500 mt-4">{submissionError}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
