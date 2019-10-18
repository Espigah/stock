#FROM openjdk:8-jre
#VOLUME /tmp
#ARG JAR_FILE
#ADD ${JAR_FILE} stock-0.0.1-SNAPSHOT.jar
#RUN bash -c 'touch /stock-0.0.1-SNAPSHOT.jar'
#EXPOSE 8080
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=container","-jar","/stock-0.0.1-SNAPSHOT.jar"]



FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY build/libs/stock-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=container", "-jar", "/app.jar"]
