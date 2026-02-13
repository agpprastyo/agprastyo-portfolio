import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";


const Contact = () => {
    return (
        <div className="space-y-8 font-mono max-w-2xl">
            <h2 className="text-3xl font-bold border-b pb-4">Contact</h2>

            <div className="grid gap-6">
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Get in Touch</h3>
                    <p className="text-muted-foreground">
                        Feel free to reach out for collaborations or just a friendly hello.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <a href="mailto:prasetyo.agpr@gmail.com" className="hover:underline">prasetyo.agpr@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5" />
                        <span>Sleman, Yogyakarta, Indonesia</span>
                    </div>
                </div>

                {/* Simple Form (Stateless for now as backend wasn't specified, or mailto link) */}
                <form className="space-y-4 mt-4" action="mailto:prasetyo.agpr@gmail.com" method="post" encType="text/plain">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                className="flex h-10 w-full 0 dark:bg-zinc-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                className="flex h-10 w-full 0 dark:bg-zinc-950 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea
                            id="message"
                            name="message"
                            className="flex min-h-[120px] w-full"
                            required
                        ></Textarea>
                    </div>
                    <Button type="submit" className="w-full md:w-auto gap-2">
                        <Send className="w-4 h-4" /> Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;