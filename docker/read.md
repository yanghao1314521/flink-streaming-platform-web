docker build -t  registry.cn-hangzhou.aliyuncs.com/flink-streaming-platform-web/flink-web:flink-1.13.2-20220327 ./



docker build -t  flink-web:flink-1.14.6-20221024 ./build

docker-compose build

docker-compose up -d
docker-compose down
docker-compose restart

docker build --no-cache -t  registry.cn-hangzhou.aliyuncs.com/flink-streaming-platform-web/flink-web:flink-1.13.2-20220327 ./