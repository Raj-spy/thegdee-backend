export default ({ env }) => ({
    upload: {
      provider: 'local',  // Using the local file system for uploads
      providerOptions: {
        sizeLimit: 100000000, // Set a file size limit (e.g., 10MB)
      },
    },
  });
  