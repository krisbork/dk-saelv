import React from 'react';
import "./Faq.css";
import FaqItem from "../../components/FaqItem";

function Faq() {
    return (
        <div className="container faq-item-container">
            <h1>Ofte stillede spørgsmål</h1>
            
            <FaqItem
                title="Hvordan opretter jeg min gårdbutik i appen?"
                content="Du kan oprette din gårdbutik i appen ved at trykke på plus-ikonet øverst i højre hjørne af appen. Herefter skal du udfylde de nødvendige felter og placere din gårdbutik så nøjagtigt som muligt. Når du har gjort dette, vil din gårdbutik blive sendt til godkendelse, og du vil få en notifikation, når din gårdbutik er blevet godkendt (dog kun hvis du har slået notifikationer til i appen)."/>
            <FaqItem
                title="Hvordan opretter jeg en bruger i appen?"
                content={"Du kan oprette en bruger i appen ved at trykke på \"æ\"-ikonet øverst i højre hjørne af appen. Herefter skal du udfylde de nødvendige felter og trykke på \"Opret bruger\"."}/>
            <FaqItem
                title="Hvordan søger jeg efter Sælv i nærheden af mig?"
                content={"Du kan søge efter Sælv i nærheden af dig ved at navigere rundt på kortet og zoome ind og ud, så vil appen automatisk vise dig de gårdbutikker, der er tættest på dig."}/>
            <FaqItem
                title="Hvordan søger jeg efter bestemte varer?"
                content={"Du kan se om de gårdbutikker, der er tættest på dig, har de varer, du søger, ved at indtaste varenavnet i søgefeltet øverst i appen. Herefter vil appen vise dig de gårdbutikker, der har de varer, du søger."}/>
            <FaqItem
                title="Hvordan kan jeg se, hvilke varer en gårdbutik har?"
                content={"Du kan se, hvilke varer en gårdbutik har, ved at trykke på gårdbutikken på kortet. Herefter vil appen vise dig en forhåndsvisning af gårdbutikken, hvorefter du kan trykke på \"Se mere\" for at se alle de varer, gårdbutikken har samt se priser og beskrivelser af varerne."}/>
            <FaqItem
                title="Hvordan opdaterer jeg min Sælv?"
                content={"Du kan opdatere din Sælv ved at trykke på \"æ\"-ikonet øverst i højre hjørne af appen. Herefter skal du trykke på \"Dine Sælv\" og herefter finde den Sælv, du vil opdatere. Når du har fundet den, skal du trykke på de tre prikker øverst i højre hjørne og herefter trykke \"Rediger Sælv\". Herefter kan du redigere de nødvendige felter og trykke \"Opdater\"."}/>
            <FaqItem
                title="Hvordan sletter jeg min Sælv?"
                content={"Du kan slette din Sælv ved at trykke på \"æ\"-ikonet øverst i højre hjørne af appen. Herefter skal du trykke på \"Dine Sælv\" og herefter finde den Sælv, du vil slette. Når du har fundet den, skal du trykke på de tre prikker øverst i højre hjørne og herefter trykke \"Slet Sælv\". Herefter skal du bekræfte, at du vil slette din Sælv."}/>
            <FaqItem
                title="Hvis jeg har fundet en Sælv i appen som er forkert, hvad gør jeg så?"
                content={"Hvis du har fundet en Sælv i appen, som er forkert, kan du rapportere den ved at trykke på de tre prikker øverst i højre hjørne af appen. Herefter skal du trykke på \"Rapporter Sælv\" og beskrive, hvad der er galt. Herefter vil vi undersøge sagen og fjerne den, hvis den ikke længere eksisterer."}/>
            <FaqItem
                title="Hvordan sletter jeg min bruger?"
                content={"Du kan slette din bruger ved at trykke på \"æ\"-ikonet øverst i højre hjørne af appen. Herefter skal du trykke på \"Slet din bruger\" og herefter bekræfte ved at trykke på \"Slet bruger\". Dette vil slette din bruger og alle dine data fra appen samt alle dine Sælv."}/>
        </div>
    );
}

export default Faq;