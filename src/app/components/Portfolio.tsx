export default function Portfolio() {
  const steps = [
    {
      title: "Discovery",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    },
    {
      title: "Design",
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.",
    },
    {
      title: "Strategy",
      description:
        "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
      highlight: true,
    },
    {
      title: "Build",
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] text-white py-16 px-4 md:px-12 rounded-t-[40px]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full border border-white rotate-90"></div>
            <span className="text-sm uppercase tracking-wider text-white/70">
              Work Process
            </span>
          </div>
          <h2 className="text-4xl font-bold">My Work Process</h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                step.highlight
                  ? "bg-lime-400 text-black rotate-[1deg] hover:rotate-0"
                  : "bg-[#1a1a1a] text-white"
              }`}
            >
              {/* Title & Read More */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-sm font-semibold px-4 py-1 rounded-full ${
                    step.highlight
                      ? "bg-black text-white"
                      : "bg-[#b9fbc0] text-black"
                  }`}
                >
                  {step.title}
                </span>
                <span className="text-sm underline hover:text-lime-300 cursor-pointer">
                  → Read More
                </span>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
