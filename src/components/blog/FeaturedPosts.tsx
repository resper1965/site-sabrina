import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";

const featuredPosts = [
  {
    title: "RN 623: O que muda na saúde suplementar e como isso te afeta?",
    excerpt: "Uma análise sobre as novas regras da ANS e como operadoras e beneficiários devem se preparar para as mudanças.",
    category: "Regulação",
    date: "23 Dez, 2025",
    readTime: "7 min",
    href: "/blog/rn-623-impactos-saude-suplementar"
  },
  {
    title: "Saúde Mental e Bem-Estar Corporativo: Produtividade de Verdade",
    excerpt: "Por que empresas que investem na saúde da mente colhem resultados extraordinários e equipes mais engajadas.",
    category: "Bem-estar",
    date: "21 Dez, 2025",
    readTime: "6 min",
    href: "/blog/saude-mental-e-bem-estar-corporativo"
  },
  {
    title: "Rede Credenciada: Por que o Relacionamento com Dentistas é o Maior Ativo?",
    excerpt: "O segredo para um plano odontológico de sucesso está na parceria e no respeito mútuo com quem entrega o cuidado.",
    category: "Gestão",
    date: "19 Dez, 2025",
    readTime: "8 min",
    href: "/blog/rede-credenciada-odontologica"
  }
];

export function FeaturedPosts() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">Destaques do Blog</h2>
            <p className="text-muted-foreground max-w-2xl">
              Confira os artigos mais recentes e populares sobre saúde, tecnologia e o mercado de saúde suplementar.
            </p>
          </div>
          <Link href="/blog">
            <Button variant="ghost" className="gap-2 group">
              Ver todos os posts <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow border-none bg-background">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary font-medium text-xs uppercase tracking-wider mb-2">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </div>
                <h3 className="text-xl font-serif font-bold leading-tight hover:text-primary transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-4 border-t flex justify-between items-center text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
                <span>{post.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
