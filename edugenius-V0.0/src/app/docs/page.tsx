
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
    title: "Documentation - EduGenius",
    description: "Learn how to use EduGenius with our official documentation. Find guides on using the AI tutor, test generator, and other features.",
};

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 container px-4 md:px-6 py-12">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <h1 className="text-4xl font-headline md:text-5xl">Documentation</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Welcome to the official EduGenius documentation.
            </p>
        </div>
        
        <Card>
            <CardHeader>
                <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    This documentation is currently under construction. Please check back later for detailed guides and tutorials on how to make the most of EduGenius.
                </p>
                <p className="mt-4 text-muted-foreground">
                    Our goal is to provide comprehensive instructions for all features, including the AI Tutor, Test Generator, Career Counselor, and more.
                </p>
            </CardContent>
        </Card>

      </main>
       <footer className="py-6 text-center text-sm text-primary/60 border-t">
        <p>© {new Date().getFullYear()} EduGenius. All rights reserved.</p>
      </footer>
    </div>
  );
}
