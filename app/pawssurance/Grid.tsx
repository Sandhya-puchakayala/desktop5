import React from 'react';

export default function Grid() {
  const features = [
    {
      image: '/images/assistance.png',
      title: 'Claims Assistant',
      description: 'Meet Evie, she is here to walk you through the process & make it hassle-free.'
    },
    {
      image: '/images/stars.png',
      title: 'Explore',
      description: 'Wherever you roam, discover and save pet-friendly services near you.'
    },
    {
      image: '/images/records.png',
      title: 'Digital records',
      description: 'Don\'t lose track of what\'s important. Vet records & more, all in one spot.'
    },
    {
      image: '/images/pet tag.png',
      title: 'Your Pet Tag',
      description: 'This little tag can help reunite you, should your pet go missing.'
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
