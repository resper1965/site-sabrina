import { getAllPosts } from "@/lib/content-api";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, Tag } from "lucide-react";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-20 lg:px-8">
      <div className="mb-16 max-w-2xl">
        <h1 className="text-4xl font-serif font-bold mb-6 sm:text-5xl">Insights sobre Saúde & Gestão</h1>
        <p className="text-lg text-muted-foreground">
          Artigos, reflexões e tendências do setor de saúde suplementar e odontologia, escritos por Sabrina Barros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-all border-none bg-muted/30 hover:bg-background">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary font-medium text-[10px] uppercase tracking-widest mb-2">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </div>
                <h2 className="text-2xl font-serif font-bold leading-tight line-clamp-2">
                  {post.title}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-4 border-t flex justify-between items-center text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
                <span>{new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                })}</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
