FROM maven:3.5-jdk-8-alpine as builder

WORKDIR /app

COPY pom.xml ./
COPY ./src ./src/
COPY ./static ./static/


RUN mvn package -DskipTests



FROM openjdk:8-jre-alpine

ARG version
WORKDIR /app
COPY --from=builder /app/target/product-service-${version}.jar ./product-service.jar
COPY --from=builder /app/static ./static
EXPOSE 8080

ENTRYPOINT ["sh", "-c"]
CMD ["java -jar product-service.jar"]