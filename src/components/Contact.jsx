const Contact = () => {
    return (
        <section id="contact"
                 className="flex flex-col p-6 lg:w-3/4  lg:p-0 md:flex-row w-full mx-auto my-8 lg:my-32 rounded-lg  lg:gap-20 sm:gap-8  ">
            {/* Introduction Section */}
            <div
                className="md:w-1/2 mb-6 md:mb-0 md:pr-4 flex flex-col justify-center">
                <h1 className="text-white text-4xl font-bold mb-4">Get in Touch</h1>
                <p className="text-white">
                    I would love to hear from you! Whether you have a question, want to discuss a project, or just want
                    to say hi, feel free to reach out using the form on the right.
                </p>
            </div>

            {/* Contact Form Section */}
            <div className="md:w-1/2">
                <h2 className="text-white text-2xl font-bold text-center mb-4">Contact Me</h2>
                <form action="https://formspree.io/f/manwkkwy" method="POST" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="glass bg-gray-50 border  mt-1 block w-full rounded-md p-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="glass bg-gray-50 border  mt-1 block w-full rounded-md p-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows="4"
                            className="glass bg-gray-50 border  mt-1 block w-full rounded-md p-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className=" glass w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-gray-50/[0.5]   transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;