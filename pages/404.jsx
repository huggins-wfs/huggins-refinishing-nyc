import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <Head><title>Page not found</title><meta name="robots" content="noindex" /></Head>
      <section className="wrap py-32 text-center">
        <h1 className="text-5xl">This page has moved</h1>
        <p className="mt-4 text-ink/70">The floor is still here. Start again from the home page.</p>
        <Link href="/" className="btn-ink mt-8">Back to home</Link>
      </section>
    </Layout>
  );
}
