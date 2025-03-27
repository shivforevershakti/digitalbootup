import "./index.css"; // Ensure this file imports Tailwind directives

import { Header } from "./Header";
import { About } from "./About";
import { Services } from "./Services";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const App = () => {
    return (
        <div>
            <Header />

            <main className="p-6">
                {/* Home Section */}
                <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
                    <div className="relative w-screen h-screen flex justify-center items-center bg-black">
                        {/* GIF as Background */}
                        <img
                            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTlkNXN0M29kdjBpYnpmZHk3ZHJ6cjJnd3VwN2sxNTZrNW95andyeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/doXBzUFJRxpaUbuaqz/giphy.gif"
                            alt="Full-Screen GIF"
                            className="w-full h-full object-cover"
                        />

                        {/* Centered Text */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <h1 className="text-white text-5xl font-bold  px-6 py-3 rounded-lg shadow-lg">
                                Digital Bootup
                            </h1>
                        </div>
                    </div>
                </section>
                <About />

                <Services />

                <Contact />
                <Footer />
            </main>
        </div>
    );
};
