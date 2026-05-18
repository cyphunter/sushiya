import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactReceiptProps {
  name: string;
  subject: string;
  message: string;
}

export default function ContactReceiptEmail({
  name,
  subject,
  message,
}: ContactReceiptProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Votre message a bien été reçu — Sushi-Ya Vannes</Preview>
      <Body style={{ backgroundColor: "#fdfaf3", fontFamily: "Inter, system-ui, sans-serif" }}>
        <Container style={{ margin: "0 auto", padding: "40px 24px", maxWidth: 560 }}>
          <Heading style={{ fontSize: 28, color: "#0a0a0a", margin: "0 0 16px", fontFamily: "Georgia, serif" }}>
            Bonjour {name},
          </Heading>
          <Text style={{ color: "#0a0a0a", fontSize: 16, lineHeight: 1.6, margin: "0 0 16px" }}>
            Nous avons bien reçu votre message à propos de <strong>{subject.toLowerCase()}</strong>.
            Notre équipe vous répondra sous 48 heures ouvrées (mardi–samedi).
          </Text>
          <Text style={{ color: "#0a0a0a", fontSize: 16, lineHeight: 1.6, margin: "0 0 24px" }}>
            Pour une demande urgente ou une réservation immédiate, n&apos;hésitez pas à appeler
            le <strong>09 83 29 03 15</strong> aux horaires d&apos;ouverture.
          </Text>

          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: 20,
              borderRadius: 12,
              border: "1px solid #f5efe2",
            }}
          >
            <Text style={{ margin: "0 0 8px", color: "#6b6259", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Récapitulatif de votre message
            </Text>
            <Text style={{ margin: "0", whiteSpace: "pre-wrap", color: "#0a0a0a", lineHeight: 1.6, fontSize: 14 }}>
              {message}
            </Text>
          </Section>

          <Text style={{ fontSize: 13, color: "#6b6259", marginTop: 32, lineHeight: 1.6 }}>
            À très bientôt à Sushi-Ya,
            <br />
            13 rue Thomas de Closmadeuc · 56000 Vannes
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
