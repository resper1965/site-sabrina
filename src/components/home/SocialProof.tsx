import Image from "next/image";

export function SocialProof() {
  const logos = [
    { name: "ness.", isText: true },
    { name: "trustness.", isText: true },
    { name: "forense.io", isText: true },
    { name: "Ionic Health", src: "/ionic_hor_escalacinzaescuro.png" },
    { name: "Bekaa", src: "/bekaa.png" },
    { name: "Baalbeck", src: "/logo-baalbeck.png" }, // Using the one already in public
  ];

  return (
    <section className="py-16 bg-muted/20 border-y border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-12">
          Empresas que confiam na minha visão estratégica
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-24 opacity-80 grayscale hover:opacity-100 transition-all duration-700">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center group transform transition-all hover:scale-105">
              {logo.isText ? (
                <span className="text-2xl md:text-3xl font-medium tracking-tight font-montserrat text-primary/70 group-hover:text-primary transition-colors">
                  {logo.name}
                </span>
              ) : (
                <Image
                  src={logo.src!}
                  alt={`Logo ${logo.name}`}
                  width={200}
                  height={60}
                  className="h-10 md:h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
