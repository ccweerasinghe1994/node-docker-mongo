FROM node:22.6-alpine

# Install shadow package to get useradd command
# this is needed because the node:alpine image does not have the useradd command
RUN apk add --no-cache shadow

# this is needed to run the app as a non-root user
RUN useradd -ms /bin/sh -u 1001 app



# Install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN chown -R app:app /app
USER app
RUN npm install

# Copy source files into application directory
COPY --chown=app:app . .