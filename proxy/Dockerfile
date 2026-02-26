# ---- Build stage not needed (zero npm deps) ----
FROM node:22-alpine

# Run as non-root for security
RUN addgroup -S proxy && adduser -S proxy -G proxy

WORKDIR /app

COPY package.json server.js ./

# No npm install — zero dependencies

USER proxy

EXPOSE 8080

ENV PORT=8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:${PORT}/ || exit 1

CMD ["node", "server.js"]
