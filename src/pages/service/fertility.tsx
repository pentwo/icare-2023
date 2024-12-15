import { Title, Text, Container, Stack } from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";

const Fertility = () => {
  return (
    <Layout>
      <Container mt={60}>
        <SEO
          title={"Fertility Massage"}
          description="Fertility Massage is a specialized therapeutic treatment that combines gentle massage techniques with emotional support to promote overall reproductive and mental wellness. Trained by Edwina Taylor in Perth, I offer this nurturing treatment to support various aspects of women's health and wellbeing."
        />
        <Stack>
          <Title order={1}>Fertility Massage</Title>
          <Title order={4}>Formerly known as Mind-Body Restorative Massage</Title>
          <Title order={2}>A Holistic Approach to Wellness</Title>

          <Text>
            Fertility Massage is a specialized therapeutic treatment that combines gentle massage
            techniques with emotional support to promote overall reproductive and mental wellness.
            Trained by Edwina Taylor in Perth, I offer this nurturing treatment to support various
            aspects of women's health and wellbeing.
          </Text>

          <Title order={2}>Who Can Benefit?</Title>
          <Text>
            This gentle yet effective treatment can help:
            <ul>
              <li>Women preparing their bodies for conception</li>
              <li>Those experiencing fertility challenges</li>
              <li>Individuals with menstrual irregularities or period pain</li>
              <li>People managing endometriosis symptoms</li>
              <li>Anyone seeking relief from anxiety and stress</li>
              <li>Those dealing with digestive issues</li>
              <li>Individuals looking to restore hormonal balance</li>
              <li>IVF support</li>
            </ul>
          </Text>

          <Title order={2}>How It Works</Title>
          <Text>
            Mind-Body Restorative Massage works through several gentle therapeutic approaches:
            <ul>
              <li>Soft tissue manipulation to improve pelvic blood flow</li>
              <li>Abdominal massage techniques to enhance organ function</li>
              <li>Stress-reduction methods to support hormonal balance</li>
              <li>Lymphatic drainage to reduce inflammation</li>
              <li>Mindfulness and guide of meditation to release emotional tension</li>
            </ul>
          </Text>

          <Title order={2}>What to Expect During Your Session</Title>
          <Text>
            Your treatment journey begins with:
            <ol>
              <li>A detailed consultation to understand your specific needs</li>
              <li>Discussion of your health history and wellness goals</li>
              <li>A tailored treatment plan designed for your situation</li>
              <li>Gentle, nurturing massage techniques</li>
              <li>A safe space to process emotions and reduce stress</li>
            </ol>
          </Text>

          <Title order={2}>Treatment Benefits</Title>
          <Text>
            Regular sessions can help:
            <ul>
              <li>Improve reproductive organ blood flow</li>
              <li>Reduce menstrual pain and irregularities</li>
              <li>Balance hormonal functions</li>
              <li>Decrease stress and anxiety levels</li>
              <li>Enhance digestive health</li>
              <li>Release emotional tension</li>
              <li>Promote overall wellbeing</li>
              <li>Support natural fertility</li>
              <li>Create mind-body connection</li>
            </ul>
          </Text>

          <Title order={2}>A Supportive Environment</Title>
          <Text>
            Understanding that fertility and reproductive health can be sensitive topics, I provide:
            <ul>
              <li>A confidential and compassionate setting</li>
              <li>Emotional support throughout your journey</li>
              <li>Regular communication about your progress</li>
              <li>Adjustments to treatment as needed</li>
              <li>Resources and self-care recommendations</li>
            </ul>
          </Text>

          <Title order={2}>Safety and Comfort</Title>
          <Text>
            Each session is conducted with the utmost attention to your comfort and wellbeing:
            <ul>
              <li>Gentle techniques suitable for all body types</li>
              <li>Regular comfort checks throughout the session</li>
              <li>Adjustable pressure and techniques</li>
              <li>Clean, peaceful environment</li>
              <li>Professional draping at all times</li>
            </ul>
          </Text>

          <Title order={2}>Your Journey to Wellness</Title>
          <Text>
            Whether you're preparing for conception, managing reproductive health concerns, or
            seeking relief from stress and anxiety, Mind-Body Restorative Massage offers a nurturing
            path to wellness. This treatment acknowledges the deep connection between physical and
            emotional health, providing support for your whole being.
          </Text>

          <Title order={2}>Important Notice</Title>
          <Text>
            Please note that this treatment is complementary and should be used in conjunction with
            medical advice. Always follow your doctor's recommendations for your health journey.
            Whether you're seeking support for fertility, IVF, relief from physical discomfort, or a
            moment of peace, Jenny is here to guide you with care and expertise.
          </Text>

          <Title order={2}>Booking Information</Title>
          <Title order={3}>Session Duration</Title>

          <ul>
            <li>
              Initial Treatment: 2 hours This allows time for a thorough consultation and
              comprehensive first treatment
            </li>
            <li>Follow-up Sessions: 90 minutes Focused on continuing your therapeutic journey</li>
          </ul>

          <Title order={2}>Book Your FREE 30-Minute Consultation Call Today!</Title>
          <Text>
            Take the first step toward your wellness goals with a complimentary consultation. During
            this call, we can discuss your needs, answer your questions, and determine the best
            treatment plan for you.
          </Text>
          <Text>
            Note: This treatment can be adapted for various health conditions. Please discuss any
            specific health concerns during your initial consultation to ensure the most appropriate
            treatment approach for your needs.
          </Text>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Fertility;
