import ProjectDetailsSection from "../project-details/ProjectDetailsSection";

const AizawlContent = `In a significant move to enhance plastic waste management and promote sustainable practices across the state, the Rajasthan State Pollution Control Board (RSPCB) partnered with Endlos Innovations for the large-scale deployment of Reverse Vending Machines (RVMs). The project aimed to curb plastic pollution and encourage responsible disposal behavior by installing 50 IoT-enabled RVMs across high-footfall public locations in 14 regions of Rajasthan.

Awarded through a competitive government tender, this four-year contract entrusted Endlos Innovations with the supply, installation, commissioning, operation, and maintenance of smart Plastic Bottle Flaking Machines/Reverse Vending Machines. These machines were strategically placed in areas such as major forts, public parks, bus stands, railway stations, zoos, safari parks, and prominent tourist landmarks across regions including Ajmer, Alwar, Bharatpur, Jodhpur, Bikaner, Kota, Sikar, Jhunjhunu, Udaipur, Chittorgarh, Rajsamand, and Jaipur.
Each RVM is equipped with advanced features like high-precision plastic detection sensors, IoT-enabled real-time monitoring, e-wallet integration for rewards, and user-friendly touchscreen interfaces. The machines were designed to seamlessly integrate with the state’s sustainability objectives, offering citizens a tech-driven, incentivized platform to recycle PET bottles responsibly.

The project’s success was ensured through close coordination with regional officers and civic bodies at each location, along with strict adherence to the government’s technical and operational guidelines. With this initiative, Rajasthan has taken a definitive step towards smart environmental governance and public participation in the circular economy. Endlos Innovations is proud to be at the forefront of this transformative shift in waste management infrastructure.
`;

export default function AizawlProjectPage() {
  return (
    <ProjectDetailsSection
      title="Rajasthan RVM Project"
      logoUrl="/assets/images/pcb_new.png"
      logoImgURL="https://environment.rajasthan.gov.in/"
      imageUrl="/assets/images/rvm/Rajasthan_project_inside.png"
      bgimg="/assets/images/rvm/Rajasthan_project_outside.png"
      description={AizawlContent}
    />
  );
}
