"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/10 shadow-2xl">
                <Image
                  src="/sabrinabarros-perfil.png"
                  alt="Sabrina Barros"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-xs font-bold">SB</span>
              </div>
            </motion.div>

            <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              Sabrina Barros
            </h1>
            <p className="text-xl text-primary font-medium tracking-wide uppercase mb-8">
              Estrategista e Conselheira de Saúde Suplementar
            </p>
            <div className="prose prose-slate lg:prose-lg max-w-2xl text-muted-foreground leading-relaxed">
              <p>
                Apoiando lideranças e organizações na mitigação de riscos, desenvolvimento de projetos complexos e transições executivas de alto impacto no setor de saúde.
              </p>
            </div>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/blog">
              <Button size="lg" className="rounded-full px-8 text-lg">
                Explorar Insights
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg">
                Falar com Sabrina
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
