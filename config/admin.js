module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '17d5aec4fd056aa6424d732b49a2ba88'),
  },
});
