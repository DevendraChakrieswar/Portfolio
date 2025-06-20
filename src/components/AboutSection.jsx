import { Code, User } from "lucide-react"

export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:texts-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                        <p className="text-muted-foreground ">
                            With over 2 years of experience in full-stack web development, 
                            I specialize in building scalable, responsive, and user-friendly applications 
                            using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                        </p>
                        <p>
                            I'm passionate about solving real-world problems through clean architecture and
                            efficient code, with strong foundations in Data Structures & Algorithms and experience in 
                            secure API development, and frontend performance optimization.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">

                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>

                            <a href="https://drive.google.com/uc?export=download&id=1Aq-eq74aa06jl71n1FQpl-V9NL3ZrKFm" className="
                            px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                {" "}
                                Download Resume
                            </a>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-forground">
                                        {" "}
                                        Building dynamic and scalable web applications using the MERN stack, with a strong 
                                        focus on clean architecture, performance, and responsiveness.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX </h4>
                                    <p className="text-muted-forground">
                                        {" "}
                                        Creating intuitive, accessible, and visually appealing interfaces using React.js and 
                                        Tailwind CSS, ensuring a seamless user experience across devices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Data Structures & Algorithms </h4>
                                    <p className="text-muted-forground">
                                        {" "}
                                        Solving complex coding challenges with efficient DSA techniques; consistently 
                                        ranked in top contests and certified in Java and problem-solving.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}