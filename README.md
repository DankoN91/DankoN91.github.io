# StockApp
Zavrsni projekat za ITBootcamp. Dostupan na https://dankon91.github.io

StockAPP je aplikacija za praćenje podataka sa berze, kao i za ispisivanje aktuelnih finansijskih vesti.
Koristi podatke povučene sa API veb-sajta www.finnhub.io, kako za podatke o akcijama kompanija, tako i
za vesti.

OPIS APLIKACIJE

Aplikacija se sastoji od tri rute, /login, /register i /home. Na prvoj ruti postoji login forma koja prima
korisničko ime i lozinku. Ukoliko je korisnik prethodno registrovan na prethodno postavljenom serveru sa url
www.coetus.herokuapp/api/users, korisnik će kao odgovor na API poziv dobiti, između ostalog, i token, koji će 
mu potom omogućiti pristup /home ruti. 

Ukoliko korisnik nije registrovan, može pristupiti registraciji na ruti /register. Unosom traženih podataka,
korisnik se registruje na serveru sa url www.coetus.herokuapp/api/users, nakon čega može pristupiti logovanju.

Na login stranici, osim login forme, nalaze se još dve komponente: NewsList i Slider. NewsList predstavlja listu vesti
koje se prikupljaju sa API veb-sajta www.finnhub.io (skraćene na deset najaktuelnijih), dok Slider predstavlja React Bootstrap 
Carousel komponentu na kojoj se smenjuju ilustracije funkcionalnosti projekta, uz kratke opise.

Na register stranici, uz istu listu vesti, postoji i registraciona forma.

Na home stranici, dozvoljenoj samo za ulogovane korisnike, mogu se takođe videti vesti, ovoga puta smeštene u još
jednu Carousel komponentu, tako da u formi kajrona prolaze ispod logotipa aplikacije. Pored logotipa nalazi se i dugme
za log out. Glavne funkcionalnosti ove stranice, ali i projekta, jesu one koje se tiču ispisivanja podataka o ceni akcija
vodećih svetskih kompanija, za period od poslednja tri meseca u svakom datom trenutku. Podaci su takođe preuzimani sa
API veb servisa Finnhub. 

Grafički prikaz kretanja cena akcija realizovan je u biblioteci NVD3. Sa leve strane stranice, nalazi se spisak 
odabranih kompanija. Iznad spiska nalazi se input pomoću kog se kompanije filtriraju na osnovu slova koja njihovi nazivi
sadrže. Pored svake izlistane kompanije nalazi se checkbox, na čiju promenu se u chartu sa desne strane iscrtavaju kretanja
cena akcija. Na klik na naziv kompanije izlazi alert sa podacima o kompaniji, povučenih sa servisa Finnhub.
