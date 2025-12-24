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
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 lg:gap-24 opacity-60 grayscale hover:opacity-100 transition-opacity duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center min-w-[120px]">
              {logo.isText ? (
                <span className="text-2xl font-bold tracking-tighter text-primary/80">
                  {logo.name.toUpperCase()}
                </span>
              ) : (
                <Image
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
