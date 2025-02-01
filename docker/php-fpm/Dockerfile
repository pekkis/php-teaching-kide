FROM php:8.2-fpm

RUN apt-get update

RUN apt-get install -y zlib1g-dev libpng-dev libjpeg-dev
# RUN apt-get install -y libpq-dev
# RUN docker-php-ext-install pdo pdo_pgsql
RUN docker-php-ext-install mysqli

RUN docker-php-ext-install gd
# RUN docker-php-ext-install exif
# RUN docker-php-ext-install intl


RUN docker-php-ext-install exif

RUN apt-get install -y libzip-dev
RUN docker-php-ext-install zip

RUN apt-get install -y libicu-dev
RUN docker-php-ext-install intl

RUN apt-get update; \
    apt-get install -y libmagickwand-dev; \
    pecl install imagick; \
    docker-php-ext-enable imagick;

