import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { title = 'Brewcode Technology', description = 'Build the Future' } = req.query;
  
  // Generate SVG image
  const svg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#0f172a"/>
      <text x="600" y="200" font-family="Arial, sans-serif" font-size="72" fill="white" text-anchor="middle">🚀</text>
      <text x="600" y="300" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">${title}</text>
      <text x="600" y="400" font-family="Arial, sans-serif" font-size="24" fill="#04CAA8" text-anchor="middle">${description}</text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.status(200).send(svg);
}