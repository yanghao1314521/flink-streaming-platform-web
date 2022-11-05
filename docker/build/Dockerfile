FROM  centos:7

RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo 'Asia/Shanghai' >/etc/timezone \
    && yum -y install kde-l10n-Chinese wget java-1.8.0-openjdk-devel  && yum -y reinstall glibc-common  \
    && localedef -c -f UTF-8 -i zh_CN zh_CN.utf8 \
    && mkdir -p /data/projects/ \
    && cd /data/projects/ \
    &&  wget https://dlcdn.apache.org/flink/flink-1.14.6/flink-1.14.6-bin-scala_2.12.tgz --no-check-certificate \
    &&  -q -O  /data/projects/flink-1.14.6-bin-scala_2.12.tgz \
    && tar -zxf flink-1.14.6-bin-scala_2.12.tgz \
    && rm -rf flink-1.14.6-bin-scala_2.12.tgz   \
    && cd /data/projects/flink-1.14.6/lib/ \
    && wget https://repo1.maven.org/maven2/com/ververica/flink-sql-connector-mysql-cdc/2.2.1/flink-sql-connector-mysql-cdc-2.2.1.jar --no-check-certificate \
    && wget https://repo.maven.apache.org/maven2/org/apache/flink/flink-connector-jdbc_2.12/1.14.6/flink-connector-jdbc_2.12-1.14.6.jar --no-check-certificate \
    && cd /data/projects/ && chown  -R root:root flink-1.14.6 \
    && yum -y uninstall wget \
    && yum clean all
ENV LC_ALL zh_CN.utf8
WORKDIR /data/projects/
ADD  flink-streaming-platform-web.tar.gz  /data/projects/
COPY  app-start.sh  /data/projects/
ENTRYPOINT bash  app-start.sh
EXPOSE  9084 5007   8081