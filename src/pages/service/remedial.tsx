import { Title, Text, Container, Stack } from "@mantine/core";
import React from "react";
import SEO from "../../components/general/Seo";
import { Layout } from "../../components/Layout/Layout";

const Remedial = () => {
  return (
    <Layout>
      <Container mt={60}>
        <SEO title={"Remedial Massage"} />
        <Stack>
          <Title order={1}>Remedial Massage - Professional Pain Management</Title>

          <Text>
            With 14 years of experience as a qualified Remedial Massage Therapist, I specialize in
            providing targeted treatment for those seeking effective pain management and postural
            improvement, with particular expertise in treating scoliosis.
          </Text>
          <Text>
            <Title order={2}>What is Remedial Massage?</Title>
            Remedial massage is a therapeutic treatment that goes beyond relaxation to address
            specific muscular pain and postural issues. Using advanced techniques and detailed
            anatomical knowledge, I work to identify the root cause of your discomfort and develop a
            personalized treatment plan to achieve lasting results.
          </Text>
          <Text>
            <Title order={2}>How Can Remedial Massage Help You?</Title>
            This specialized treatment is particularly effective for:
            <ul>
              <li>Managing chronic pain conditions</li>
              <li>Improving posture and spinal alignment</li>
              <li>Treating muscle tension and stiffness</li>
              <li>Addressing scoliosis-related discomfort</li>
              <li>Supporting injury recovery and rehabilitation</li>
              <li>Reducing stress-related muscular tension</li>
            </ul>
          </Text>
          <Text>
            <Title order={2}>Treatment Approach</Title>
            Each session begins with a thorough assessment of your condition and pain points. I use
            a combination of deep tissue techniques, myofascial release, and craniosacral therapy to
            target specific areas of concern. Through this integrated approach, we work together to:
            <ul>
              <li>Release muscle tension and adhesions</li>
              <li>Improve joint mobility and flexibility</li>
              <li>Enhance posture and body awareness</li>
              <li>Reduce pain and discomfort</li>
              <li>Support long-term musculoskeletal health</li>
            </ul>
            Whether you're dealing with chronic pain, recovering from an injury, or seeking to
            improve your posture, my goal is to provide effective, personalized treatment that
            addresses your specific needs and supports your journey to better health.
          </Text>
          <Text>
            Ready to take the first step toward pain relief? Contact me to schedule your remedial
            massage session today.
          </Text>
        </Stack>
      </Container>
    </Layout>
  );
};

export default Remedial;
