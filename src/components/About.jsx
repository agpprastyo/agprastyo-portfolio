import profileImg from '../assets/profile.png';
import {FiDownload, FiMail, FiMapPin, FiUser} from 'react-icons/fi';

// Data for personal details - makes the component cleaner and easier to update
const personalDetails = [
    {
        label: 'Name',
        value: 'Agung Prasetyo',
        icon: FiUser,
    },
    {
        label: 'Email',
        value: 'prasetyo.agpr@gmail.com',
        icon: FiMail,
    },
    {
        label: 'Location',
        value: 'Yogyakarta, Indonesia',
        icon: FiMapPin,
    },
];

const About = () => {
    return (
        // MODIFICATION: Added classes to control height and vertical alignment on desktop
        <section
            id="about"
            className="h-full flex flex-col justify-center py-16 md:py-0"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Section Title - Reduced bottom margin for better fit on desktop */}
                <div className="text-center md:text-left mb-8 md:mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-stone-100 relative inline-block">
                        <span className="relative z-10">About Me</span>
                        <span
                            className="absolute -bottom-2 left-0 w-3/4 h-4 bg-stone-500 transform -translate-y-2 z-0"></span>
                    </h2>
                    <p className="mt-4 text-lg text-neutral-400">A brief introduction to my background and skills.</p>
                </div>

                {/* Main Content Card */}
                <div
                    className="grid md:grid-cols-3 gap-8 lg:gap-20 items-center bg-neutral-800/50  p-8 md:p-10 ">

                    {/* Profile Image */}
                    <div className="md:col-span-1 flex justify-center">
                        <div className="relative group w-40 h-40 lg:w-48 lg:h-48">
                            <div
                                className="absolute -inset-1.5 bg-gradient-to-r from-neutral-600 to-stone-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <img
                                src={profileImg}
                                alt="Agung Prasetyo Profile"
                                className="relative w-full h-full rounded-full object-cover shadow-xl transform transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Bio and Details */}
                    <div className="md:col-span-2 text-center md:text-left">
                        <p className="text-base lg:text-lg leading-relaxed text-neutral-300 mb-6 font-light">
                            I&apos;m a passionate developer with a knack for creating elegant and efficient solutions.
                            My
                            journey in technology has been driven by a constant curiosity and a desire to build things
                            that make a difference.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                            {personalDetails.map((detail) => (
                                <div key={detail.label} className="flex items-center gap-4">
                                    <detail.icon className="w-5 h-5 text-stone-400 flex-shrink-0"/>
                                    <div>
                                        <strong className="text-stone-200 font-medium text-sm">{detail.label}:</strong>
                                        <p className="text-neutral-400 text-sm">{detail.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="/Agung Prasetyo - Backend Developer Resume.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 bg-stone-200 text-stone-900 font-semibold py-2.5 px-5 text-sm rounded-md hover:bg-stone-300 disabled:bg-neutral-600 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <FiDownload/>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;