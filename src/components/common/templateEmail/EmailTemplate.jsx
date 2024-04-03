import { Head } from "@react-email/head"
import { Html } from "@react-email/html"
import { Img } from "@react-email/img"
import { Preview } from "@react-email/preview"
import { Section } from "@react-email/section"
import { Text } from "@react-email/text"
import { Container } from "postcss"
import Logo from '../../../assets/Logo_Short 2.svg'
import { Button } from "@react-email/button"

const EmailTemplate = () => {
    return (
        <Html>
            <Head />
            <Preview>Este es el Preview</Preview>
            <Section
                style={{
                    fontFamily: "sans-serif",
                    background: '#fff'
                }}
            >
                <Container
                    style={{
                        backgroundColor: '#ccddd',
                        margin: '0 auto',
                        padding: '20px 48px'
                    }}
                >
                    <Text
                        style={{
                            color: 'red',
                            fontSize: "2rem"
                        }}
                    >
                        autogo.com
                    </Text>
                    <Text
                        style={{
                            color: 'darkgrey',
                            textTransform: 'uppercase'
                        }}
                    >
                        probando el envio de email
                    </Text>
                    <Img style={{ width: '100%', borderRadius: 9 }}
                        src={Logo}
                    />
                </Container>
                <Section
                    style={{
                        fontFamily: "sans-serif"
                    }}
                >
                    <Container
                        style={{
                            backgroundColor: '#fff',
                            margin: '24px auto',
                            padding: '24px 48px',
                            borderRadius: 9,
                            marginBottom: 0
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: "1.2rem"
                            }}
                        >
                            probando el envio de email
                        </Text>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                fontSize: "1.2rem"
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos nisi mollitia similique et officia at praesentium! Distinctio quis, voluptatum excepturi at in earum accusantium, aut minima, perferendis facilis quidem eius.
                        </Text>
                        <Button
                            href={"http://localhost:5173/"}
                            style={{
                                background: 'red',
                                color: 'white',
                                padding: '12px 16px',
                                borderRadius: 9
                            }}
                        >
                        </Button>
                    </Container>
                </Section>
                <Section
                    style={{
                        fontFamily: 'sans-serif'
                    }}
                >
                    <Container
                        style={{
                            backgroundColor: '#fff',
                            margin: '0 auto',
                            padding: '0 48px',
                            borderRadius: 9
                        }}
                    >
                        <Text
                            style={{
                                color: 'gray'
                            }}
                        >
                            probando el envio de footer
                        </Text>
                    </Container>
                </Section>

            </Section>
        </Html>
    )
}

export default EmailTemplate