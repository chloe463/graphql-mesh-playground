FROM node:18.17.0-slim AS base

WORKDIR /app

# Build the app
#-----------------------------------------------
RUN yarn install --immutable

ENV NODE_ENV production

COPY . .
RUN yarn build

# Run the app
#-----------------------------------------------
# Timezone
ENV TIMEZONE Asia/Tokyo

CMD ["yarn", "start"]

