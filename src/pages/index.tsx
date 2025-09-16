import { Metadata } from 'next';
import Home from './home';
import React from 'react';
import { pageMetadata } from '@component/lib/metadata';

export const metadata: Metadata = pageMetadata.home;

const Index: React.FC = () => {
  return <Home />;
};

export default Index;
