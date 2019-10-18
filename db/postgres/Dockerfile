FROM postgres:12.0-alpine  

ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD RABnooIBx9tSt2L2
ENV POSTGRES_DB docker 


ADD v1_create_tables.sql /docker-entrypoint-initdb.d/




EXPOSE 5432
