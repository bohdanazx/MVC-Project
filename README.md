# System zarządzania listą zadań do przeczytania 

## Spis treści
1. [Opis projektu](#opis-projektu)
2. [Funkcjonalności](#funkcjonalności)
3. [Instrukcje obsługi](#instrukcje-obsługi)
4. [Uruchamianie aplikacji](#uruchamianie-aplikacji)
5. [Wymagane paczki](#wymagane-paczki)
6. [Pobieranie i instalacja](#pobieranie-i-instalacja)
7. [Przykładowe dane](#przykładowe-dane)

## Opis projektu
Projekt polega na stworzeniu systemu zarządzania listą zadań do przeczytania. Użytkownicy będą mogli dodawać nowe pozycje do listy, oznaczać książki jako przeczytane, usuwać je z listy oraz edytować informacje o każdej pozycji.

## Funkcjonalności
- **Dodawanie nowych pozycji**: Użytkownicy mogą dodawać nowe książki do listy, podając ich tytuł, autora i gatunek.
- **Oznaczanie książek jako przeczytane**: Użytkownicy mogą oznaczać książki jako przeczytane, co zmienia ich status na liście.
- **Usuwanie książek**: Użytkownicy mogą usuwać książki z listy.
- **Edycja informacji o książce**: Użytkownicy mogą edytować informacje o każdej książce, takie jak tytuł, autor i gatunek.

## Instrukcje obsługi
1. **Dodawanie nowych pozycji**: Aby dodać nową książkę, należy przejść do zakładki "Nowe zadanie" lub odpowiedniego formularza i podać tytuł, autora i opcjonalnie gatunek książki, a następnie kliknąć przycisk "Dodaj zadanie".
2. **Oznaczanie książek jako przeczytane**: Aby oznaczyć książkę jako przeczytaną, należy kliknąć przycisk "Oznacz jako przeczytaną" obok odpowiedniej pozycji na liście.
3. **Usuwanie książek**: Aby usunąć książkę z listy, należy kliknąć przycisk "Usuń" obok odpowiedniej pozycji na liście.
4. **Edycja informacji o książce**: Aby edytować informacje o książce, należy kliknąć przycisk "Edytuj" obok odpowiedniej pozycji na liście i wprowadzić nowe dane do formularza edycji.

## Uruchamianie aplikacji
Aby uruchomić aplikację lokalnie, należy:
1. Pobrać kod źródłowy z repozytorium.
2. Zainstalować wymagane paczki, uruchamiając komendę `npm install`.
3. Uruchomić aplikację, używając komendy `npm start` lub `node server.js`.

## Wymagane paczki
Do uruchomienia aplikacji wymagane są następujące paczki:
- express
- mongoose
- dotenv
- ejs

## Pobieranie i instalacja
Aby pobrać kod źródłowy z repozytorium i zainstalować wymagane paczki, należy:
1. Sklonować repozytorium za pomocą komendy `git clone URL_REPOZYTORIUM`.
2. Przejść do katalogu projektu.
3. Zainstalować wymagane paczki, używając komendy `npm install`.

## Przykładowe dane
Projekt nie wymaga danych testowych, ponieważ użytkownicy mogą sami dodawać nowe pozycje do listy.
