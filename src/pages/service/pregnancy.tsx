import { Title, Text, Container, Stack } from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";

const Pregnancy = () => {
  return (
    <Layout>
      <Container mt={60}>
        <SEO title={"Pregnancy Massage"} />
        <Stack>
          <Title order={1} sx={{ fontSize: 42 }}>
            Pregnancy Massage - Nurturing Care for Your Journey
          </Title>

          <Text>
            As a certified Pregnancy Massage Practitioner with special training in prenatal care, I
            understand the unique physical and emotional changes that come with pregnancy. My
            specialized pregnancy massage service offers gentle, secure support throughout your
            pregnancy journey, helping you find comfort and relief during this transformative time.
          </Text>
          <Text>
            <Title order={2}>Benefits of Pregnancy Massage</Title>
            Regular pregnancy massage can provide numerous benefits for both mother and baby:
            <ul>
              <li>Reduces back, neck, and joint pain common during pregnancy</li>
              <li>Alleviates swelling in hands and feet (edema)</li>
              <li>Improves sleep quality and reduces fatigue</li>
              <li>Helps manage anxiety and stress</li>
              <li>Eases muscle tension and cramping</li>
              <li>Promotes better circulation</li>
              <li>Provides emotional support and relaxation</li>
            </ul>
          </Text>
          <Text>
            <Title order={2}>Safe, Specialized Care</Title>
            Your safety and comfort are my top priorities. Each session is carefully tailored to
            your stage of pregnancy and specific needs:
            <ul>
              <li>Positioning is adjusted for maximum comfort and safety</li>
              <li>Special pregnancy pillows and bolsters are used for support</li>
              <li>Gentle techniques appropriate for pregnancy are employed</li>
              <li>Regular comfort checks ensure a positive experience</li>
              <li>Techniques are modified as your pregnancy progresses</li>
            </ul>
          </Text>
          <Text>
            <Title order={2}>When to Start Pregnancy Massage</Title>
            Pregnancy massage can be beneficial from the very beginning of your pregnancy journey. I
            welcome clients:
            <ul>
              <li>From early pregnancy (as soon as you wish to start)</li>
              <li>Throughout all trimesters of pregnancy</li>
              <li>More frequent sessions in the final weeks to help prepare for birth</li>
              <li>Post-natal massage to support recovery and adjustment to motherhood</li>
            </ul>
          </Text>
          <Text>
            <Title order={2}>What to Expect</Title>
            Your first session begins with a comprehensive consultation to understand:
            <ul>
              <li>Your stage of pregnancy</li>
              <li>Any pregnancy-related conditions or concerns</li>
              <li>Areas of discomfort or tension</li>
              <li>Your preferences and comfort needs</li>
              <li>Previous pregnancy or birth experiences</li>
            </ul>
          </Text>
          <Text>
            <Title order={2}>Mind-Body Benefits</Title>
            Beyond physical relief, pregnancy massage offers:
            <ul>
              <li>A peaceful time to connect with your baby</li>
              <li>Reduced anxiety about pregnancy and birth</li>
              <li>Improved body awareness and relaxation</li>
              <li>Enhanced emotional wellbeing</li>
              <li>Better sleep patterns</li>
            </ul>
          </Text>
          <Text>
            <Title order={2}>Expertise You Can Trust</Title>
            With specialized training in pregnancy massage and years of experience working with
            expecting mothers, I understand the unique needs of pregnant bodies. My qualifications
            include:
            <ul>
              <li>Certified Pregnancy Massage Practitioner</li>
              <li>Trained in Mind-Body Restorative Massage</li>
              <li>Experience with high-risk pregnancies</li>
              <li>Understanding of prenatal anatomy and physiology</li>
            </ul>
          </Text>
          <Text>
            <Title order={2}>Booking Your Session</Title>
            Ready to experience the nurturing benefits of pregnancy massage? Contact me to schedule
            your appointment. I'm happy to answer any questions you might have about the treatment
            and discuss how we can best support your pregnancy journey.
          </Text>
          <Text italic>
            Please note: While pregnancy massage is generally safe, it's always recommended to
            consult with your healthcare provider before beginning any new treatment during
            pregnancy.
          </Text>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Pregnancy;
