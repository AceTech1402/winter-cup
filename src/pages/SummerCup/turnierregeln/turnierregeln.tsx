import classes from "./turnierregeln.module.css";

export const Turnierregeln: React.FC = () => {
  return (
    <div className={classes.turnierregeln}>
      <div className={classes.heading}>
        <h1>Turnierregeln</h1>
      </div>
      <div className={classes.content}>
        <h4>Modus:</h4>
        <p>
          Gespielt 4+1. Ein Team besteht aus maximal 10 Spielern. Die Gruppen
          bestehen aus 4 oder 5 Mannschaften. Die besten zwei Teams steigen in
          die KO Runde auf. Bei Unentschieden in der KO Runde wird sofort mit
          Penalties weitergespielt.
        </p>
        <h4>Spielzeit:</h4>
        <p>
          Der Spielzeit beträgt 10 Minuten in der Vorrunde und KO Runde und 15
          Minuten beim Finale.
        </p>
        <h4>Regeln:</h4>
        <p>
          Es wird Hallenfußball mit Bande gespielt. Das Feld ist mit Banden
          umrandet. Der Belag ist Kunstrasen. Out und Ecken werden mit dem Fuß
          gespielt. Es ist somit indirekter Freistoß. Gelbe Karte: Verwarnung.
          Dritte gelbe Karte in der Qualifikation bedeutet ein Spiel Sperre.
          Gelb-Rote Karte: Der Spieler kann am Spiel nicht mehr teilnehmen. Sein
          Team muss das Spiel in Unterzahl beenden. Am Finaltag werden die
          gelben Karten gestrichen. Rote Karte: Der Spieler ist für das Spiel in
          dem er die Karte bekommen hat, sowie mindestens ein weiteres Spiel
          gesperrt.
        </p>
        <h4>Wechsel:</h4>
        <p>
          Der Wechsel ist fliegend. Möchte man den gesamten Block wechseln, ist
          das nur bei eigenem Ballbesitz und Spielunterbrechung möglich.
        </p>
        <h4>Ausschluss:</h4>
        <p>
          Bei Schiedsrichterbeleidigung oder Beleidigung der Organisatoren wird
          der Spieler oder die betroffenen Personen aus dem Turnier
          ausgeschlossen. Bei Raufhandel, Schlägerei oder versuchter
          Rudelbildung wird das Team aus dem Event suspendiert.
        </p>
        <h4>Hauptpreis:</h4>
        <p>
          Der Hauptpreis wird an Spieler des Siegerteams ausgehändigt.
          Bedingung: Die Spieler müssen allesamt ab dem Viertelfinale zum
          Einsatz kommen. Es ist untersagt Spieler nur auf die Liste setzen um
          in Siegesfall den Preis zu bekommen. Der Veranstalter behält sich das
          Recht vor, die Ausgabe des Gewinns an bestimmten Spielern aufgrund zu
          wenig Spielzeit zu verweigern.
        </p>
      </div>
    </div>
  );
};
