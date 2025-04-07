
import { BarChart, BrainCircuit, Truck } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <BrainCircuit className="w-10 h-10 text-terralex-purple" />,
      title: "Marketing Automation",
      description:
        "Automate your marketing campaigns, customer segmentation, and personalized outreach with our AI-powered marketing solutions.",
      benefits: ["AI-driven customer insights", "Personalized content generation", "Campaign optimization"],
    },
    {
      icon: <BarChart className="w-10 h-10 text-terralex-purple" />,
      title: "Operations Automation",
      description:
        "Streamline your business operations with intelligent workflows, predictive analytics, and automated decision-making processes.",
      benefits: ["Process optimization", "Resource allocation", "Predictive maintenance"],
    },
    {
      icon: <Truck className="w-10 h-10 text-terralex-purple" />,
      title: "Logistics Automation",
      description:
        "Enhance your supply chain with AI-powered logistics automation, route optimization, and inventory management.",
      benefits: ["Route optimization", "Inventory forecasting", "Demand prediction"],
    },
  ];

  return (
    <section id="features" className="section-padding bg-foreground/5">
      <div className="terralex-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-monument mb-4">
            Intelligent <span className="text-gradient">Automation</span> Solutions
          </h2>
          <p className="text-foreground/70">
            Our comprehensive suite of AI-powered tools designed specifically for SMBs
            looking to streamline operations and boost productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="brutalist-card hover:translate-y-[-4px] group"
            >
              <div className="mb-6 p-4 inline-block rounded-md bg-terralex-purple/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-monument mb-3">{feature.title}</h3>
              <p className="text-foreground/70 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-terralex-purple"></span>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
