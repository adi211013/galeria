import { Component } from '@angular/core';
import { Plyta } from './plyta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TOP 10 PLYT';
  lp:Plyta[]=
  [
    {nazwa:"H4J4", wykonawcy:"Opał/Floral Bugs",okladka:"../assets/1.png",opis:"fajna plyta wyszla w 2022 kox slucham",wiecejinfo:false},
    {nazwa:"Pandora", wykonawcy:"Opał",okladka:"../assets/2.png",opis:"Po udanej premierze jego ostatniego albumu “MOTYL”, Opał poszedł o krok dalej. Pozytywnie zaskakując fanów po raz kolejny, wydał dość osobiste EP. Na albumie usłyszymy takich gości jak Słoń i Kleszcz. Pomogli oni Opałowi otworzyć mitologiczną puszkę, w której zamknięte zostało całe zło tego świata. To jedna wielka metafora z której młody artysta skorzystał przy produkcji EP. Duża dawka emocji, dobre i złe wspomnienia przelane na papier, można by powiedzieć że wręcz wyrzucone. Produkcje czołowych Polskich producentów takich jak Gibbs, Got Barss czy D3W, ale też zagranicznych jak Benihana Boy nadały konkretną barwę i klimat tej cyfrowej EPce.",wiecejinfo:false},
    {nazwa:"Złote Przeboje", wykonawcy:"Kabe/Miszel",okladka:"../assets/3.jpg",opis:"Album “Złote Przeboje” to kompilacja charakterystycznych stylów Miszela i Kabe w odniesieniu do kultowych hitów z przestrzeni lat ‘80 i '2000.",wiecejinfo:false},
    {nazwa:"Opium", wykonawcy:"Eripe",okladka:"../assets/4.jpg",opis:"eripe to kozak liryczny ",wiecejinfo:false},
    {nazwa:"Styxx", wykonawcy:"Reto",okladka:"../assets/5.png",opis:"“STYXXX” to 4 solowy album ReTo, którego nazwa ma nawiązywać do rzeki z mitologii greckiej “Styks”. Jest to jedna z pięciu rzek Hadesu, w której każda ze zmarłych dusz musiała przeprawić się przez nią, żeby dotrzeć prosto do Hadesu. Przewoźnikiem dusz był Charon.",wiecejinfo:false},
    {nazwa:"Albinos", wykonawcy:"Kabe",okladka:"../assets/6.jpg",opis:"Zbliżający się album określany jest mianem najważniejszego, trapowego debiutu 2020 roku. Kabe, razem z producentami z ekipy GCBW, Opiatem i Bartzem, zabiorą was w świat mocnego i charakternego rapu, bez kompromisów, bez lukrowania, z dużą ilością cloudowych i syntetycznych brzmień prosto z muzycznego ghetta. Kabe, 19 letni obywatel Europy, człowiek, który przez wiele lat mieszkał w Paryżu, gdzie dorastał, opowie Wam sporo historii widzianej z jego perspektywy. Zwięźle, konkretnie, z błyskotliwymi odniesieniami, wplatając w teksty sporo elementów języka francuskiego. Zobaczycie i przekonacie się, że życie na osiedlach Europy rządzi się podobnymi prawami, jak polskie realia.",wiecejinfo:false},
    {nazwa:"King Kong", wykonawcy:"Kabe",okladka:"../assets/7.jpg",opis:"King Kong to trzeci, solowy album Kabe, który ukaże się na rynku nakładem wytwórni QueQuality 1 lipca 2022 roku. W tekstach znajdziemy dużo dojrzałych przemyśleń i obserwacji, pokazujących drogę rapera od legalnego debiutu, do albumu zamykającego trylogię. Krążek w całości wyprodukował Opiat, producent znany słuchaczom z poprzednich albumów Kabe. Layout albumu jest dziełem LUK.KOPE, a opiera się na fantastycznych zdjęciach wykonanych przez Bartka M.",wiecejinfo:false},
    {nazwa:"Motyl", wykonawcy:"Opał",okladka:"../assets/8.jpg",opis:"„MOTYL” – bo tak nazywa się krążek, jest przepełniony przemyśleniami i emocjami.Ludzkich emocji jest wiele, a fakt, że są bardzo skrajne zmusił mnie do podzielenia,projektu na dwie części.Tak więc MOTYL i ĆMA-dwa krążki, w każdym po 7 numerów na bitach czołowych producentów nie tylko z Polski.Chyba trochę dorosłem, bo moja muzyka też staje się dojrzalsza (przynajmniej w moim mniemaniu).Motyl – symbol duszy, szczęścia, natchnienia, lekkości, piękności i przemiany zewnętrznej i świadomości. Oznacza oświecenie, głębsze wejrzenie w naturę świata oraz przebudzenie się w miłości do świata. Motyl cechuje radość, lekkość, niezależność, wolność Ćmy symbolizowały zarówno zbłąkane dusze (Słowianie i Grecy), jak i te zbawione, które odwiedzają ziemię przybierając piękną formę ćmy, która daje im swobodę. Także dusze żyjących przybierały tę postać, gdy opuszczały swoje śpiące ciała. Ta symbolika śmierci wiąże się oczywiście z nocnym trybem życia większości ciem oraz ich związkiem ze światłem księżyca, ze świecą, czy w ogóle z ogniem, w którym często giną.",wiecejinfo:false},
    {nazwa:"Redrum", wykonawcy:"Słoń",okladka:"../assets/9.jpg",opis:"Brain Dead Familia prezentuje najnowszy album solowy Słonia pod tytułem „Redrum”!Czwarty album solowy oraz następca wydanego w 2018 roku „Mutylatora” ukaże się 11 grudnia 2020 roku.Najnowszy materiał poznańskiego rapera, który powstawał pod roboczym tytułem „Czerwony Rum” został zrealizowany we współpracy z jednym producentem. Za wszystkie bity odpowiada Chris Carson, a zgodnie z wcześniejszymi zapowiedziami – na płycie nie pojawiają się żadni dodatkowi goście (wyjątkiem są scratche DJ Flipa w dwóch numerach). W powstanie albumu zaangażowani byli Brainfreezer (udźwiękowienie, skity, realizacja wokali) oraz Kamil “Rasta” Baszak ze studia RAStool (realizacja wokali). Masteringiem zajął się Bartosz Napieralski (StudioC2/San Antonio Records) z którym Słoń wielokrotnie współpracował w przeszłości.Za projekt graficzny zdobiący front albumu odpowiedzialni są: grafik ukrywający się pod pseudonimem Slash97 oraz fotograf Adam Wilkoszarski. Grill wykonała Pracownia Złotnicza Andrzeja Wojciechowskiego przy współpracy z Michałem Kornoszem oraz wcześniej wspomnianym grafikiem.",wiecejinfo:false},
    {nazwa:"Mutylator", wykonawcy:"Słoń",okladka:"../assets/10.jpg",opis:"Rok po wydaniu ostatniej części trylogii “Czarne Słońce” WSRH, Słoń powraca z nowym albumem solowym!Na albumie „Mutylator” znajdzie się siedemnaście premierowych tracków, w których gościnnie usłyszycie takich artystów jak Opał, Szpaku, zespół Polska Wersja. Z kolei z zagranicznych gości pojawili się King Gordy, G-Mo Skee czy Řeznik. Za bity odpowiadają między innymi Gibbs, Young Veterans czy The Returners.",wiecejinfo:false},
  ]

  show(i:number):void
  {
    this.lp[i].wiecejinfo=!this.lp[i].wiecejinfo;
  }
}
