"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/section-header";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "General Inquiry",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({ success: true, message: result.message });
        reset();
      } else {
        setSubmitStatus({
          success: false,
          message: result.message || "Something went wrong. Please check your inputs.",
        });
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus({
        success: false,
        message: "Network error. Failed to send inquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-studio-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Details & Coordinates Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <SectionHeader
                caption="Contact Us"
                title="Let's Discuss Your Project"
                description="Whether you're planning a new home, renovating an apartment or designing a workspace, we'd love to hear about your vision."
              />

              {/* Contact Credentials */}
              <div className="space-y-6 mt-8 font-sans">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-studio-border bg-studio-card flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-studio-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-studio-body/50 block">
                      Call Us
                    </span>
                    <a
                      href="tel:+919876543210"
                      className="text-sm font-medium text-studio-heading hover:text-studio-accent transition-colors duration-300 block mt-1"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-studio-border bg-studio-card flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-studio-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-studio-body/50 block">
                      Email
                    </span>
                    <a
                      href="mailto:inquire@nsjstudio.in"
                      className="text-sm font-medium text-studio-heading hover:text-studio-accent transition-colors duration-300 block mt-1"
                    >
                      inquire@nsjstudio.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-studio-border bg-studio-card flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-studio-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-studio-body/50 block">
                      Nagpur Studio
                    </span>
                    <address className="text-sm font-medium text-studio-heading not-italic block mt-1 leading-relaxed">
                      Civil Lines, Nagpur,
                      <br />
                      Maharashtra 440001
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Styled Custom Map / Coordinates Component */}
            <div className="relative border border-studio-border bg-studio-card p-6 h-48 flex flex-col justify-between overflow-hidden group">
              {/* Map background grids */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-studio-border/20" />
              <div className="absolute inset-y-0 left-1/3 w-[1px] bg-studio-border/20" />
              
              {/* SVG Coordinate Target Animation */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="absolute inline-flex h-12 w-12 rounded-full bg-studio-accent/20 animate-ping opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-studio-accent" />
              </div>

              <div className="relative z-10">
                <span className="text-[9px] uppercase tracking-[0.25em] text-studio-accent font-semibold block mb-1">
                  Location Index
                </span>
                <span className="font-serif text-lg text-studio-heading block">
                  Nagpur Center
                </span>
              </div>

              <div className="relative z-10 flex justify-between items-end">
                <span className="font-mono text-[10px] text-studio-body/60">
                  21.1458° N, 79.0882° E
                </span>
                <span className="text-[9px] uppercase tracking-widest text-studio-body/40">
                  Civil Lines Studio
                </span>
              </div>
            </div>

          </div>

          {/* Right Column - Zod Validated Inquiry Form */}
          <div className="lg:col-span-7 border border-studio-border bg-studio-card/30 p-8 md:p-12 relative flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!submitStatus?.success ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-studio-body/70 font-semibold font-sans">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="E.g., Devendra Sharma"
                        {...register("name")}
                        className={errors.name ? "border-red-500/70 focus-visible:border-red-500" : ""}
                      />
                      {errors.name && (
                        <span className="text-red-400 text-xs font-sans mt-1">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-studio-body/70 font-semibold font-sans">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="E.g., devendra@example.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500/70 focus-visible:border-red-500" : ""}
                      />
                      {errors.email && (
                        <span className="text-red-400 text-xs font-sans mt-1">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-studio-body/70 font-semibold font-sans">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="E.g., 9823012345"
                        {...register("phone")}
                        className={errors.phone ? "border-red-500/70 focus-visible:border-red-500" : ""}
                      />
                      {errors.phone && (
                        <span className="text-red-400 text-xs font-sans mt-1">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    {/* Service Dropdown */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="service" className="text-[10px] uppercase tracking-widest text-studio-body/70 font-semibold font-sans">
                        Service Category *
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        className="flex h-12 w-full border border-studio-border bg-studio-card px-4 py-2 text-sm text-studio-heading focus-visible:outline-none focus:border-studio-accent transition-colors duration-300 font-sans cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%23B8B5AF%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Architecture">Architecture Design</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Residential">Residential Villa</option>
                        <option value="Commercial">Commercial Workspace</option>
                        <option value="Turnkey">Turnkey Project</option>
                      </select>
                      {errors.service && (
                        <span className="text-red-400 text-xs font-sans mt-1">
                          {errors.service.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-studio-body/70 font-semibold font-sans">
                      Project Details & Requirements *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Outline site location, plot scale, and primary design goals..."
                      {...register("message")}
                      className={errors.message ? "border-red-500/70 focus-visible:border-red-500" : ""}
                    />
                    {errors.message && (
                      <span className="text-red-400 text-xs font-sans mt-1">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Error Notification */}
                  {submitStatus && !submitStatus.success && (
                    <div className="text-red-400 text-xs font-sans p-4 border border-red-500/20 bg-red-950/20">
                      {submitStatus.message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-studio-bg" />
                        Scheduling...
                      </>
                    ) : (
                      <>
                        Schedule a Consultation
                        <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </Button>
                </motion.form>
              ) : (
                /* Success screen rendering */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-studio-accent mb-6 animate-pulse" />
                  <h3 className="font-serif text-2xl md:text-3xl text-studio-heading mb-4">
                    Inquiry Transmitted
                  </h3>
                  <p className="text-sm text-studio-body/80 max-w-md leading-relaxed font-sans mb-8">
                    {submitStatus.message}
                  </p>
                  <Button
                    variant="secondary"
                    onClick={() => setSubmitStatus(null)}
                    size="default"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}
