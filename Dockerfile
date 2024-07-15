# Use a lightweight web server image
FROM nginx:alpine

# Copy the HTML files from your local machine to the nginx directory
COPY pawpal-help-center /usr/share/nginx/html
