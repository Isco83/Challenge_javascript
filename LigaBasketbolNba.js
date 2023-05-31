const LigaBasketbolNba = [    
    { TipodeConferencia: "Este", Divición: "Atlantico", Team: "Boston Celtics", Jugadores:[
        {tipoDePosicion: "Ala Pivot", Name: "Jayson Christopher Tatum", Estatura: "2.03 m", Edad: 25, DraftdelaNBA: 2017, Dorsal: 0},
        {tipoDePosicion: "Ala Pivot", Name: "Al Horford",               Estatura: "2.06 m", Edad: 36, DraftdelaNBA: 2007, Dorsal: 42},
        {tipoDePosicion: "Ala Pivot", Name: "Grant Dean Williams",      Estatura: "1.98 m", Edad: 24, DraftdelaNBA: 2019, Dorsal: 12},
        {tipoDePosicion: "Ala Pivot", Name: "Blake Austin Griffin",     Estatura: "2.06 m", Edad: 34, DraftdelaNBA: 2009, Dorsal: 2},
        {tipoDePosicion: "Ala Pivot", Name: "Danilo Gallinari",         Estatura: "2.06 m", Edad: 34, DraftdelaNBA: 2009, Dorsal: 2},

    ]},
    { TipodeConferencia: "Este", Divición: "Atlantico", Team: "New Jersie Nets",},
    { TipodeConferencia: "Este", Divición: "Atlantico", Team: "New York Nicks",},
    { TipodeConferencia: "Este", Divición: "Atlantico", Team: "Philadelphia 76ers",},
    { TipodeConferencia: "Este", Divición: "Atlantico", Team: "Toronto Raptors",},
    { TipodeConferencia: "Este", Divición: "Central",   Team: "Chicago Bulls",},
    { TipodeConferencia: "Este", Divición: "Central",   Team: "Cleveland Cavaliers",},
    { TipodeConferencia: "Este", Divición: "Central",   Team: "Detroit Pistons",},
    { TipodeConferencia: "Este", Divición: "Central",   Team: "Indiana Pacers",},
    { TipodeConferencia: "Este", Divición: "Central",   Team: "Milwaukee Bucks",},
    { TipodeConferencia: "Este", Divición: "Sureste",   Team: "Atlanta Hawks",},
    { TipodeConferencia: "Este", Divición: "Sureste",   Team: "Charlotte Hornets",},
    { TipodeConferencia: "Este", Divición: "Sureste",   Team: "Miami Heat",},
    { TipodeConferencia: "Este", Divición: "Sureste",   Team: "Orlando Magic",},
    { TipodeConferencia: "Este", Divición: "Sureste",   Team: "Washington Wizards",},

];

// Función para mostrar los detalles del equipo
function mostrarDetallesEquipo(equipo) {
    console.log("Nombre del equipo: " + equipo.Team);
    console.log("Divicion: " + equipo.Divición);
    console.log("Conferencia: " + equipo.TipodeConferencia);
}

for (let i = 0; i < LigaBasketbolNba.length; i ++){
    var equipo = LigaBasketbolNba[i];
    mostrarDetallesEquipo(equipo);
  console.log("-----------------------");
}

// Booleano para mostrar detalles adicionales del equipo
var mostrarDetallesAdicionales = true;

// Función para mostrar los detalles adicionales del equipo
function mostrarDetallesAdicionalesEquipo(equipo) {
  console.log("Detalles adicionales del equipo " + equipo.tipoDePosicion);
  console.log("Detalles adicionales del equipo " + equipo.Jugadores);
  console.log("Detalles adicionales del equipo " + equipo.Name);
  console.log("Detalles adicionales del equipo " + equipo.Estatura);

}
// mostrar los detalles adicionales de cada equipo si es true
if (mostrarDetallesAdicionales) {
  for (var i = 0; i < LigaBasketbolNba.length; i++) {
    var equipo = LigaBasketbolNba [i];
    mostrarDetallesAdicionalesEquipo(equipo);
    console.log("-----------------------");
  }
}
