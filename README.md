# Prisma + MongoDB [in Docker]

## Start

```bash
# generate mongo replica set keyfile
$ openssl rand -base64 756 > mongo/etc/mongod-keyfile
$ chmod 400 mongo/etc/mongod-keyfile

# Start docker
$ docker compose up
$ docker compose exec app yarn dev
```
