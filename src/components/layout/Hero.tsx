"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium tracking-wider uppercase text-muted-foreground mb-6">
              Saúde & Gestão
            </div>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              Insights sobre <span className="text-primary italic">Saúde Suplementar</span>, Gestão e Bem-estar.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Sabrina Barros compartilha conhecimento claro e relevante sobre regulação, liderança corporativa e a excelência na jornada do beneficiário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2">
                Explorar o Blog <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Sobre Sabrina
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <Image 
                src="/hero-image.jpg" 
                alt="Sabrina Barros" 
                width={800} 
                height={1000} 
                className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
            {/* Elegant Floating Elements */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-background p-6 shadow-xl border md:block hidden">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-serif font-bold text-primary">15+</span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Anos de Experiência</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
