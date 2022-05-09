# Flarum Refernces

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/aradeid/flarum-references.svg)](https://packagist.org/packages/aradeid/flarum-references)

**Extensia nu este publicată pe [Packagist](https://packagist.org/)!**

În multe articole este binevenit ca informația prezentată să aibă o sursă credibilă.

Aceasta este o extensie [Flarum](https://flarum.org/) care oferă posibilitatea utilizatorilor, atunci când scriu un articol sau comentariu, să însereze și referințele de unde a fost accesată informația.

Pentru a adăuga o referință în articol sau comentariu este necesar ca:

1. cursorul să fie amplasat in text, acolo unde se dorește adăugarea legăturii
2. să fie apăsat butonul pentru referințe, indicat în imaginea de mai jos, aceasta va deschide o fereastră pentru selectarea tipului de referință

![](https://i.imgur.com/dKmxKj1.png)

3. în fereastra deschisă, imaginea de mai jos, trebuie selectată una din tipurile propuse de referințe

![](https://i.imgur.com/71evXWP.png)

4. în dependență de tipul de referintă selectat, trebuie completate câmpurile cerute
5. după completare, trebuie apăsat butonul `Adaugare`

![](https://i.imgur.com/k2WoYna.png)

6. la apăsarea pe butonul `Adaugare` în câmpul pentru articol sau comentariu va fi adăugată referința

![](https://i.imgur.com/pMbgWBH.png)

7. după publicare, conținutul va fi procesat, iar rezultatul este prezentat în imaginea de mai jos

![](https://i.imgur.com/NhpzSFI.png)

## Compatibilitate

Această extensie este compatibilă cu versiunea `1.2.1` de [Flarum](https://flarum.org/).

## Instalare

Pentru instalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer require aradeid/flarum-references *@dev
```

## Actualizare

Pentru actualizarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer update aradeid/flarum-references
php flarum cache:clear
```

## Dezinstalare

Pentru dezinstalarea extensiei trebuie executată următoarea comandă Composer:

```sh
composer remove aradeid/flarum-references
php flarum cache:clear
```

## Link-uri utile

- [Cod sursă pe GitHub](https://github.com/aradeid/flarum-references)
- [Changelog](CHANGELOG.md)