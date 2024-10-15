const techStack = [
    { name: 'Dart', icon: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg' },
    { name: 'Kotlin', icon: 'https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg' },
    { name: 'Flutter', icon: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg' },
    { name: 'Golang', icon: 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg' },
    { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: 'Supabase', icon:"https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg"},

];

const TechStack = () => {
    return (
        <section id="tech" className="py-20 bg-transparent">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl font-bold text-white">My Tech Stack</h2>
                <div className="overflow-hidden whitespace-nowrap mt-6 lg:w-1/2 mx-auto">
                    <div className="flex animate-marquee space-x-8 py-12">
                        {techStack.map((tech, index) => (
                            <div key={index}>
                                <div className="glass flex items-center justify-center py-4 px-12 rounded-md ">

                                <img
                                    src={tech.icon}
                                    alt={`${tech.name} icon`}
                                    width="40"
                                    height="40"
                                    className="flex-shrink-0" // Prevent the image from shrinking
                                />
                                <div className="ml-2 text-lg font-medium text-white">{tech.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;

// const TechStack = () => {
//     return (
//         <section id="tech" className="py-20 bg-gray-100">
//             <div className="container mx-auto text-center">
//                 <h2 className="text-3xl font-bold">My Tech Stack</h2>
//                 <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div className="p-4 border rounded-lg">React</div>
//                     <div className="p-4 border rounded-lg">Tailwind CSS</div>
//                     <div className="p-4 border rounded-lg">JavaScript</div>
//                     <div className="p-4 border rounded-lg">Node.js</div>
//                     <div className="p-4 border rounded-lg">Express</div>
//                     <div className="p-4 border rounded-lg">MongoDB</div>
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default TechStack;
