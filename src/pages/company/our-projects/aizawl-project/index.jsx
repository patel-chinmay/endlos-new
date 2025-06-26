import ProjectDetailsSection from "../project-details/ProjectDetailsSection";

const AizawlContent = `As part of the Government of India’s Smart Cities Mission, Aizawl Smart City Ltd. collaborated with Endlos Innovations to address the city’s growing waste management challenges. Aizawl, the capital of Mizoram, was grappling with the lack of a systematic waste segregation and disposal infrastructure, especially when it came to plastic waste. Waste was being dumped in open areas and transported unsegregated to a dumping site located nearly 20 kilometers outside the city, causing environmental and health concerns. Recognizing the urgency for a sustainable solution, Endlos Innovations was entrusted with the responsibility of supplying, installing, and commissioning 17 state-of-the-art Reverse Vending Machines (RVMs) across key urban points in the city.

These advanced RVMs were designed with automation at their core, incorporating features such as e-wallet-based reward systems, donation and coupon options, smart IoT connectivity, bin-level monitoring, and high-precision sensors for plastic identification and collection. With a sleek, durable build and interactive touchscreens, the machines not only streamlined the recycling process but also made it accessible and engaging for the public. By incentivizing responsible disposal behavior, the initiative promoted active citizen participation and contributed to the city’s long-term goal of reducing plastic pollution. The project was completed within the designated timeline and was recognized for its execution quality, technical innovation, and commitment to driving environmental impact through smart urban solutions.`;

export default function AizawlProjectPage() {
  return (
    <ProjectDetailsSection
      title="Aizawl Smart City - RVM Project"
      logoUrl="/assets/images/projects/new-ascl-logo-sample-1.jpg"
      logoImgURL="https://aizawlsmartcity.mizoram.gov.in/"
      imageUrl="/assets/images/rvm/project_1.jpg"
      bgimg="/assets/images/rvm/project_2.png"
      description={AizawlContent}
    />
  );
}
