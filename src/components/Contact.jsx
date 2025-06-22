import {useState} from 'react';
import {FiCheckCircle, FiSend} from 'react-icons/fi';

const Contact = () => {
    // State to manage form submission status: 'idle', 'submitting', 'success', 'error'
    const [submissionState, setSubmissionState] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmissionState('submitting');
        setErrorMessage('');

        const formData = new FormData(event.target);

        try {
            const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {

                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmissionState('success');
            } else {
                const data = await response.json();
                setErrorMessage(data.errors.map(error => error.message).join(', ') || 'An unknown error occurred.');
                setSubmissionState('error');
            }
        } catch (error) {
            setErrorMessage('Could not connect to the server. Please try again later.');
            setSubmissionState('error');
        }
    };

    return (
        <section id="contact" className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div
                    className="grid md:grid-cols-2 gap-20 items-center  bg-neutral-800/50  p-8 md:p-12 ">

                    {/* Introduction Section */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-stone-100 relative inline-block">
                            <span className="relative z-10">Get in Touch</span>
                            <span
                                className="absolute -bottom-2 left-0 w-1/3 h-4 bg-stone-500 transform -translate-y-2 z-0"></span>
                        </h2>
                        <p className="text-neutral-400 leading-relaxed mt-4">
                            Have a project in mind, a question, or just want to connect? I&apos;m always open to
                            discussing
                            new opportunities and ideas. Fill out the form and I&apos;ll get back to you soon.
                        </p>
                    </div>

                    {/* Form or Success Message Section */}
                    <div>
                        {submissionState === 'success' ? (
                            <div className="text-center bg-neutral-700/60 p-8 rounded-lg">
                                <FiCheckCircle className="mx-auto text-green-400 h-12 w-12 mb-4"/>
                                <h3 className="text-xl font-bold text-stone-100 mb-2">Message Sent!</h3>
                                <p className="text-neutral-300">Thank you for reaching out. I&apos;ll get back to you as
                                    soon</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label htmlFor="name"
                                           className="block text-sm font-medium text-neutral-300">Name</label>
                                    <input
                                        type="text" id="name" name="name" required
                                        className="block w-full bg-neutral-700/50 border border-neutral-600 rounded-md p-3 text-stone-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-stone-400 transition duration-200"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email"
                                           className="block text-sm font-medium text-neutral-300">Email</label>
                                    <input
                                        type="email" id="email" name="email" required
                                        className="block w-full bg-neutral-700/50 border border-neutral-600 rounded-md p-3 text-stone-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-stone-400 transition duration-200"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message"
                                           className="block text-sm font-medium text-neutral-300">Message</label>
                                    <textarea
                                        id="message" name="message" required rows="4"
                                        className="block w-full bg-neutral-700/50 border border-neutral-600 rounded-md p-3 text-stone-200 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-stone-400 transition duration-200"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={submissionState === 'submitting'}
                                    className="w-full flex items-center justify-center gap-2 bg-stone-200 text-stone-900 font-semibold py-3 px-4 rounded-md hover:bg-stone-300 disabled:bg-neutral-600 disabled:text-neutral-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    {submissionState === 'submitting' ? 'Sending...' : 'Send Message'}
                                    <FiSend/>
                                </button>
                                {submissionState === 'error' && (
                                    <p className="text-red-400 text-sm text-center">{errorMessage}</p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;