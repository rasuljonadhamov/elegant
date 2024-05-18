
import { Icon } from '@mdi/react';
import { mdiTruck, mdiCurrencyUsd, mdiLock, mdiHeadset } from '@mdi/js';

const features = [
  { icon: mdiTruck, title: 'Free Shipping', description: 'Order over $100' },
  { icon: mdiCurrencyUsd, title: 'Money-back', description: '30 days money-back' },
  { icon: mdiLock, title: 'Secure Payments', description: 'Safe & reliable' },
  { icon: mdiHeadset, title: '24/7 Support', description: 'Customer support' },
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center p-4 bg-white shadow-md">
            <Icon path={feature.icon} size={2} />
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
