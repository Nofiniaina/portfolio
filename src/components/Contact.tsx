import { motion } from "motion/react";
import { 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  UserIcon,
  ChatBubbleLeftIcon
} from "@heroicons/react/24/outline";
import { useState, type FormEvent, type ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: MapPinIcon,
      label: "Location",
      value: "Antananarivo, Madagascar",
      subvalue: "UTC +03:00"
    },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "contact@nofiniaina.dev",
      subvalue: "Available for projects"
    },
    {
      icon: ClockIcon,
      label: "Response Time",
      value: "Within 24 hours",
      subvalue: "Monday - Friday"
    }
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.h2
          className="text-3xl font-bold mb-8 text-primary flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <EnvelopeIcon className="size-8" />
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Info Cards */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  className="border-2 border-border rounded-lg p-4 bg-card hover:border-primary transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-muted rounded">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-foreground mb-1 uppercase tracking-wider">
                        {info.label}
                      </h3>
                      <p className="text-sm text-foreground font-mono">
                        {info.value}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono mt-1">
                        {info.subvalue}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Additional Info */}
            <motion.div
              className="border-2 border-border rounded-lg p-4 bg-muted/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
                Availability
              </h3>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <motion.span
                    className="text-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    ●
                  </motion.span>
                  <span className="text-foreground">Open to new opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Available for freelance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">Remote work preferred</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="border-2 border-border rounded-lg p-6 bg-card shadow-lg">
              {/* Terminal Header */}
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-primary opacity-50"></div>
                    <div className="w-3 h-3 rounded-full bg-primary opacity-30"></div>
                  </div>
                  <span className="text-muted-foreground text-xs ml-2 font-mono">
                    contact-form.html — {submitStatus === 'success' ? 'sent' : 'editing'}
                  </span>
                </div>
                {submitStatus === 'success' && (
                  <motion.span
                    className="text-xs text-primary font-mono"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    ✓ Message sent
                  </motion.span>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                {/* Name Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm text-foreground mb-2">
                    <UserIcon className="size-4 text-primary" />
                    <span>Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-muted border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm text-foreground mb-2">
                    <EnvelopeIcon className="size-4 text-primary" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-muted border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm text-foreground mb-2">
                    <ChatBubbleLeftIcon className="size-4 text-primary" />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-muted border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm text-foreground mb-2">
                    <PaperAirplaneIcon className="size-4 text-primary" />
                    <span>Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-muted border border-border rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        ⏳
                      </motion.span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="size-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="p-3 bg-primary/10 border border-primary rounded text-sm text-foreground"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  </motion.div>
                )}
              </form>

              {/* Terminal Footer */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex gap-2 text-xs font-mono text-muted-foreground">
                  <span className="text-primary">nofiniaina@contact</span>
                  <span className="text-foreground">:</span>
                  <span className="text-primary">~</span>
                  <span className="text-foreground">$</span>
                  <span className="ml-2">Awaiting your message...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground font-mono mb-4">
            Or connect with me on social media
          </p>
          <div className="flex justify-center gap-4">
            {[
              { name: "GitHub", url: "https://github.com/Nofiniaina" },
              { name: "Facebook", url: "https://www.facebook.com/sam.rnd.73" },
              { name: "Portfolio", url: "https://nofiniaina.github.io/portfolio/" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-mono border border-border bg-muted hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all rounded"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;