var datavisApp = datavisApp || {};

datavisApp.config = {
  sortBy : 'change', //name|size|change
  chartInfo : '<strong>Wie lese ich diese Grafik?</strong><br>Die Größe der Kreise zeigt das geplante Budget für den jeweiligen Bereich.<br>Die Position der Kreise stellt die prozentuale Veränderung dar.',
  chartSource : 'Quelle und Beschreibung: Die Daten basieren auf dem <a href="http://pardok.parlament-berlin.de/starweb/AHAB/servlet.starweb?path=AHAB/lisshfl.web&id=ahabwebdokfl&search=(%28DNRS%3d2400%29+AND+%28DART%3dD%29+AND+%28WP%3d17%29)+AND+ID%3DD-262011&format=WEBDOKFL">Gesetzentwurf des Senats über die Feststellung des Haushaltsplans von Berlin für die Haushaltsjahre 2016 und 2017</a> in der Fassung vom 07. Juli 2015. Zur Berechnung der Veränderung wurden der Ansatz 2015 und der Mittelwert aus den Ansätzen für 2016 und 2017 herangezogen. Inspiration: <a href="http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html?_r=0">New York Times</a>.',
  scrollTopLabel : 'Nach Oben'
}

datavisApp.data = [
{
  "name":"Verfassungsorgane",
  "labelPosition": "top",
  "showCitation" : true,
  "data15":72753000,
  "data1617":74710100,
  "change":5.919480984,
  "color": "#1F77B4",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_DrSimonWeiss.jpg",
  "personName" : "Dr. Simon Weiß",
  "personDescription" : "<a href=\"http://moritzklack.com\">TEST</a>Rechts- und Verfassungspolitischer Sprecher der Piratenfraktion:  </br> Sweet cheesecake apple pie wafer jelly beans pudding cake. Cheesecake soufflé sesame snaps. Chocolate cake donut sweet powder marshmallow dragée cotton candy liquorice marshmallow.",
  "fractionComment" : "<a href=\"http://moritzklack.com\">TEST</a>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid nostrum omnis eveniet eius architecto ab aspernatur rerum rem non velit hic voluptate, minima quia ad perferendis quae esse cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias architecto, reiciendis repellat, numquam quidem officia accusamus dolor in laboriosam, enim voluptatum quam tempore perspiciatis modi. Aspernatur, vel, modi. Nihil."
},
{
  "name":"Senatskanzlei (Kultur)",
  "labelPosition": "top",
  "showCitation" : false,
  "data15":580730400,
  "data1617":622849750,
  "change":7.252823341,
  "color": "#AEC7E8",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_PhilippMagalski.jpg",
  "personName" : "Philipp Magalski",
  "personDescription" : "Kulturpolitischer Sprecher der Piratenfraktion: </br> Sweet cheesecake apple pie wafer jelly beans pudding cake. Cheesecake soufflé sesame snaps. Chocolate cake donut sweet powder marshmallow dragée cotton candy liquorice marshmallow.",
  "fractionComment" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid nostrum omnis eveniet eius architecto ab aspernatur rerum rem non velit hic voluptate, minima quia ad perferendis quae esse cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias architecto, reiciendis repellat, numquam quidem officia accusamus dolor in laboriosam, enim voluptatum quam tempore perspiciatis modi. Aspernatur, vel, modi. Nihil."
},
{
  "name":"Inneres und Sport",
  "labelPosition": "bottom",
  "showCitation" : true,
  "data15":1878146500,
  "data1617":2092300950,
  "change":11.40243586,
  "color" : "#ff7f0e",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_ChristopherLauer.jpg",
  "personName" : "Christopher Lauer",
  "personDescription" : "Innenpolitischer Sprecher der Piratenfraktion: </br> Sweet cheesecake apple pie wafer jelly beans pudding cake. Cheesecake soufflé sesame snaps. Chocolate cake donut sweet powder marshmallow dragée cotton candy liquorice marshmallow.",
  "fractionComment" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid nostrum omnis eveniet eius architecto ab aspernatur rerum rem non velit hic voluptate, minima quia ad perferendis quae esse cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias architecto, reiciendis repellat, numquam quidem officia accusamus dolor in laboriosam, enim voluptatum quam tempore perspiciatis modi. Aspernatur, vel, modi. Nihil."
},
{
  "name":"Justiz und Verbraucherschutz",
  "labelPosition": "bottom",
  "showCitation" : true,
  "data15":854218000,
  "data1617":910336200,
  "change":6.569540796,
  "color": "#ffbb78",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_DrSimonWeiss.jpg",
  "personName" : "Dr. Simon Weiß",
  "personDescription" : "Rechts- und Verfassungspolitischer Sprecher der Piratenfraktion: <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "fractionComment" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid nostrum omnis eveniet eius architecto ab aspernatur rerum rem non velit hic voluptate, minima quia ad perferendis quae esse cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias architecto, reiciendis repellat, numquam quidem officia accusamus dolor in laboriosam, enim voluptatum quam tempore perspiciatis modi. Aspernatur, vel, modi. Nihil."
},
{
  "name":"Arbeit, Integration und Frauen",
  "labelPosition": "top",
  "showCitation" : true,
  "data15":167807700,
  "data1617":182945650,
  "change":9.021010359,
  "color": "#2ca02c",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_SimonKowalewski.jpg",
  "personName" : "Simon Kowalewski",
  "personDescription" : "Sprecher für Gleichstellungs-, Drogen- und Suchtpolitik, Verbraucherschutz und Tierschutz <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "fractionComment" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid nostrum omnis eveniet eius architecto ab aspernatur rerum rem non velit hic voluptate, minima quia ad perferendis quae esse cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias architecto, reiciendis repellat, numquam quidem officia accusamus dolor in laboriosam, enim voluptatum quam tempore perspiciatis modi. Aspernatur, vel, modi. Nihil."
},
{
  "name":"Bildung, Jugend und Wissenschaft",
  "labelPosition": "bottom",
  "showCitation" : true,
  "data15":4702785400,
  "data1617":5143491050,
  "change":9.371162248,
  "color": "#98df8a",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_MartinDelius.jpg",
  "personName" : "Martin Delius",
  "personDescription" : "Fraktionsvorsitzener und Sprecher für Bildung und Wissenschaft: <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "fractionComment" : "Die Steigerungen der Ausgaben in diesem Bereich, vor allem im Bereich der Hochschulen, SchulsozialarbeiterInnen und Schulsanierungen fällt sehr gering bzw. stagnierend aus. Dabei beträgt der Sanierungsstau an den Schulen mittlerweile 2 Mrd. Euro. Wie hoch der tatsächliche Sanierungsstau ist, kann aufgrund fehlender Mittel der Bezirke nicht genau festegestellt werden. Im gleichen Atemzug erhöhen sich die Ausgaben im Ressort der \"politischen Führung und zentralen Verwaltung\", bei der Senatsverwaltung, beträchtlich. Lagen die Ausgaben 2014 bei knapp 77 Mio Euro, so werden es 2017 93,4 Mio. Euro sein. Dies entspricht einem Anstieg von 21,30% in den kommenden beiden Jahren. Ob die Anzahl der Lehrkräfte für die Schüler auch in Anbetracht weiterer gefllüchteter Kinder ausreicht, wird derzeit geprüft."
},
{
  "name":"Gesundheit und Soziales",
  "labelPosition" : "right",
  "showCitation" : true,
  "data15":597288300,
  "data1617":890316250,
  "change":49.05971706,
  "color": "#d62728",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_AlexanderSpies.jpg",
  "personName" : "Alexander Spies",
  "personDescription" : "Sprecher für Arbeit, Berufliche Bildung, Europa- und Bundesangelegenheiten, Sozialpolitik und Inklusion <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "fractionComment" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid nostrum omnis eveniet eius architecto ab aspernatur rerum rem non velit hic voluptate, minima quia ad perferendis quae esse cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias architecto, reiciendis repellat, numquam quidem officia accusamus dolor in laboriosam, enim voluptatum quam tempore perspiciatis modi. Aspernatur, vel, modi. Nihil."
},
{
  "name":"Stadtentwicklung und Umwelt",
  "labelPosition": "top",
  "showCitation" : true,
  "data15":1871555800,
  "data1617":2048110050,
  "change":9.433555227,
  "color": "#ff9896",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_PhilippMagalski.jpg",
  "personName" : "Philipp Magalski",
  "personDescription" : "Sprecher für Umwelt, Naturschutz, Kultur: <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "fractionComment" : "Die größten Kostenblöcke in disem Bereich stellen der Verkehr und die Förderung des Wohnungsbaus dar, welche auch im Doppelhaushalt ansteigen. Der größte Anstieg ist bei der Stadt- und Freiraumplanung mit einem Anstieg von 40,8% respektive 4,7% in 2016/2017 aufgrund der IGA2017 (LINK) zu verzeichnen. Das Land Berlin fördert das Vorhaben mit ca. 10 Mio Euro, die restlichen 30,2 Mio Euro sollen durch Kartenverläufe eingespielt werden. Mindereinnahmen durch schlechtes Wetter und zu wenige Besucher können die die Kosten des Landes Berlin erhöhen. Im Bereich des Hochbaus kommt es im Doppelhaushalt zu einer Steigerung von 16% respektive 7% in 2016/2017. Grund hierfür ist unter anderem die Kostensteigerung für die Sanierung der Staatsoper Unter den Linden auf mittlereile 400 Mio. Euro,  welche im Untersuchungsausschuss Staatsoper themaisiert wird. (LINK USTAATSOPER)"
},
{
  "name":"Wirtschaft, Technologie und Forschung",
  "labelPosition": "bottom",
  "showCitation" : true,
  "data15":742024600,
  "data1617":757016350,
  "change":2.020384499,
  "color": "#9467bd",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_AlexanderMorlang.jpg",
  "personName" : "Alexander Morlang",
  "personDescription" : "Sprecher für Forschung, Technologie: <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "fractionComment" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid nostrum omnis eveniet eius architecto ab aspernatur rerum rem non velit hic voluptate, minima quia ad perferendis quae esse cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias architecto, reiciendis repellat, numquam quidem officia accusamus dolor in laboriosam, enim voluptatum quam tempore perspiciatis modi. Aspernatur, vel, modi. Nihil."
},
{
  "name":"Finanzen",
  "labelPosition": "top",
  "showCitation" : true,
  "data15":480626700,
  "data1617":475689200,
  "change":-1.027304559,
  "color": "#c5b0d5",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_HeikoHerberg.jpg",
  "personName" : "Heiko Herberg",
  "personDescription" : "Sprecher für Haushalt und Finanzen: <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "fractionComment" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid nostrum omnis eveniet eius architecto ab aspernatur rerum rem non velit hic voluptate, minima quia ad perferendis quae esse cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias architecto, reiciendis repellat, numquam quidem officia accusamus dolor in laboriosam, enim voluptatum quam tempore perspiciatis modi. Aspernatur, vel, modi. Nihil."
},
{
  "name":"Zuweisungen und Programme an die Bezirke",
  "labelPosition" : "right",
  "showCitation" : true,
  "data15":254424000,
  "data1617":319991000,
  "change":25.77076062,
  "color": "#8c564b",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_FabioReinhardt.jpg",
  "personName" : "Fabio Reinhardt",
  "personDescription" : "Sprecher für Migration, Integration und Flüchtlingspolitik, Mitglied im Unterausschuss Bezirke: <br>. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "fractionComment" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aliquid nostrum omnis eveniet eius architecto ab aspernatur rerum rem non velit hic voluptate, minima quia ad perferendis quae esse cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis alias architecto, reiciendis repellat, numquam quidem officia accusamus dolor in laboriosam, enim voluptatum quam tempore perspiciatis modi. Aspernatur, vel, modi. Nihil."
},
{
  "name":"Allgemeine Finanz- und Personalangelegenheiten",
  "labelPosition": "right",
  "showCitation" : true,
  "data15":4297142800,
  "data1617":3930232200,
  "change":-8.538478172,
  "color": "#c49c94",
  "subtitle" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "personImage": "https://www.piratenfraktion-berlin.de/wp-content/uploads/2015/09/Avatar_HeikoHerberg.jpg",
  "personName" : "Heiko Herberg",
  "personDescription" : "Sprecher für Haushalt und Finanzen: <br>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "fractionComment" : "Diesem Bereich werden alle Posten zugeordnet, die keinem anderen Fachbereich zugeordnet werden konnten oder sollten. Dabei stellen hier die Pensionen der Beamt*innen sowie Zinsausgaben die größten Ausgabenposten dar. Zusätzlich wird als dritter großer Einzelposten das Darlehen für den BER in Höhe von 183 Mio Euro aufgeführt. Für den starken Ausschlag nach unten ist die Abführung von Mitteln in 2015 in Höhe von 496 Mio. Euro an das SIWA, dem \"Sondervermögen Investitionen für die Wachsende Stadt\" verantwortlich. Gegebenenfalls wird ein Überschuss aus dem Jahr 2015, welcher erst nächstes Jahr feststeht, zur Hälfte an das SIWA abgeführt, was die Ausgaben in diesem Bereich wieder ansteigen lassen würde."
}];

