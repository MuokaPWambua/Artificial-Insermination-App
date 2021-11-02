FROM node:alpine as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install --legacy-peer-deps
RUN npm install --save --legacy-peer-deps react react-dom react-scripts google-maps-react


COPY . ./


RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/cert.pem /etc/ssl/certs/cert.pem
COPY nginx/cloudflare.crt /etc/ssl/certs/cloudflare.crt
COPY nginx/key.pem /etc/ssl/private/key.pem
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
