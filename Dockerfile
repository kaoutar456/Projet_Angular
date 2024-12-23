FROM node:16
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
CMD ["npx", "serve", "-s", "dist/poduct-project"]
EXPOSE 5000
