import classes from "./eventAGB.module.css";

const EventAGB: React.FC = () => {
  return (
    <div className={classes.event_agb_wrapper}>
      <div className={classes.event_agb}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h1>Events AGB</h1>
          </div>
          <div className={classes.explain}>
            <h2>Anmeldung:</h2>

            <p>
              Die Anmeldung verpflichtet zur Bezahlung des Startgeldes. Das
              Startgeld ist innerhalb von einer Woche auf das angegebene Konto
              einzubezahlen.
            </p>

            <p>
              Auch bei einer Nicht-Teilnahme bleibt die Teilnahmegebühr
              aufrecht. Wer die Teilnahmegebühr nicht bezahlt, muss mit einer
              Ersatzmaut in der Höhe von 300 Euro rechnen.
            </p>

            <p>
              Sollte die Mannschaft aufgrund der Tatsache, dass bereits genügend
              Teams für das Turnier angemeldet haben, keinen Startplatz
              erhalten, wird die Mannschaft aus der Verpflichtung entlassen am
              Turnier teilzunehmen. Sollte das Nenngeld bezahlt worden sein wird
              diese zurück erstattet.
            </p>

            <p>
              Für die Anmeldung sind die richtigen Daten erforderlich. Sollten
              die angegebenen Daten (auch nur teilweise) nicht stimmen, kann die
              Teilnahme seitens des Veranstalters annulliert werden.
            </p>

            <p>
              Durch die Registrierung sind Sie damit einverstanden, E-Mails zum
              Zweck von Informationen, Gutscheinen oder Newsletter von uns zu
              erhalten.
            </p>

            <h2>Haftung:</h2>

            <p>
              Der Veranstalter übernimmt für Kabinen oder sonstige
              Räumlichkeiten, welche den Mannschaften zur Verfügung gestellt
              werden, keine Haftung betreffend Wertgegenstände.
            </p>

            <p>
              Ebenso stellt der Veranstalter klar, dass im Verletzungsfall der
              Veranstalter nicht haftbar gemacht werden kann.
            </p>

            <h2>Spielort und Anstoßzeiten:</h2>

            <p>
              Alle angegebenen Anstoßzeiten können sich bis 5 Tage vor dem
              Turnier ändern. Danach stehen alle Anstoßzeiten fix. Kommt die
              Mannschaft nicht pünktlich zum Spiel, wird das Spiel mit 0:3
              gewertet.
            </p>

            <h2>Ausschluss:</h2>

            <p>
              Alle Teams haben mit einheitlichen nummerierten Trikots
              anzutreten.
            </p>

            <p>
              Jegliche Nichteinhaltung der vorgegebenen Spielregeln oder
              sonstige Vorgaben des Veranstalters, kann jederzeit, auch während
              des Events, zum Ausschluss der Mannschaft führen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAGB;
