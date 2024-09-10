import {
    Body,
    Container,
    Column,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.BASE_URL;

export const GooglePlayPolicyUpdateEmail = (name: string, email: string, message: string) => (
    <Html>
        <Head />
        <Preview>Google Play developers</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section>
                    <Row>
                        <Column>
                            <Img
                                style={headerBlue}
                                src={`${baseUrl}/static/google-play-header.png`}
                                width="305"
                                height="28"
                                alt="Google Play developers header blue transparent"
                            />
                            <Img
                                style={sectionLogo}
                                src={`${baseUrl}/static/google-play-logo.png`}
                                width="155"
                                height="31"
                                alt="Google Play"
                            />
                        </Column>
                    </Row>
                </Section>

                <Section style={paragraphContent}>
                    <Hr style={hr} />
                    <Text style={heading}>{`${name} sent you a message! See below!`}</Text>
                    <Text style={paragraph}>Name : {name}</Text>
                    <Text style={paragraph}>
                        Email : {email}
                    </Text>
                    <Text style={paragraph}>
                        Message : {message}
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default GooglePlayPolicyUpdateEmail;

const main = {
    backgroundColor: "#dbddde",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
    padding: "0 40px",
};

const headerBlue = {
    marginTop: "-1px",
};

const container = {
    margin: "30px auto",
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: "hidden",
};

const containerContact = {
    backgroundColor: "#f0fcff",
    width: "90%",
    borderRadius: "5px",
    overflow: "hidden",
    paddingLeft: "20px",
};

const heading = {
    fontSize: "14px",
    lineHeight: "26px",
    fontWeight: "700",
    color: "#004dcf",
};

const paragraphContent = {
    padding: "0 40px",
};

const paragraphList = {
    paddingLeft: 40,
};

const paragraph = {
    fontSize: "14px",
    lineHeight: "22px",
    color: "#3c4043",
};

const link = {
    ...paragraph,
    color: "#004dcf",
};

const hr = {
    borderColor: "#e8eaed",
    margin: "20px 0",
};

const footer = {
    maxWidth: "100%",
};
