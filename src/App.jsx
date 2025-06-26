import Window from './components/Window';

export default function App() {
    return (
        <div
            id="about"
            className="min-h-screen flex flex-col items-center pt-16 px-4 select-none font-comic"
            style={{
                backgroundColor: '#0078D7',
                backgroundImage: `url(${process.env.PUBLIC_URL}/xp.jpeg)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
        >
            <header className="fixed top-0 left-0 w-full bg-[#0A64A0] shadow-md z-50">
                <nav className="container mx-auto flex flex-wrap justify-center gap-6 py-3 text-white text-xs font-bold tracking-widest select-none">
                    <a href="#about" className="hover:text-yellow-300 transition">ABOUT</a>
                    <a href="#experience" className="hover:text-yellow-300 transition">EXPERIENCE</a>
                    <a href="#projects" className="hover:text-yellow-300 transition">PROJECTS</a>
                    <a href="#contact" className="hover:text-yellow-300 transition">CONTACT</a>
                </nav>
            </header>

            <Window title="About Me">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="text-gray-900 text-xs leading-tight max-w-full sm:max-w-[70%] space-y-2">
                        <p>
                            I'm <strong>Brendan Quinn</strong> , a soon-to-be graduate in Computer Systems from the University of Limerick
                            (August 2025). I bring <strong>7 months of real-world experience</strong> as a Software Engineering Intern at WP Engine,
                            where I contributed to production-grade systems with modern technologies like React, TypeScript, and Golang.
                        </p>
                        <p>
                            I'm passionate about building impactful, clean, and scalable software. I'm comfortable in Agile teams,
                            collaborating cross-functionally, and working across the stack—from front-end interfaces to cloud infrastructure.
                        </p>
                        <p>
                            In my personal life I enjoy coaching with Special Olympics, running, swimming, music production/mixing and growing small business ventures.
                            I'm eager to bring my curiosity, energy, and drive to a full-time software engineering role.
                        </p>
                    </div>
                    <img
                        src={`${process.env.PUBLIC_URL}/breny.jpg`}
                        alt="Brendan Quinn"
                        className="mt-4 sm:mt-8 border-2 border-gray-500 rounded"
                        width={100}
                        height={100}
                    />
                </div>
                <div id="experience"></div>
            </Window>

            <Window title="Experience">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="text-gray-900 text-xs leading-relaxed space-y-4 max-w-full sm:max-w-[70%]">
                        <div>
                            <h3 className="font-bold text-sm">Software Engineering Intern</h3>
                            <p className="italic">WP Engine, Limerick — June 2023 to January 2024</p>
                            <ul className="list-disc list-inside mt-1 space-y-1">
                                <li>Shipped production-grade features for e-commerce payment systems using React, TypeScript, and Golang.</li>
                                <li>Worked in a 6-person Agile team, contributing to GitHub PRs and attending daily stand-ups.</li>
                                <li>Wrote clean, maintainable logic and unit tests; debugged across services.</li>
                                <li>Used Google Cloud Platform, CI/CD pipelines, and automated deployment tools.</li>
                                <li>Gained experience in code reviews, technical documentation, and handling customer-facing systems.</li>
                            </ul>
                        </div>
                    </div>
                    <img
                        src={`${process.env.PUBLIC_URL}/wp engine.jpg`}
                        alt="WP Engine"
                        className="mt-4 sm:mt-32 border-2 border-gray-500 rounded"
                        width={100}
                        height={100}
                    />
                </div>
            </Window>

            <Window id="projects" title="Projects">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Pub Club */}
                    <div className="flex flex-col items-center bg-white p-2 border border-gray-300 shadow-sm rounded">
                        <img
                            src={`${process.env.PUBLIC_URL}/pub club.png`}
                            alt="Pub Club Project"
                            className="w-full h-[200px] object-cover border border-gray-400 rounded"
                        />
                        <p className="mt-2 text-center text-xs font-semibold text-gray-700">Pub Club</p>
                        <a
                            href="https://github.com/BrenyQT/Dating-Site-PubClub-CS4116"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 text-blue-600 text-xs underline hover:text-blue-800"
                        >
                            View on GitHub
                        </a>
                    </div>

                    {/* Bubble */}
                    <div className="flex flex-col items-center bg-white p-2 border border-gray-300 shadow-sm rounded">
                        <img
                            src={`${process.env.PUBLIC_URL}/bubble.png`}
                            alt="Bubble Project"
                            className="w-full h-[200px] object-cover border border-gray-400 rounded"
                        />
                        <p className="mt-2 text-center text-xs font-semibold text-gray-700">Bubble</p>
                        <a
                            href="https://github.com/BrenyQT/bubble-fyp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 text-blue-600 text-xs underline hover:text-blue-800"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </Window>

            <Window id="contact" title="Contact">
                <div className="text-gray-900 text-xs space-y-2 min-h-[200px] flex flex-col justify-center">
                    <p>
                        <strong>Phone:</strong>{' '}
                        <a href="tel:0871020054" className="underline hover:text-blue-600">
                            087 102 0054
                        </a>
                    </p>
                    <p>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:brendan.quinn2003@gmail.com" className="underline hover:text-blue-600">
                            brendan.quinn2003@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>LinkedIn:</strong>{' '}
                        <a
                            href="https://www.linkedin.com/in/brenyquinn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-600"
                        >
                            linkedin.com/in/brenyquinn
                        </a>
                    </p>
                    <p>
                        <strong>GitHub:</strong>{' '}
                        <a
                            href="https://github.com/BrenyQT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-600"
                        >
                            github.com/BrenyQT
                        </a>
                    </p>
                    <p>
                        <strong>Website:</strong>{' '}
                        <a
                            href="http://breny.ie/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-600"
                        >
                            breny.ie
                        </a>
                    </p>
                </div>
            </Window>

            <footer className="text-white text-xs mt-8 select-none mb-6 text-center">
                © 2025 Brendan Quinn — Inspired by Windows XP.
            </footer>
        </div>
    );
}
