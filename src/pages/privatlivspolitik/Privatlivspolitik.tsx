import React from 'react';
import "./Privatlivspolitik.css";

function Privatlivspolitik() {
    return (
        <div className="container privacy-policy">
            <h1>Privatlivspolitik</h1>

            <i>Senest opdateret: 30. december 2024</i>

            <p>Vi hos Sælv tager dit privatliv meget alvorligt og er forpligtet til at beskytte dine personlige data. Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter dine oplysninger, når du bruger vores app.</p>

            <h2>Dataansvarlig</h2>
            <p>Sælv er dataansvarlig for behandlingen af dine personoplysninger. Hvis du har spørgsmål til denne privatlivspolitik, kan du kontakte os via e-mail: kontakt@saelv.dk</p>

            <h3>Hvilke data indsamler vi?</h3>

            <p>Vi indsamler to typer data:</p>
            <ul>
                <li>Personhenførbare data</li>
                <p>Disse data indsamles kun, hvis du vælger at oprette en bruger:</p>
                <ul>
                    <li>Navn</li>
                    <li>E-mailadresse</li>
                    <li>Bruger-ID (oprettes automatisk ved registrering)</li>
                </ul>

                <li>Anonyme data</li>
                <p>Disse data bruges til at forbedre appens funktionalitet og rette fejl:</p>
                <ul>
                    <li>Enheds-ID (anonymiseret)</li>
                    <li>Data om brugsmønstre i appen</li>
                    <li>Fejllogs</li>
                </ul>

                <li>Placeringsdata</li>
                <ul>
                    <li>Når du bruger appen vil den udelukkende spørge om lov til at bruge din placering, til at vise den på kortet. Hvis du ikke giver tilladelse, vil appen ikke automatisk ændre kortet til at vise området nær dig.</li>
                    <li>Alle søgninger sker ved at der udregnes en geohash af det synlige område på kortet i appen og denne benyttes til at søge i vores database og gemmes ikke. Den udregnede geohash har ingen direkte forbindelse til din placering.</li>
                    <li>Vi indsamler aldrig data om din placering, hverken præcis eller grov. Det betyder, at vi ikke tracker, hvor du befinder dig, hverken gennem din enhed, netværksforbindelse eller nogen anden metode.</li>
                </ul>
            </ul>

            <h3>Hvordan indsamler vi data?</h3>
            <p>Personhenførbare data indsamles via registreringsformularen, når du opretter en bruger i appen.</p>
            <p>Anonyme data indsamles automatisk gennem appens systemer ved brug af en anonym enhedsidentifikator.</p>

            <h3>Hvor opbevares dine data?</h3>
            <p>
                Alle data opbevares på sikre servere placeret i Europa.
                Vi benytter Google Firebase, en cloud-tjeneste leveret af Google, til opbevaring og administration af data. Google Firebase overholder GDPR og sikrer, at dine data behandles i overensstemmelse med gældende lovgivning.
                For yderligere information om Google Firebases privatlivspolitik, se: <a href="https://firebase.google.com/support/privacy">https://firebase.google.com/support/privacy</a>
            </p>

            <h3>Formål med databehandling</h3>
            <p>Vi bruger de indsamlede data til følgende formål:</p>
            <ul>
                <li>Personhenførbare data</li>
                <ul>
                    <li>Oprettelse og vedligeholdelse af din brugerprofil samt indhold oprettet af brugeren i appen.</li>
                </ul>
                <li>Anonyme data</li>
                <ul>
                    <li>Analyse af brugsmønstre for at forbedre appens funktioner.</li>
                    <li>Fejlfinding og vedligeholdelse af appens stabilitet.</li>
                </ul>
            </ul>

            <h3>Retsgrundlag for behandling</h3>
            <p>Behandlingen af personoplysninger sker på følgende grundlag:</p>
            <p>Samtykke:</p>
            <ul>
                <li> Du giver dit samtykke ved at registrere dig som bruger.</li>
            </ul>
            <p>Legitime interesser:</p>
            <ul>
                <li>For anonyme data behandler vi oplysninger med henblik på at forbedre appens funktionalitet og sikkerhed.</li>
            </ul>

            <h3>Deling af data med tredjepart</h3>
            <p>Vi bruger tredjepartstjenester som Google Firebase til opbevaring og behandling af data. Firebase sikrer, at data opbevares i overensstemmelse med GDPR, og alle data behandles anonymt, hvis de ikke er personhenførbare.</p>

            <p>Vi deler derudover ikke dine personoplysninger med tredjepart, medmindre:</p>
            <ul>
                <li>Det kræves ved lov.</li>
                <li>Du har givet dit udtrykkelige samtykke.</li>
            </ul>

            <h3>Opbevaring og sletning af data</h3>
            <p>Personhenførbare data:</p>
            <ul>
                <li>Gemmes, så længe du har en aktiv konto. Hvis du vælger at slette din konto, vil alle data, inklusiv det indhold, du har lagt op i appen, blive slettet permanent fra vores systemer senest 30 dage efter, at sletningen er blevet bekræftet.</li>
            </ul>
            <p>Anonyme data:</p>
            <ul>
                <li>Opbevares kun så længe det er nødvendigt for de specificerede formål.</li>
            </ul>

            <h3>Dine rettigheder</h3>
            <p>Som bruger har du følgende rettigheder:</p>
            <ul>
                <li>Ret til indsigt i de data, vi har om dig.</li>
                <li>Ret til at få dine data rettet eller slettet.</li>
                <li>Ret til at trække dit samtykke tilbage.</li>
                <li>Ret til at gøre indsigelse mod behandlingen af dine data.</li>
            </ul>
            <p>For at udøve dine rettigheder kan du kontakte os via e-mail: kontakt@saelv.dk.</p>

            <h3>Sikkerhed af data</h3>
            <p>Vi har implementeret passende tekniske og organisatoriske foranstaltninger for at beskytte dine data mod uautoriseret adgang, tab eller misbrug.</p>

            <h3>Ændringer i privatlivspolitikken</h3>
            <p>Vi kan opdatere denne politik fra tid til anden. Ved væsentlige ændringer vil vi informere dig via appen eller e-mail.</p>

            <h3>Kontakt os</h3>
            <p>Hvis du har spørgsmål eller bekymringer vedrørende denne privatlivspolitik, er du velkommen til at kontakte os på e-mail: <b>kontakt@saelv.dk</b></p>
        </div>
    );
}

export default Privatlivspolitik;