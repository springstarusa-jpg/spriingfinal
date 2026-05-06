import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}