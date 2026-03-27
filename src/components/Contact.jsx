import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <div className="space-y-6 pt-6 max-w-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">Contact</h2>

            <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed text-[15px]">
                    Feel free to reach out for collaborations or just a friendly hello.
                </p>

                <div className="flex flex-col gap-2 pt-2">
                    <div className="flex items-center gap-3 text-foreground/80 hover:bg-secondary/50 p-1.5 -ml-1.5 rounded-md w-fit transition-colors">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <a href="mailto:prasetyo.agpr@gmail.com" className="text-[15px]">prasetyo.agpr@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/80 p-1.5 -ml-1.5 rounded-md w-fit">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-[15px]">Sleman, Yogyakarta, Indonesia</span>
                    </div>
                </div>

                {/* Simple Form */}
                <form className="space-y-4 pt-6" action="mailto:prasetyo.agpr@gmail.com" method="post" encType="text/plain">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                className="bg-transparent border-border/60 hover:border-border focus:border-border shadow-none rounded-md transition-colors"
                                required
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                className="bg-transparent border-border/60 hover:border-border focus:border-border shadow-none rounded-md transition-colors"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                        <Textarea
                            id="message"
                            name="message"
                            className="bg-transparent border-border/60 hover:border-border focus:border-border shadow-none rounded-md transition-colors resize-y min-h-[120px]"
                            required
                        ></Textarea>
                    </div>
                    <Button type="submit" className="w-full md:w-auto gap-2 shadow-none font-medium">
                        <Send className="w-4 h-4" /> Send Message
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;