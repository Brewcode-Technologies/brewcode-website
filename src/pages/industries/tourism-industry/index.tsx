import { Metadata } from 'next';
import Layout from '@component/components/layouts/layout';

import Image from 'next/image';
import React from 'react';
import { pageMetadata } from '@component/lib/metadata';

export const metadata: Metadata = pageMetadata.industries.tourism;

const Index: React.FC = () => {
  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '70vh',
        }}
      >
        <div className="cloud-image p-4">
          <Image
            src="/images/img.jpg"
            alt="cyber security image"
            fill
            className="mb-3 hero-cloud"
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="hero-section-content">
              <h1 className="cyber-security-services-heading mb-3">Tourism Industry</h1>

              <p className=" services-description text-center">
                Exhibit your digital footprint on various gadgets with a Responsive
                <br /> UI development approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
