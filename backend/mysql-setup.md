# INSTALLATION

- Install the package: `sudo apt-get install mysql-server`

- Start MySQL service: `sudo systemctl start mysql`

- Default password for root user in: `/var/log/mysqld.log`

# CMD UI

- mysql -u root -p

# CREATE USER AND DATABASE

- CREATE USER "test"@"localhost" IDENTIFIED BY "EastLaos312#";

- CREATE DATABASE EastLaos;

- GRANT ALL PRIVILEGES ON EastLaos.* TO "test"@"localhost";

# CREATE SCHEMA 

- mysql -u test -p < src/db/schema.sql
