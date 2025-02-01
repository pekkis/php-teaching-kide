# Kide assignment

## What is this?

I'm trying to do the assignment(s) of the students myself. In logical, semantic, rewindable commits with good commit messages documenting of my work.

I'm really NOT a Wordpress person, so I'm just learning by doing here!

## Requirements

- Docker
- Composer
  - I installed myself a local PHP with composer via following [Laravel's instructions](https://laravel.com/docs/11.x/installation)
- MariaDB or MySQL client to connect to the MariaDB database
  - `brew install mariadb` is an easy way to get the client, it will install the local server too.
  - `brew services mariadb stop` to stop the local server if you get port binding error in 3306

## Development

- `composer install`
- `docker compose up`
- surf to `http://localhost:8080`

### Connecting to MariaDB

- `mysql --host=127.0.0.1 --user=root --password=rootpassu wordpress`
  - `SHOW TABLES;`
