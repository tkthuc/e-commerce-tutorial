FROM maven:3.5-jdk-8-alpine as builder

WORKDIR /app

COPY pom.xml ./
COPY ./src ./src/

RUN mvn package -DskipTests



FROM openjdk:8-jre-alpine

ARG version
WORKDIR /app
COPY --from=builder /app/target/authorization-service-${version}.jar ./auth-service.jar
EXPOSE 8081

ENTRYPOINT ["sh", "-c"]
CMD ["java -jar auth-service.jar"]