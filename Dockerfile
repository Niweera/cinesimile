# Build Project
# ------------------------------------------------------
FROM node:lts-buster-slim as builder

WORKDIR /frontend

COPY package*.json ./

RUN npm install --only=production --silent

COPY . .

RUN npm run build

RUN rm -rf node_modules public src *.json

# Production
# ------------------------------------------------------
FROM alpine:3.7
COPY --from=builder /frontend/build ./www

# Add nginx
RUN apk add --update nginx

# Create the directories workflow
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

# Copy the nginx configuration files
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# copy the built app to our served directory
RUN cp -r www/* /var/www/html

# make all files belongs to the nginx user
RUN chown nginx:nginx /var/www/html

EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]