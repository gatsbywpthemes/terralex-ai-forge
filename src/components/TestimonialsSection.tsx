
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  rating: number;
  industry: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Operations Director",
      company: "GreenTech Solutions",
      quote:
        "Terralex transformed our marketing operations with their AI automation solutions. We've seen a 40% increase in campaign performance while reducing the workload on our team.",
      rating: 5,
      industry: "Clean Energy",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "Rapid Logistics",
      quote:
        "The logistics automation platform from Terralex has revolutionized our delivery operations. Route optimization alone saved us 30% in fuel costs and improved delivery times by 25%.",
      rating: 5,
      industry: "Transportation",
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Marketing Manager",
      company: "Nova Retail",
      quote:
        "As a growing retail business, we needed to scale our operations efficiently. Terralex helped us implement AI-powered inventory management that reduced stockouts by 65%.",
      rating: 4,
      industry: "Retail",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding">
      <div className="terralex-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-monument mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-foreground/70">
            Hear from SMBs that have transformed their operations with our AI automation solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="brutalist-card p-8 md:p-12 bg-gradient-to-br from-terralex-purple/5 to-terralex-teal/5">
            <div className="mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[activeIndex].rating
                        ? "text-terralex-purple fill-terralex-purple"
                        : "text-foreground/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl italic mb-8 font-light">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h4 className="text-lg font-semibold">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-foreground/70">
                  {testimonials[activeIndex].position} at{" "}
                  {testimonials[activeIndex].company}
                </p>
                <span className="inline-block py-1 px-3 bg-terralex-purple/10 text-terralex-purple text-xs rounded-full mt-2">
                  {testimonials[activeIndex].industry}
                </span>
              </div>

              <div className="flex gap-2 mt-6 md:mt-0">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-foreground/20 hover:bg-foreground/5"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-foreground/20 hover:bg-foreground/5"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 -left-3 w-full h-full border border-foreground/20 rounded-lg -z-10"></div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-monument mb-4">Trusted by innovative SMBs</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {["Retail", "Healthcare", "Manufacturing", "Logistics", "Finance", "Technology"].map(
              (industry) => (
                <div
                  key={industry}
                  className="py-2 px-4 border border-foreground/20 rounded-md text-foreground/70"
                >
                  {industry}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
