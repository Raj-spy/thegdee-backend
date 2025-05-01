export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'default-secret-key'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'M+nL4BQLWXJlVVzrLlDvng=='),
  },
  url: '/admin', // ✅ This makes sure admin panel works on any IP, not just localhost
  host: '0.0.0.0', // ✅ Makes it accessible from other devices
  port: 1337,      // Make sure your Strapi app listens on this port
});
