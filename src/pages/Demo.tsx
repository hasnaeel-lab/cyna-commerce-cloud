
import DemoHero from '@/components/demo/DemoHero';
import DemoVideo from '@/components/demo/DemoVideo';
import DemoProductShowcase from '@/components/demo/DemoProductShowcase';
import DemoCTA from '@/components/demo/DemoCTA';

const Demo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DemoHero />
      <DemoVideo />
      <DemoProductShowcase />
      <DemoCTA />
    </div>
  );
};

export default Demo;
