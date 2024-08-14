import { redis } from "@/lib/redis";

redis.get("user", (err) => {
  console.log(err);
});
