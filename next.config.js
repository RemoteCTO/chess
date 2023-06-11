/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Will be available on both server and client
    defaultFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  },
}

module.exports = nextConfig
