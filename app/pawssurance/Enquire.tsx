import React from 'react';

export default function Enquire() {
  const features = [
    {
      image: '/images/calendar-icon.png',
      title: 'Any vet, Anywhere',
      description: 'Visit any licensed veterinarian, worldwide.'
    },
    {
      image: '/images/chat-icon.png',
      title: 'Live Vet 24/7',
      description: 'Chat with a licensed vet via text at your convenience.'
    },
    {
      image: '/images/support-icon.png',
      title: 'Expert Support',
      description: 'Petoty\'s team speacialists are just a call, chat or email away.'
    },
    {
      image: '/images/heart-icon.png',
      title: 'Pets are family',
      description: 'High-quality, accessible pet care should be accessible to all.'
    }
  ];

  return (
    <div className="w-full bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                style={{
                  backgroundColor: '#FFFAFA',
                  border: '1.31px solid #810955'
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
