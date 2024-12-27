import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Get in <span className="text-primary">Touch</span></h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact <span className="text-primary">Information</span></h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:tathyashah1130@gmail.com" className="hover:text-primary transition-colors">
                  tathyashah1130@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+919727402537" className="hover:text-primary transition-colors">
                  +91 9727402537
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] focus:border-primary focus:ring-1 focus:ring-primary text-white"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] focus:border-primary focus:ring-1 focus:ring-primary text-white"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] focus:border-primary focus:ring-1 focus:ring-primary text-white"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg transition-colors text-white"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}