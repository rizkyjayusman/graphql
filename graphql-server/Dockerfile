FROM maven:3.9.4-eclipse-temurin-21 AS builder

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

COPY --from=builder /app/target/graphql-server-1.0.0.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
