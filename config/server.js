module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['L23U7LrlbC6NjaGYpmrFfrbfFZ4fRYxtM5b/EAlBp9o=']
  },
});
