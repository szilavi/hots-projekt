Az oldal működéséhez ki kell adni a `json-server --watch server/heroes.json`, majd az `ng serve` parancsot.

Ahogy a nyitóoldalon is látszik, ez az oldal azt a célt szolgálja, hogy menedzseljük a Heroes of the Storm hőseinket.

Be lehet állítani, hogy bent van-e a könyvtárunkban, fel lehet venni újabb hőst, és a szintjét is kalibrálhatjuk.

Mivel kérték, hogy legyen benne egy "DELETE" metódus is, így beleraktam, az indoklás pedig csak egy vicces gondolat a "home" oldalon, hogy ha kitörlöd, akkor nem kapod ezt a hőst ki a ranked módban a játékon belül ellenfélként ( ha ezt meg lehetne csinálni egy oldalon gamerek százezrei imádnának :) ).

A feladat még kérte, hogy reszponzív legyen, erre törekedtem, de a "list" oldalon kértet, miszerint egy sorban négy legyen nem készítettem el, mert nagyon tetszik így az oldal. Azon kívül mindenhol törekedtem rá, hogy bármilyen eszközön nézve szép ( de leginkább használható ) legyen.

Bootstrap-en kívül semmit sem használtam az elkészítéséhez, a designe-t a hivatalos oldal inspirálta.

Ha esetleg a hősök száma olyan nagy lenne, hogy Observable-val akadozna az oldal működése, akkor kikommentezve a BehaviorSubject CRUD-ja is megtalálható a serviceben.
