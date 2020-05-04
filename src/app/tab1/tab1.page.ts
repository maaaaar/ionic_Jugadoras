import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  jugadoras: Array<any> = [
    {
      nombre: " 1. Sandra Paños ",
      posicion: " PORTERA ",
      bio:
        "Després de mitja vida esportiva al Llevant, l’estiu del 2015 va fitxar pel Barça quan tenia 22 anys. En les seves quatre primeres temporades en el FC Barcelona, l’alacantina ha estat tres vegades la portera menys golejada de la Lliga i tres més escollida en l’equip ideal de la Lliga de Campions (2016, 2018 i 2019). A més a més, la temporada 2015/16 va ser escollida com una de les dues millors porteres de la Lliga de Campions.  ",
      img: "assets/img/1SandraPaños.jpg",
    },
    {
      nombre: " 4. María León ",
      posicion: "DEFENSA ",
      bio:
        "Coneguda futbolísticament com a ‘Mapi’, es tracta d’una defensa que pot actuar com a central o lateral per la banda esquerra. Destaca per la seva agressivitat, la seva bona sortida de pilota des del darrera i el domini del joc aeri, que li permet incorporar-se en accions ofensives. ",
      img: "assets/img/4MariaLeon.jpg ",
    },
    {
      nombre: "5. M. Serrano ",
      posicion: "DEFENSA ",
      bio:
        "Nascuda a Sevilla, és la jugadora amb més antiguitat de la plantilla i llegenda del FC Barcelona. Hi va arribar el 2003, amb només 14 anys. Ningú com ella ha vist el creixement del futbol femení blaugrana. Un dels seus gols més importants és el que va marcar a San Mamés el 2013, clau per a un títol de Lliga memorable. ",
      img: "assets/img/5MelanieSerrano.jpg ",
    },
    {
      nombre: "6. Vicky Losada ",
      posicion: "MIGCAMPISTA ",
      bio:
        "La vallesana, nascuda el 1991, va tornar al Barça Femení com un reforç de luxe iniciada la temporada 2016/17, després de finalitzar la seva vinculació de dos anys amb l’Arsenal. Sorgida del planter, és la seva quarta etapa com a blaugrana. És un símbol del Club i exerceix el paper de capitana de l'equip.",
      img: "assets/img/6VickyLosada.jpg ",
    },
    {
      nombre: "7. Jenni Hermoso ",
      posicion: "DAVANTERA ",
      bio:
        "Formada a l’Atlètic de Madrid i contrastada al Rayo Vallecano, la madrilenya va arribar al Barça per primer cop el mercat d’hivern del 2014 després d’una campanya al Tyresso suec. A base de gols i assistències es va convertir en una de les principals referents de l’equip. El 2017 va marxar al PSG, i a l’any següent, tornaria a Lliga, concretament a l’Atlètic de Madrid. Finalment, el 2019, tornaria a Can Barça. A més, Hermoso va ser la màxima golejadora de les tres darreres Lligues espanyoles que va jugar abans de tornar al Barça per segona vegada.",
      img: "assets/img/7JenniHermoso.jpg ",
    },
    {
      nombre: "8. Marta Torrejón ",
      posicion: "DEFENSA ",
      bio:
        "Té una àmplia trajectòria tant a nivell de clubs com en la selecció espanyola, que va deixar el 2019 sent la jugadora que més partits hi havia disputat. La mataronina va debutar molt jove amb el primer equip de l’Espanyol i el 2013, amb 23 anys, va fitxar pel Barça per convertir-se en una referent de la seva defensa.",
      img: "assets/img/8MartaTorrejon.jpg ",
    },
    {
      nombre: "9. Mariona",
      posicion: "DAVANTERA",
      bio:
        "En el seu primer curs al Barça, el 2014/15, la mallorquina es va erigir en la revelació del campionat. Una lesió en un genoll a la part final de la temporada 2017/18 la va mantenir mig any allunyada dels terrenys de joc i va suposar un escull que ja ha superat. És l’autora de gols històrics, com el de la final de la Copa de la Reina del 2018, al minut 122 de la pròrroga, davant l’Atlètic de Madrid o el que va classificar al Barça per a la final de la Lliga de Campions del 2019, contra el Bayern de Munic. ",
      img: "assets/img/9MarionaCaldentey.jpg ",
    },
    {
      nombre: "11. Alexia",
      posicion: "MIGCAMPISTA",
      bio:
        "És una de les icones del Femení des del 2012, quan va fitxar amb 18 anys, procedent del Llevant. Nascuda a Mollet i internacional per Espanya, doblement mundialista, el 2015 va ser escollida millor jugadora catalana de l’any. Cal destacar que va ser la primera golejadora de l’Estadi Johan Cruyff.",
      img: "assets/img/11AlexiaPutellas.jpg ",
    },
    {
      nombre: "18. Crnogorčević",
      posicion: "DEFENSA ",
      bio:
        "Va arribar al FC Barcelona el curs 2019/20 provinent dels Portland Thorns de la Lliga nord-americana. Abans de participar en la NWSL, va jugar vuit temporades al FFC Frankfurt, on es va proclamar campiona d’Europa (2015).",
      img: "assets/img/18AnaCrnogorcevic.jpg ",
    },
    {
      nombre: "22. Martens",
      posicion: "DAVANTERA",
      bio:
        "Lieke Martens va començar a jugar al seu país d’origen, els Països Baixos, a les files del Heerenveen, on es va formar, i al VVV-Venlo. La davantera acumula un gran bagatge a Europa, ja que ha jugat a Bèlgica, on va guanyar la SuperCopa BeNe amb l’Standard de Lieja l’any 2012, Alemanya i Suècia. Martens ha estat en clubs com el Duisburg i el Göteborg abans de jugar amb el Rosengärd, equip del qual prové i amb el qual ha guanyat la Copa i la Supercopa de Suècia el 2016.",
      img: "assets/img/22LiekeMartens.jpg ",
    },
    {
      nombre: "25. Gemma Font ",
      posicion: "PORTERA ",
      bio:
        " Gemma Font va néixer el 23 d’octubre del 1999 a Tagamanent, municipi del Vallès Oriental. La portera barcelonina ha passat per totes les categories del futbol formatiu culer i la temporada 20018/19 s’ha incorporat a la plantilla Barça Femení. La jugadora comparteix la porteria blaugrana amb Sandra Paños i Pamela Tajonar. ",
      img: "assets/img/25GemmaFontjpg.jpg ",
    },
    {
      nombre: "26. Laia Codina",
      posicion: "DEFENSA",
      bio:
        "Una altra exponent de la Masia que, a base de treball i persistència, s’ha fet un lloc al primer equip, on té fitxa des del 2019. Ha estat la capitana del Barça B. Internacional en les categories inferiors de la selecció espanyola, l’estiu del 2018 va ser campiona d’Europa sub-19.",
      img: "assets/img/26LaiaCodina.jpg ",
    },
  ];

  constructor(public alertController: AlertController) {}
}
