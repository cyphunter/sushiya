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

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  partySize?: string;
  preferredDate?: string;
  message: string;
}

export default function ContactNotificationEmail({
  name,
  email,
  phone,
  subject,
  partySize,
  preferredDate,
  message,
}: ContactNotificationProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>Nouveau message Sushi-Ya Vannes — {subject}</Preview>
      <Body style={{ backgroundColor: "#fdfaf3", fontFamily: "Inter, system-ui, sans-serif" }}>
        <Container style={{ margin: "0 auto", padding: "40px 24px", maxWidth: 560 }}>
          <Heading style={{ fontSize: 24, color: "#0a0a0a", margin: "0 0 8px" }}>
            Nouveau message — Sushi-Ya Vannes
          </Heading>
          <Text style={{ color: "#c13b1f", fontSize: 13, fontWeight: 600, margin: "0 0 24px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            {subject}
          </Text>

          <Section
            style={{
              backgroundColor: "#ffffff",
              padding: 24,
              borderRadius: 12,
              border: "1px solid #f5efe2",
            }}
          >
            <Text style={{ margin: "8px 0", color: "#0a0a0a" }}>
              <strong>Nom :</strong> {name}
            </Text>
            <Text style={{ margin: "8px 0", color: "#0a0a0a" }}>
              <strong>Email :</strong> {email}
            </Text>
            {phone ? (
              <Text style={{ margin: "8px 0", color: "#0a0a0a" }}>
                <strong>Téléphone :</strong> {phone}
              </Text>
            ) : null}
            {partySize ? (
              <Text style={{ margin: "8px 0", color: "#0a0a0a" }}>
                <strong>Nombre de personnes :</strong> {partySize}
              </Text>
            ) : null}
            {preferredDate ? (
              <Text style={{ margin: "8px 0", color: "#0a0a0a" }}>
                <strong>Date / créneau souhaité :</strong> {preferredDate}
              </Text>
            ) : null}
            <Text style={{ margin: "16px 0 8px", color: "#0a0a0a" }}>
              <strong>Message :</strong>
            </Text>
            <Text style={{ margin: "0", whiteSpace: "pre-wrap", color: "#0a0a0a", lineHeight: 1.6 }}>
              {message}
            </Text>
          </Section>

          <Text style={{ fontSize: 12, color: "#6b6259", marginTop: 24 }}>
            Vous pouvez répondre directement à ce mail — il sera envoyé à {email}.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
