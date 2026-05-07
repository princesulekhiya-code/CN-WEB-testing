import { Cpu, Radio, BarChart3, Shield, Layers, Server, ShieldCheck, Award, HeartHandshake, ClipboardList, Rocket, Settings, Wifi } from "lucide-react";
import type { ServiceOffering, ProcessStep, TechCategory, WhyChooseItem, ServicePageHeroProps, ServicePageSectionProps, CTAProps } from "@/components/sections/service-page";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const heroProps: ServicePageHeroProps = {
  backHref: "/services/technology-consulting",
  backLabel: "Back to Technology Consulting",
  titleTop: "IoT",
  titleBottom: "Consulting",
  description: "From assessment to deployment — structured delivery for connected solutions.",
  heroImage: "/images/stock/stock-2c1ef39379.jpg",
  heroImageAlt: "IoT Internet of Things",
  topBadge: { icon: null as any, title: "IoT Solutions", subtitle: "Connected devices", colorClass: "bg-[#4EB3E8]/10" },
  bottomBadge: { icon: null as any, title: "Edge + Cloud", subtitle: "Hybrid IoT", colorClass: "bg-emerald-500/10" },
  stats: [
  { value: 100, suffix: "+", label: "Engagements" },
  { value: 35, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
  { value: 10, suffix: "+", label: "Years Expertise" },
],
};

export const servicesHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "From assessment to deployment — structured delivery for connected solutions." };
export const processHeading: ServicePageSectionProps = { headingGray: "Our IoT Consulting", headingWhite: "Process", subtitle: "From assessment to deployment — structured delivery for connected solutions." };
export const techHeading: ServicePageSectionProps = { headingGray: "Technologies We", headingWhite: "Use", subtitle: "End-to-end IoT solutions from architecture design to deployment and monitoring." };
export const ctaProps: CTAProps = { headingTop: "", headingBottom: "", description: "" };

export const services: ServiceOffering[] = [{ icon: Layers, title: "IoT Architecture & Strategy", description: "End-to-end IoT system design, protocol selection, and scalability planning for connected device ecosystems.", features: ["System architecture", "Protocol selection", "Scalability planning"] },
  { icon: Cpu, title: "Edge Computing Solutions", description: "Process data at the edge for real-time insights, reduced latency, and bandwidth optimization.", features: ["Edge processing", "Real-time analytics", "Low latency"] },
  { icon: Server, title: "IoT Platform Development", description: "Custom IoT platforms for device management, data collection, visualization, and remote monitoring.", features: ["Device management", "Data pipelines", "Real-time dashboards"] },
  { icon: Radio, title: "Sensor Integration & Hardware", description: "Sensor selection, hardware integration, and device connectivity solutions for diverse environments.", features: ["Sensor selection", "Hardware design", "Connectivity protocols"] },
  { icon: BarChart3, title: "IoT Data Analytics", description: "Real-time dashboards, anomaly detection, and predictive maintenance models powered by IoT data streams.", features: ["Anomaly detection", "Predictive maintenance", "Real-time monitoring"] },
  { icon: ShieldCheck, title: "IoT Security & Compliance", description: "Device authentication, encryption, firmware security, and regulatory compliance frameworks.", features: ["Device auth", "Encryption", "Compliance frameworks"] },];

export const processSteps: ProcessStep[] = [{ step: "01", title: "IoT Assessment", description: "Evaluate current infrastructure, identify IoT use cases, and define success metrics.", icon: ClipboardList },
  { step: "02", title: "Architecture Design", description: "Design the IoT stack — devices, connectivity, edge, cloud, and application layers.", icon: Layers },
  { step: "03", title: "Hardware Selection", description: "Select sensors, gateways, and edge devices based on environment and requirements.", icon: Cpu },
  { step: "04", title: "Platform Development", description: "Build the IoT platform with device management, data ingestion, and visualization.", icon: Server },
  { step: "05", title: "Integration & Testing", description: "Integrate with existing systems, test at scale, and validate end-to-end data flows.", icon: Settings },
  { step: "06", title: "Deployment & Monitoring", description: "Production rollout, OTA updates, health monitoring, and ongoing optimization.", icon: Rocket },];

export const techCategories: TechCategory[] = [{ label: "Platforms", items: [
      { name: "AWS IoT Core", logo: `${DEVICON}/awsiotcore/awsiotcore-original.svg` },
      { name: "Azure IoT Hub", logo: `${DEVICON}/azure/azure-original.svg` },
      { name: "Google IoT", logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: "ThingsBoard", logo: `${DEVICON}/java/java-original.svg` }
    ] },
  { label: "Edge", items: [
      { name: "Raspberry Pi", logo: `${DEVICON}/raspberrypi/raspberrypi-original.svg` },
      { name: "Arduino", logo: `${DEVICON}/arduino/arduino-original.svg` },
      { name: "ESP32", logo: `${DEVICON}/esp32/esp32-original.svg` },
      { name: "NVIDIA Jetson", logo: `${DEVICON}/nvidiajetson/nvidiajetson-original.svg` },
      { name: "BeagleBone", logo: `${DEVICON}/beaglebone/beaglebone-original.svg` }
    ] },
  { label: "Protocols", items: [
      { name: "MQTT", logo: `${DEVICON}/mqtt/mqtt-original.svg` },
      { name: "CoAP", logo: `${DEVICON}/coap/coap-original.svg` },
      { name: "HTTP/2", logo: `${DEVICON}/http2/http2-original.svg` },
      { name: "WebSocket", logo: `${DEVICON}/websocket/websocket-original.svg` },
      { name: "BLE", logo: `${DEVICON}/ble/ble-original.svg` },
      { name: "LoRaWAN", logo: `${DEVICON}/linux/linux-original.svg` }
    ] },
  { label: "Languages", items: [
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "C/C++", logo: `${DEVICON}/cc/cc-original.svg` },
      { name: "Rust", logo: `${DEVICON}/rust/rust-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Go", logo: `${DEVICON}/go/go-original.svg` }
    ] },];

export const whyChoose: WhyChooseItem[] = [{ icon: Award, title: "IoT Architecture Experts", description: "Deep expertise in connected device ecosystems from sensors to cloud platforms." },
  { icon: Layers, title: "End-to-End Solutions", description: "Hardware selection through cloud platform deployment — one accountable team." },
  { icon: Shield, title: "Security-First Approach", description: "Device authentication, encryption, and compliance baked in from day one." },
  { icon: HeartHandshake, title: "Scalable Infrastructure", description: "Architectures that handle millions of devices with auto-scaling and high availability." },];
