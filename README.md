# Shiba Studios - kalendarz adwentowy

Prosty statyczny kalendarz adwentowy dla `shiba-studios.com`.

## Co jest gotowe

- 24 okienka w responsywnej siatce.
- Wszystkie okienka są klikalne niezależnie od daty.
- Kliknięcie otwiera okno z przykładową treścią i miejscem na obraz.
- Strona działa bez backendu, bazy danych i instalowania zależności.
- Projekt jest gotowy do hostowania na GitHub Pages.

## Pliki

- `index.html` - struktura strony.
- `styles.css` - wygląd strony.
- `script.js` - generowanie okienek i obsługa okna po kliknięciu.
- `CNAME` - informacja dla GitHub Pages, że strona ma działać pod `shiba-studios.com`.

## Jak uruchomić lokalnie

Wystarczy otworzyć plik `index.html` w przeglądarce.

## Jak wrzucić na GitHub Pages

1. Utwórz nowe repozytorium na GitHubie, na przykład `shiba-studios-advent`.
2. Wgraj do repozytorium pliki: `index.html`, `styles.css`, `script.js`, `CNAME`.
3. Wejdź w `Settings` repozytorium.
4. Otwórz sekcję `Pages`.
5. W `Build and deployment` wybierz:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - folder: `/root`
6. Zapisz ustawienia.
7. Po chwili GitHub pokaże adres strony, zwykle w formacie:
   `https://twoj-login.github.io/shiba-studios-advent/`

## Jak podpiąć domenę shiba-studios.com

1. W repozytorium na GitHubie wejdź w `Settings` -> `Pages`.
2. W polu `Custom domain` wpisz:
   `shiba-studios.com`
3. Zapisz ustawienie.
4. GitHub utworzy lub będzie oczekiwał pliku `CNAME` z treścią:
   `shiba-studios.com`
5. U dostawcy domeny ustaw rekordy DNS.

Dla domeny głównej `shiba-studios.com` dodaj rekordy `A`:

```txt
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Dla `www.shiba-studios.com` dodaj rekord `CNAME`:

```txt
www -> twoj-login.github.io
```

Po zmianie DNS odczekaj od kilku minut do 24 godzin. Potem w `Settings` -> `Pages` włącz `Enforce HTTPS`, jeśli GitHub już na to pozwala.

## Gdzie zmieniać treści okienek

Treści są w pliku `script.js`, w tablicy `surprises`.

Przykład:

```js
{
  day: 1,
  title: "Niespodzianka dnia 1",
  text: "Tutaj wpisz docelową treść."
}
```

Później można tam dodać też obrazy, linki, kody rabatowe albo blokadę okienek do konkretnej daty.
