import Image from "next/image";

export function SocialProof() {
  const logos = [
    { name: "Ness", src: "/logo-ness.png", isText: true },
    { name: "Ionic Health", src: "/logo-ionic.png" },
    { name: "Bekaa", src: "/logo-bekaa.png" },
    { name: "Baalbeck", src: "/logo-baalbeck.png" },
  ];

  return (
    <section className="py-12 bg-muted/30 border-y border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-10">
          Empresas que confiam na minha visão estratégica
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-32 opacity-70 grayscale hover:opacity-100 transition-all duration-700">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center min-w-[100px] group">
              {logo.isText ? (
                <span className="text-2xl font-black tracking-tighter text-primary/80 group-hover:text-primary transition-colors">
                  {logo.name.toUpperCase()}
                </span>
              ) : (
                <Image
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  width={160}
                  height={50}
                  className="h-10 w-auto object-contain group-hover:scale-110 transition-transform"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
