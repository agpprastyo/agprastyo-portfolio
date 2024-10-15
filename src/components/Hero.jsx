import avatar from '../assets/profile.png'; // Adjust the path according to your file structure

const Hero = () => {
    return (
        <section
            id="hero"
            className="h-screen flex items-center justify-center rounded-b-3xl relative overflow-hidden"
        >
            {/* Overlay for better text visibility */}
            {/*<div className="absolute inset-0 bg-black opacity-50"></div>*/}

            {/* First Mesh Effect */}
            <div
                className="absolute"
                style={{
                    top: '20%',
                    right: '10%',
                    width: '30%',
                    height: '50%',
                    opacity: 0.5,
                    filter: 'blur(50px)',
                    transform: 'scale(1.2)',
                    background: `
                        linear-gradient(
                            125deg,
                            hsl(138, 97%, 20%),
                            transparent,
                            hsl(312, 80%, 38%),
                            transparent
                        )`,
                }}
            ></div>

            {/* Second Mesh Effect with Different Shape, Color, and Position */}
            <div
                className="absolute"
                style={{
                    bottom: '80%',
                    left: '5%',
                    width: '45%',
                    height: '40%',
                    opacity: 0.1,
                    filter: 'blur(40px)',
                    transform: 'scale(1)',
                    background: `
                        linear-gradient(
                            25deg,
                               transparent,
                            hsl(240, 100%, 30%),
                              transparent,
                            hsl(30, 100%, 50%),
                            transparent,
                            transparent
                        )`,

                }}
            ></div>

            <div className="text-center relative z-10">
                {/* Avatar Image */}
                <img
                    src={avatar}
                    alt="Profile Avatar"
                    className="w-32 h-32 rounded-full border-4 border-blue-400 mx-auto mb-4 transition-transform duration-300 transform hover:scale-110 shadow-lg"
                />
                <h2 className="text-5xl font-bold text-white drop-shadow-lg">Hi, I&apos;m Agung Prasetyo</h2>
                <p className="mt-4 text-lg text-white max-w-xl mx-auto">
                    I&apos;m a Flutter Developer with a passion for creating beautiful and functional mobile applications.
                    Proficient in Dart and experienced in translating designs into seamless user experiences, I thrive
                    on building impactful solutions.
                </p>
                {/*<button*/}
                {/*    className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition duration-300">*/}
                {/*    View My Work*/}
                {/*</button>*/}
            </div>

        </section>
    );
};

export default Hero;
