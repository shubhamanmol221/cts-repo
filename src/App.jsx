"use client"
import { useState } from "react"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { PosterSection } from "./components/PosterSection"
import { VideosSection } from "./components/VideosSection"
import { StatsSection } from "./components/StatsSection"
import { SpeakersSection } from "./components/SpeakersSection"
import { SessionsSection } from "./components/SessionsSection"
import { PanelDiscussionSection } from "./components/PanelDiscussionSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"
import "./App.css"

function App() {
  const [currentEdition, setCurrentEdition] = useState("bangalore") // bangalore or vizag
  const sessions = [
    {
      id: "problems-spatial-reuse",
      title: "The Problems with Spatial reuse in Wi-Fi 6 & Wi-Fi 7",
      authors: "Susinder Gulasekaran - Swinnovate", // Changed
      image: "/images/susinder_session.png",
      abstract:
        "Spatial reuse is an optional new feature introduced in Wi-Fi 6 intended to increase the network efficiency in dense deployments where two or more neighboring access points share the same primary channel. There are two types of spatial reuse defined in the standard - OBSS PD based spatial reuse for downlink transmissions and PSR based spatial reuse for trigggered uplink transmissions. However, there is zero adoption of this feature in practice. This talk gives some insights into the reasons behind it and highlights some fundamental problems which have been overlooked by this feature in WiFi 6 and WiFi 7.",
      category: "Network Optimization",
      time: "09:30 AM - 09:55 AM",
      duration: "25 minutes",
      fullDescription:
        "Spatial reuse is an optional new feature introduced in Wi-Fi 6 intended to increase the network efficiency in dense deployments where two or more neighboring access points share the same primary channel. There are two types of spatial reuse defined in the standard - OBSS PD based spatial reuse for downlink transmissions and PSR based spatial reuse for trigggered uplink transmissions. However, there is zero adoption of this feature in practice. This talk gives some insights into the reasons behind it and highlights some fundamental problems which have been overlooked by this feature in WiFi 6 and WiFi 7.",
      objectives: [
        "Understand the concept of spatial reuse in Wi-Fi 6 and Wi-Fi 7.",
        "Identify the practical problems leading to zero adoption of spatial reuse.",
        "Discuss the fundamental issues overlooked by this feature.",
        "Gain insights into the limitations of OBSS PD and PSR based spatial reuse."
      ],
      targetAudience:
        "Network engineers, Wi-Fi system designers, researchers, and professionals interested in Wi-Fi 6/7 performance.",
      prerequisites: "Basic understanding of Wi-Fi 6/7 concepts and network efficiency."
    },
     {
      id: "80211-phy-evolution",
      title: "802.11 PHY Evolution, Hits and Misses",
      authors: "Srikanth Subramanian - Nanocell Networks", // Changed
      image: "/images/srikanth_session.png",
      abstract:
        "The WiFi success story has been built on evolving 802.11 standards adding higher speeds and other features. In the PHY evolution, crucial technologies like OFDM, MIMO, higher-order QAM, OFDMA, MU-MIMO etc. have been standardized to move the technology to achieve greater speeds amongst other benefits. In this talk we will talk about what has clicked with respect to practice and some which have not worked well in practice.",
      category: "PHY Layer",
      time: "11:25 AM - 11:50 AM",
      duration: "25 minutes",
      fullDescription:
        "This comprehensive session will take you through the journey of 802.11 PHY layer evolution, examining both the successes and challenges faced in implementing various technologies. We'll explore how OFDM revolutionized wireless communication, the impact of MIMO technology on throughput and reliability, and the practical implications of higher-order QAM modulation schemes. The presentation will also cover the transition to OFDMA and MU-MIMO in Wi-Fi 6, discussing real-world performance versus theoretical expectations.",
      objectives: [
        "Understand the historical evolution of 802.11 PHY layer technologies",
        "Analyze the practical implementation challenges of key technologies",
        "Evaluate the real-world performance of MIMO, OFDM, and QAM",
        "Explore the transition to Wi-Fi 6 technologies like OFDMA and MU-MIMO",
      ],
      targetAudience:
        "Network engineers, RF engineers, wireless technology researchers, and technical professionals working with Wi-Fi systems",
      prerequisites: "Basic understanding of wireless communication principles and 802.11 standards",
    },
    {
      id: "exploring-wifi7-security-enhancements",
      title: "Exploring Wi-Fi 7 Security Enhancements",
      authors: "Rasika Nayanajith - Independent Expert", // Changed
      image: "/images/rasika_session.png",
      abstract:
        "While Wi-Fi 7 (based on IEEE 802.11be) is best known for its speed improvements and low-latency capabilities, it also introduces several key security enhancements that build upon the foundation laid by previous generations. In this session, we’ll explore how Wi-Fi 7 improves wireless security through mandatory WPA3 adoption, enhanced protections for Multi-Link Operation (MLO), and new features like Beacon Protection.",
      category: "Security",
      time: "12:15 PM - 12:40 PM",
      duration: "25 minutes",
      fullDescription:
        "While Wi-Fi 7 (based on IEEE 802.11be) is best known for its speed improvements and low-latency capabilities, it also introduces several key security enhancements that build upon the foundation laid by previous generations. In this session, we’ll explore how Wi-Fi 7 improves wireless security through mandatory WPA3 adoption, enhanced protections for Multi-Link Operation (MLO), and new features like Beacon Protection.",
      objectives: [
        "Understand the security foundation of Wi-Fi 7.",
        "Learn about mandatory WPA3 adoption in Wi-Fi 7.",
        "Explore enhanced protections for Multi-Link Operation (MLO).",
        "Discover new security features like Beacon Protection.",
      ],
      targetAudience:
        "Network security professionals, Wi-Fi system architects, and anyone interested in wireless security advancements.",
      prerequisites: "Basic understanding of Wi-Fi security protocols (WPA2/WPA3)."
    },
    {
      id: "real-time-wifi-testing-insights",
      title: "Real Time WiFi Testing - Providing Immediate Stability & Behavioural Insights",
      authors: "Shashank Tadakamadla - Cambium Networks", // Changed
      image: "/images/sashank_session.png",
      abstract:
        "Real-Time Wi-Fi Testing refers to the continuous and dynamic evaluation of wireless network performance under live, real-world conditions. Unlike traditional lab-based or static test methods, real-time testing simulates active user scenarios, mobility, and real-world interference — providing immediate insights into network behavior and stability.",
      category: "Testing & Validation",
      time: "03:15 PM - 03:40 PM",
      duration: "25 minutes",
      fullDescription:
        "This session explores the evolution from traditional static Wi-Fi testing to dynamic real-time evaluation methodologies. We'll examine how real-time testing frameworks can capture network performance under actual usage conditions, including user mobility, varying traffic loads, and environmental interference. The presentation will cover advanced testing tools and techniques that provide continuous monitoring and instant feedback on network quality, enabling proactive optimization and troubleshooting.",
      objectives: [
        "Understand the limitations of traditional Wi-Fi testing methods",
        "Learn real-time testing frameworks and methodologies",
        "Explore tools for continuous network performance monitoring",
        "Analyze real-world interference patterns and their impact",
        "Implement proactive network optimization strategies",
      ],
      targetAudience: "Network test engineers, QA professionals, Wi-Fi system validators, and network operations teams",
      prerequisites: "Experience with Wi-Fi testing tools and basic understanding of network performance metrics",
    },
    {
      id: "understanding-eht-preamble-wifi7",
      title: "Understanding EHT Preamble in WiFi 7 Phy Layer",
      authors: "Gjermund Raaen - Independent Expert", // Changed
      image: "/images/gjermund_session.png",
      abstract:
        "In this presentation, you will explore how High Efficiency (HE) and Extremely High Throughput (EHT) technologies use content channels to distribute Resource Unit (RU) allocation and user information in their preambles. You'll see how these mechanisms operate across different bandwidths and modes, giving you a practical understanding of how signaling works in Wi-Fi 6 and Wi-Fi 7.",
      category: "PHY Layer",
      time: "02:00 PM - 02:25 PM",
      duration: "25 minutes",
      fullDescription:
        "Dive deep into the intricacies of EHT (802.11be) preambles and their role in advanced Wi-Fi communication. This session will explore how High-Efficiency (HE) and Extremely High Throughput (EHT) technologies leverage content channels to efficiently distribute Resource Unit (RU) allocation and user information within their preambles. We will discuss the variations across different bandwidths and operational modes, providing a comprehensive understanding of the signaling mechanisms that enable Wi-Fi 7's unprecedented performance.",
      objectives: [
        "Understand the structure and purpose of HE and EHT preambles",
        "Learn how content channels are used for RU allocation and user info distribution",
        "Analyze preamble behavior across different bandwidths",
        "Explore various operational modes and their impact on preamble content",
      ],
      targetAudience:
        "Wireless engineers, PHY layer specialists, researchers, and anyone interested in the technical details of Wi-Fi 6 and Wi-Fi 7",
      prerequisites: "Familiarity with 802.11 physical layer concepts and basic understanding of OFDMA",
    },
        {
      id: "Role of AI in Wi-Fi",
      title: "Role of AI in Wi-Fi",
      authors: "Bhuvnesh Sachdeva - HFCL",
      image: "/images/bhuvnesh_session.png",
      abstract:
        "AI is transforming Wi-Fi from reactive, rule-based tuning into adaptive, intent-driven networks that optimize themselves in real time by learning RF conditions, usage patterns, and application needs. This allows AI to orchestrate dynamic channel and power selection, BSS coloring, and beamforming; schedule OFDMA RUs and MU-MIMO groups; and steer clients across bands and APs for consistent Quality of Experience. It also predicts demand at the AP/SSID level, prioritizes latency-sensitive traffic like voice and AR/VR, and optimizes mesh/backhaul paths under congestion. On the spectrum edge, AI classifies interference from IQ data, detects anomalies and rogues, and isolates faulty clients or misconfigurations before users are impacted. At the operations layer, AIOps automates root cause analysis, ticketing, and remediation by correlating logs, events, and telemetry, which reduces manual effort while improving reliability and energy efficiency. From a security perspective, AI enables device fingerprinting, posture-based access, real-time WIDS/WIPS decisions, and continuous risk scoring to shrink threat dwell time, while privacy-preserving designs like edge inference and federated learning keep sensitive data local. My presentation will outline the practical architectures, high-impact use cases, and key performance indicators—such as throughput, latency, and energy per bit—that matter to operators.",
      category: "AI & Automation",
      time: "05:05 PM - 05:30 PM",
      duration: "25 minutes",
      fullDescription:
        "AI is transforming Wi-Fi from reactive, rule-based tuning into adaptive, intent-driven networks that optimize themselves in real time by learning RF conditions, usage patterns, and application needs. This allows AI to orchestrate dynamic channel and power selection, BSS coloring, and beamforming; schedule OFDMA RUs and MU-MIMO groups; and steer clients across bands and APs for consistent Quality of Experience. It also predicts demand at the AP/SSID level, prioritizes latency-sensitive traffic like voice and AR/VR, and optimizes mesh/backhaul paths under congestion. On the spectrum edge, AI classifies interference from IQ data, detects anomalies and rogues, and isolates faulty clients or misconfigurations before users are impacted. At the operations layer, AIOps automates root cause analysis, ticketing, and remediation by correlating logs, events, and telemetry, which reduces manual effort while improving reliability and energy efficiency. From a security perspective, AI enables device fingerprinting, posture-based access, real-time WIDS/WIPS decisions, and continuous risk scoring to shrink threat dwell time, while privacy-preserving designs like edge inference and federated learning keep sensitive data local. My presentation will outline the practical architectures, high-impact use cases, and key performance indicators—such as throughput, latency, and energy per bit—that matter to operators. We will also discuss essential guardrails like data quality, model drift, and explainability, and explore how emerging standards can unlock multi-vendor autonomy, ultimately providing attendees with a blueprint to pilot and scale AI in production Wi-Fi from an assistive to an autonomous model without losing control.",
      objectives: [
        "Understand the concept of automated Wi-Fi test houses in residential settings.",
        "Explore challenges in setting up and managing home-based testbeds.",
        "Learn about automation tools and techniques for Wi-Fi testing at home.",
        "Discover methods for collecting and analyzing Wi-Fi performance data in a home environment.",
      ],
      targetAudience:
        "Wi-Fi test engineers, home automation enthusiasts, network researchers, and product developers looking for cost-effective testing solutions.",
      prerequisites: "Basic understanding of Wi-Fi networking and familiarity with automation concepts."
    },
    {
      id: "nuts-bolts-wifi-openwrt",
      title: "Nuts and Bolts of Wi-Fi and OpenWrt",
      authors: "Shivam Thakur - Plume Design, Inc", // Changed
      image: "/images/shivam_session.png",
      abstract:
        "Brief introduction to linux subsystem to wifi and networking, Openwrt Architecture and Kernel Frameworks, What is new in WiFi 7 in kernel Frameworks, A Live demo on Banana Pi R4: Rust application for managing the WiFi, Understanding the various Mesh Technologies",
      category: "Software & OS",
      time: "09:55 AM - 10:20 AM",
      duration: "25 minutes",
      fullDescription:
        "This session provides a comprehensive look into the underlying mechanisms of Wi-Fi within a Linux environment, with a special focus on OpenWrt. We will cover the architecture and kernel frameworks of OpenWrt, delve into new features introduced in Wi-Fi 7's kernel frameworks, and demonstrate a live application in Rust for managing Wi-Fi on a Banana Pi R4. Additionally, we will explore various mesh technologies and their implications.",
      objectives: [
        "Understand the Linux Wi-Fi and networking subsystem.",
        "Learn about OpenWrt architecture and kernel frameworks.",
        "Discover new Wi-Fi 7 features in kernel frameworks.",
        "Witness a live demo of Wi-Fi management using Rust on Banana Pi R4.",
        "Gain insights into different Mesh Technologies."
      ],
      targetAudience:
        "Embedded developers, network engineers, Linux enthusiasts, and anyone interested in OpenWrt and Wi-Fi internals.",
      prerequisites: "Familiarity with Linux command line and basic networking concepts."
    },
    {
      id: "evaluating-wifi-ble-interference",
      title: "Evaluating Wi-Fi Performance Under BLE Interference Conditions",
      authors: "Manoj K, Yaswanth P, Venu Madhav M",
      image: "/images/manoj_session.png",
      abstract:
        "This session focuses on understanding and evaluating the impact of Bluetooth Low Energy (BLE) interference on Wi-Fi performance. We will discuss methodologies and tools to measure Wi-Fi degradation and analyze real-world scenarios to provide insights into mitigating such interference.",
      category: "Interference & Performance",
      time: "10:20 AM - 10:45 AM",
      duration: "25 minutes",
      fullDescription:
        "As wireless technologies proliferate, understanding co-existence challenges is crucial. This session delves into the specific interference caused by Bluetooth Low Energy (BLE) devices on Wi-Fi networks. We will present various test methodologies, demonstrate the use of specialized tools for performance evaluation under BLE interference, and analyze data from real-world case studies to provide actionable insights for network optimization and interference mitigation strategies.",
      objectives: [
        "Understand the mechanisms of BLE interference on Wi-Fi.",
        "Learn methodologies for evaluating Wi-Fi performance under interference.",
        "Identify key metrics to assess Wi-Fi degradation.",
        "Explore strategies for mitigating BLE interference."
      ],
      targetAudience:
        "RF engineers, network testers, IoT developers, and wireless product developers.",
      prerequisites: "Basic knowledge of Wi-Fi and Bluetooth technologies."
    },
        {
      id: "built-for-engineers-driven-ai",
      title: "Built for Engineers. Driven by AI. Introducing Candela Assist",
      authors: "Vardhan S, Siva K, Sahithi U",
      image: "/images/vardhan_session.png",
      abstract:
        "Candela Assist is a smart assistant platform designed to support Wi-Fi engineers, device manufacturers, and networking professionals in testing, troubleshooting, and optimizing wireless devices. It offers real-time, voice-enabled and text-based assistance to guide users through complex Wi-Fi scenarios—such as configuring Wi-Fi 7 access points, evaluating smart device performance, or analyzing LANforge test results.",
      category: "AI & Automation",
      duration: "25 minutes",
      fullDescription:
        "Candela Assist is a smart assistant platform designed to support Wi-Fi engineers, device manufacturers, and networking professionals in testing, troubleshooting, and optimizing wireless devices. It offers real-time, voice-enabled and text-based assistance to guide users through complex Wi-Fi scenarios—such as configuring Wi-Fi 7 access points, evaluating smart device performance, or analyzing LANforge test results.",
      objectives: [
        "Learn how AI can streamline wireless testing workflows",
        "Understand natural language processing in network testing",
        "Explore automated test generation and execution",
        "See practical demonstrations of Candela Assist capabilities",
      ],
      targetAudience:
        "Test engineers, network administrators, QA professionals, and anyone involved in wireless network validation",
      prerequisites: "Familiarity with wireless network testing concepts and basic understanding of AI/ML principles",
    },
    {
      id: "mlo-behaviour-impact",
      title: "MLO Behaviour: Impact on Legacy Devices and Roaming",
      authors: "Shyamala P, Kiranmai N, Rajendra P",
      image: "/images/shyamala_session.png",
      abstract:
        "Multi-Link Operation (MLO) is a key feature in Wi-Fi 7, enabling devices to transmit and receive data over multiple frequency bands simultaneously. This session will explore how MLO impacts legacy Wi-Fi devices and its implications for seamless roaming experiences in mixed network environments.",
      category: "Wi-Fi 7 Features",
      time: "11:50 AM - 12:15 PM",
      duration: "25 minutes",
      fullDescription:
        "MLO in Wi-Fi 7 promises unprecedented throughput and efficiency. However, its introduction raises critical questions about backward compatibility and roaming behavior in networks with a mix of Wi-Fi 7 and older devices. This session will provide a detailed analysis of MLO's impact on legacy devices, examining potential performance degradation or compatibility issues. We will also discuss how MLO influences roaming decisions and strategies to ensure smooth transitions for all devices in a multi-link environment.",
      objectives: [
        "Understand the principles of Multi-Link Operation (MLO) in Wi-Fi 7.",
        "Analyze MLO's impact on the performance and compatibility of legacy Wi-Fi devices.",
        "Explore how MLO affects roaming behavior and handoffs.",
        "Identify strategies for optimizing MLO in mixed device environments."
      ],
      targetAudience:
        "Network architects, Wi-Fi product managers, test engineers, and wireless network administrators.",
      prerequisites: "Basic understanding of Wi-Fi 6 and Wi-Fi 7 features."
    },
    {
      id: "looking-closer-client-sta-testing",
      title: "Looking Closer at the Client: A Deep Dive into STA side Testing",
      authors: "Sainath P, Deepika B, Badhiri T",
      image: "/images/sainath_session.png",
      abstract:
        "Access point performance is often the primary focus during Wi-Fi testing, but understanding the client (STA) behavior is critical. This talk explores techniques to simulate and analyze various client-side conditions and reactions.",
      category: "Client Analysis & Testing",
      time: "02:25 PM - 02:50 PM",
      duration: "25 minutes",
      fullDescription:
        "While much attention is given to access point optimization, client device behavior significantly impacts overall network performance. This session provides deep insights into how different client devices behave under various network conditions, including power save modes, roaming decisions, and association patterns. We'll explore advanced simulation techniques and analysis tools that help engineers understand and predict client behavior in complex network environments.",
      objectives: [
        "Analyze client device behavior patterns in Wi-Fi networks",
        "Understand power save mechanisms and their impact on performance",
        "Explore client roaming decision algorithms and triggers",
        "Learn simulation techniques for testing client scenarios",
      ],
      targetAudience:
        "Network engineers, Wi-Fi system designers, device manufacturers, and performance optimization specialists",
      prerequisites: "Solid understanding of 802.11 protocol and client-server interactions",
    },

     {
      id: "Protocol-level QA: Real-World WiFi Bugs Seen Through the Packet Lens",
      title: "Protocol-level QA: Real-World WiFi Bugs Seen Through the Packet Lens",
      authors: "Yash S, Sirisha T, Mythri R",
      image: "/images/yash_session.png",
      abstract:
        "This presentation explores intriguing Wi-Fi bugs discovered through protocol-level testing. It aims to provide QA teams with actionable insights on detecting such anomalies and to highlight why packet-level validation is critical for developing resilient Wi-Fi systems.",
      category: "Analytics & Monitoring",
      time: "10:45 AM - 11:10 AM",
      duration: "25 minutes",
      fullDescription:
        "This presentation showcases a collection of interesting Wi-Fi bugs uncovered during rigorous protocol-level testing. By walking through real-world examples, it aims to equip QA teams with practical strategies for spotting such anomalies early in the development cycle. In doing so, it underscores the importance of packet-level validation—not just as a debugging step, but as a foundational practice for ensuring stable, secure, and high-performance Wi-Fi systems.",
      objectives: [
        "Implement real-time packet analysis and visualization.",
        "Create interactive dashboards for network monitoring.",
        "Develop automated alerting systems for performance issues.",
        "Learn best practices for live network debugging."
      ],
      targetAudience:
        "Network administrators, system engineers, DevOps professionals, and network monitoring specialists.",
      prerequisites: "Basic networking knowledge and familiarity with packet analysis tools."
    },

    {
      id: "lab-promises-vs-live-challenges",
      title: "Lab Promises vs Live Challenges - The Evolution of Wi-Fi Lab Testing",
      authors: "Poojitha Y, Anmol S, Rudra S, Veena P",
      image: "/images/anmol_session.png",
      abstract:
        "This session will explore the discrepancies between Wi-Fi performance in controlled lab environments and real-world live deployments. We will discuss the evolution of Wi-Fi lab testing methodologies to better simulate live challenges and bridge this gap.",
      category: "Testing & Validation",
      time: "04:40 PM - 05:05 PM",
      duration: "25 minutes",
      fullDescription:
        "Wi-Fi product development often relies heavily on controlled lab testing, but the actual performance in live environments can vary significantly due to complex real-world factors. This session critically examines the limitations of traditional lab testing and how the industry is evolving to create more realistic and robust testbeds. We will discuss advanced simulation techniques, incorporating real-world interference, and developing new metrics to ensure that lab promises translate into reliable live performance.",
      objectives: [
        "Understand the differences between lab and live Wi-Fi performance.",
        "Explore the evolution of Wi-Fi lab testing methodologies.",
        "Identify key challenges in simulating real-world Wi-Fi environments.",
        "Learn about new approaches to bridge the gap between lab and live performance.",
      ],
      targetAudience:
        "Wi-Fi test engineers, quality assurance professionals, product developers, and network architects.",
      prerequisites: "Familiarity with Wi-Fi testing concepts and network performance metrics."
    },
    {
      id: "turning-homes-into-labs",
      title: "Turning homes into Labs - Automating Wi-Fi Test Houses",
      authors: "Akhil P, Saurabh G, Litin O, Md Aarif",
      image: "/images/akhil_session.png",
      abstract:
        "This session explores innovative approaches to transform residential environments into automated Wi-Fi test houses. We will discuss the challenges and solutions for setting up cost-effective, scalable, and reproducible testbeds in home settings for extensive Wi-Fi testing.",
      category: "Testing & Automation",
      time: "05:05 PM - 05:30 PM",
      duration: "25 minutes",
      fullDescription:
        "With the increasing complexity of Wi-Fi networks and device interactions, traditional lab setups can be limiting. This session presents a revolutionary approach: leveraging homes as distributed, automated Wi-Fi test environments. We will delve into the practicalities of instrumenting a home network for comprehensive testing, including setting up automation frameworks, collecting diverse performance data, and analyzing results. Learn how to create scalable and cost-efficient test houses for continuous Wi-Fi validation.",
      objectives: [
        "Understand the concept of automated Wi-Fi test houses in residential settings.",
        "Explore challenges in setting up and managing home-based testbeds.",
        "Learn about automation tools and techniques for Wi-Fi testing at home.",
        "Discover methods for collecting and analyzing Wi-Fi performance data in a home environment.",
      ],
      targetAudience:
        "Wi-Fi test engineers, home automation enthusiasts, network researchers, and product developers looking for cost-effective testing solutions.",
      prerequisites: "Basic understanding of Wi-Fi networking and familiarity with automation concepts."
    },
  ];

 const handleBackToHome = () => {
    // This function can be used for other navigation if needed
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <Header onBackToHome={handleBackToHome} currentEdition={currentEdition} setCurrentEdition={setCurrentEdition} />
      <HeroSection currentEdition={currentEdition} />

      {/* Vizag Edition: Show all sections */}
      {currentEdition === "vizag" && (
        <>
          <PosterSection currentEdition={currentEdition} />
          <StatsSection />
          <VideosSection />
          <SpeakersSection />
          <SessionsSection sessions={sessions} />
          <PanelDiscussionSection />
        </>
      )}

      {/* Bangalore Edition: Show PosterSection and StatsSection */}
      {currentEdition === "bangalore" && (
        <>
          <PosterSection currentEdition={currentEdition} />
          {/* <StatsSection /> */}
        </>
      )}

      <ContactSection />
      <Footer />
    </div>
  )
}

export default App