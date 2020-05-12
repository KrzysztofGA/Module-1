# Obligatorisk oppgave 2

✨[Link til side][1]✨
✨[Link til GitHub][2]✨

## Zadanie (tłumaczenie)

Przypisanie opiera się na kodzie pokazanym na dole strony. Jest to kod, który tworzy wykres słupkowy na podstawie listy liczb - gdzie każda liczba zawiera się między 1 a 10. Zadanie polega na wypełnieniu wniosku. Jest napisany po wzorcu kontrolera widoku modelu - i dodany kod również powinien być.

-   Umożliwia wybranie paska. Powinieneś być w stanie wybrać pasek, klikając go. Powinien on mieć wokół niego czarną ramkę, a ponadto tekst powinien zostać zaktualizowany na przykład na „Wybrany pasek: 1”. Jeśli klikniesz pasek już zaznaczony, nie należy wybierać paska.

-   Przyciski „Zmień wybrany pasek” i „Usuń wybrany pasek” muszą być wyłączone, gdy żaden pasek nie jest zaznaczony, a poza tym są niedostępne.

-   Naciśnięcie przycisku „Usuń wybrany pasek” spowoduje usunięcie wybranego paska. Wszystkie słupki na prawo od tego są następnie przesuwane o jeden stopień w lewo. To znaczy, jeśli liczby wynoszą [1, 2, 3, 4, 5] - a następnie usuń pasek pośrodku, wówczas liczby powinny wynosić [1, 2, 4, 5].

-   Po naciśnięciu przycisku „Zmień wybrany pasek” wybrany pasek powinien zmienić wartość wprowadzoną przez użytkownika w polu wprowadzania. Tylko 1,2,3,4,5,6,7,8, 9 i 10 są prawidłowymi wartościami. Jeśli użytkownik nie wprowadził prawidłowej wartości w polu wprowadzania, należy podać komunikat o błędzie.

-   Po naciśnięciu przycisku „Dodaj pasek” należy dodać nowy numer na końcu listy (i nowy pasek po prawej stronie wykresu słupkowego) z wartością wprowadzoną przez użytkownika w polu wprowadzania. Jeśli użytkownik nie wprowadził prawidłowej wartości w polu wprowadzania, należy podać komunikat o błędzie.

-   Wykonaj testy jednostkowe funkcji kontrolera! Więc funkcje do:

    -   wybierz pasek (przetestuj zarówno wybranego, jak i drugiego)
    -   usuń pasek
    -   zmienić pasek
    -   dodaj pasek

## Oppgave

Oppgaven tar utgangspunkt i koden som er vist nederst på siden. Dette er kode som lager et stolpediagram basert på en liste av tall - hvor hvert tall er mellom 1 og 10. Oppgaven består i å fullføre applikasjonen. Den er skrevet etter Model View Controller-patternet - og koden du legger til skal også være det.

-   Gjør det mulig å velge en stolpe. Man skal kunne velge en stolpe ved å klikke på den. Den skal da få en svart ramme rundt seg, og i tillegg skal teksten oppdateres til for eksempel "Valgt stolpe: 1". Hvis man klikker på den stolpen som allerede er valgt, skal deretter ingen stolpe være valgt.

-   Knappene "Endre valgt stolpe" og "Fjerne valgt stolpe" skal være disablet når ingen stolpe er valgt - og enablet ellers.

-   Når man trykker på "Fjerne valgt stolpe", skal den valgte stolpen fjernes. Alle stolper som var til høyre for denne, flyttes da ett hakk til venstre. Det vil si at om numbers er [1, 2, 3, 4, 5] - og så fjerner stolpen i midten, så skal numbers etter det være [1, 2, 4, 5].

-   Når man trykker på "Endre valgt stolpe", skal den valgte stolpen endre verdien som brukeren har skrevet i input-boksen. Det er kun 1,2,3,4,5,6,7,8, 9 og 10 som er gyldige verdier. Dersom brukeren ikke har skrevet en gyldig verdi i input-boksen, skal det gis en feilmelding.

-   Når man trykker på "Legg til stolpe", skal det legges til et nytt tall sist i listen (og en ny stolpe lengst til høyre i stolpediagrammet) med verdien som brukeren har skrevet i input-boksen. Dersom brukeren ikke har skrevet en gyldig verdi i input-boksen, skal det gis en feilmelding.

Lag enhetstester av controller-funksjonene! Altså funksjonene for å:

-   velge stolpe (teste både velge den som er valgt og en annen)
-   slette en stolpe
-   endre en stolpe
-   legge til en stolpe

[1]: https://krzysztofga.github.io/GetAcademy/obligatorisk/oppgave-2-v2
[2]: https://github.com/KrzysztofGA/GetAcademy/tree/master/obligatorisk/oppgave-2-v2
