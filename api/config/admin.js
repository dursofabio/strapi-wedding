module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5347596f533fc525d9a863913fae7bd1'),
  },
});
