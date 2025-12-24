import { getPostBySlug, getAllPosts } from "@/lib/content-api";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-20 lg:px-8 max-w-4xl">
      <Link href="/blog">
        <Button variant="ghost" size="sm" className="mb-8 gap-2 -ml-4">
          <ArrowLeft className="h-4 w-4" /> Voltar ao Blog
        </Button>
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-2 text-primary font-medium text-xs uppercase tracking-[0.2em] mb-4">
          <Tag className="h-3 w-3" />
          {post.category}
        </div>
        <h1 className="text-4xl font-serif font-bold mb-6 sm:text-6xl leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime} de leitura
          </div>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric"
          })}</span>
        </div>
      </header>

      <div className="prose prose-slate lg:prose-xl max-w-none dark:prose-invert font-sans leading-relaxed">
        <MDXRemote source={post.content} />
      </div>

      <footer className="mt-20 pt-8 border-t">
        <div className="bg-muted/50 rounded-2xl p-8 flex flex-col items-center text-center">
          <h3 className="text-xl font-serif font-bold mb-4">Sabrina Barros</h3>
          <p className="text-muted-foreground text-sm max-w-md mb-6">
            Dentista e Executiva de Saúde Suplementar. Apaixonada por transformar o setor de saúde através da gestão e tecnologia.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/sabrina-barros/" target="_blank" rel="noopener">
              <Button size="sm" variant="outline" className="rounded-full">Siga no Linkedin</Button>
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
