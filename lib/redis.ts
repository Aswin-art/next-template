import Redis from "ioredis";

const getRedisUrl = () => {
  if (process.env.REDIS_URL) {
    return process.env.REDIS_URL;
  }

  throw new Error("Redis Url is not found!");
};

export const redis = new Redis(getRedisUrl());
