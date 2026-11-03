import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

function devContactPlugin() {
  const handler = async (req, res, next) => {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          const data = JSON.parse(body || '{}');
          const { fullName, email, description, website_hp, companyName, projectType, timeline } = data;

          if (website_hp) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
            return;
          }

          if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Valid full name is required.' }));
            return;
          }

          if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Valid email address is required.' }));
            return;
          }

          if (!description || typeof description !== 'string' || description.trim().length < 15) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: 'Description must be at least 15 characters.' }));
            return;
          }

          console.log('\n[CONTACT INQUIRY RECEIVED IN DEV SERVER]');
          console.log({
            fullName,
            email,
            companyName: companyName || 'Not specified',
            projectType: projectType || 'General',
            timeline: timeline || 'Flexible',
            description,
            timestamp: new Date().toISOString(),
          });

          const apiKey = process.env.RESEND_API_KEY;
          if (apiKey && apiKey !== 're_your_api_key_here') {
            try {
              const { Resend } = await import('resend');
              const resend = new Resend(apiKey);
              await resend.emails.send({
                from: process.env.CONTACT_FROM_EMAIL || 'Avinash Sahni <onboarding@resend.dev>',
                to: [process.env.CONTACT_NOTIFICATION_EMAIL || 'avinash@avinashsahni.com'],
                replyTo: email,
                subject: `[Inquiry] ${fullName} - ${projectType || 'Project Inquiry'}`,
                text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${companyName}\nType: ${projectType}\nTimeline: ${timeline}\n\nDescription:\n${description}`,
              });
            } catch (err) {
              console.error('Error dispatching via Resend in dev:', err);
            }
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, message: 'Inquiry received successfully!' }));
        } catch (err) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload.' }));
        }
      });
      return;
    }
    next();
  };

  return {
    name: 'dev-contact-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/contact', handler);
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://avinashsahni.com',
  trailingSlash: 'never',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
    mdx(),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [devContactPlugin()],
  },
});
