import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must not exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number is too long." })
    .regex(/^[+]?[0-9\s-]+$/, {
      message: "Please enter a valid phone number (digits and spaces only).",
    }),
  service: z.enum(
    [
      "Residential Architecture",
      "Interior Design",
      "Home Renovation",
      "Commercial & Office Design",
      "Institutional Architecture",
      "3D Visualization",
      "General Inquiry"
    ],
    {
      message: "Please select a service category.",
    }
  ),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must not exceed 1000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
