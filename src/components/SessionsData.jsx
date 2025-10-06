export const sessionsData = [
  {
    id: "phy-evolution",
    title: "802.11 PHY evolution; hits and misses",
    authors: "Dr. Srikanth",
    abstract:
      "The WiFi success story has been built on evolving 802.11 standards adding higher speeds and other features. In the PHY evolution, crucial technologies like OFDM, MIMO, higher-order QAM, OFDMA, MU-MIMO etc. have been standardized to move the technology to achieve greater speeds amongst other benefits. In this talk we will talk about what has clicked with respect to practice and some which have not worked well in practice.",
    category: "PHY Layer",
    time: "9:00 AM - 10:00 AM",
    duration: "60 minutes",
    fullDescription:
      "This comprehensive session will take you through the journey of 802.11 PHY layer evolution, examining both the successes and challenges faced in implementing various technologies. We'll explore how OFDM revolutionized wireless communication, the impact of MIMO technology on throughput and reliability, and the practical implications of higher-order QAM modulation schemes. The presentation will also cover the transition to OFDMA and MU-MIMO in Wi-Fi 6, discussing real-world performance versus theoretical expectations.",
    objectives: [
      "Trace the evolution of key PHY-layer technologies in the IEEE 802.11 standards, including OFDM, MIMO, OFDMA, and MU-MIMO.",
      "Understand the role of higher-order modulation schemes like QAM in driving Wi-Fi throughput improvements.",
      "Examine which PHY features have been successfully adopted in real-world deployments and contributed to Wi-Fi's growth.",
      "Analyze the gaps between standardized PHY capabilities and their practical adoption or performance impact.",
      "Foster critical thinking around the future direction of PHY innovations and how to align them with deployment realities."
    ],
    targetAudience:
      "Network engineers, RF engineers, wireless technology researchers, and technical professionals working with Wi-Fi systems",
    prerequisites: "Basic understanding of wireless communication principles and 802.11 standards",
  },
  {
    id: "adaptive-dfs",
    title: "Exploring Wi-Fi 7’s Security Enhancements",
    authors: "Rasika",
    abstract:
      "While Wi-Fi 7 (based on IEEE 802.11be) is best known for its speed improvements and low-latency capabilities, it also introduces several key security enhancements that build upon the foundation laid by previous generations. In this session, we’ll explore how Wi-Fi 7 improves wireless security through mandatory WPA3 adoption, enhanced protections for Multi-Link Operation (MLO), and new features like Beacon Protection.",
    category: "Network Optimization",
    time: "11:45 AM - 12:45 PM",
    duration: "60 minutes",
    fullDescription:
      "While Wi-Fi 7 (based on IEEE 802.11be) is best known for its speed improvements and low-latency capabilities, it also introduces several key security enhancements that build upon the foundation laid by previous generations. In this session, we’ll explore how Wi-Fi 7 improves wireless security through mandatory WPA3 adoption, enhanced protections for Multi-Link Operation (MLO), and new features like Beacon Protection.",
    objectives: [
      "Understand the security landscape of Wi-Fi 7 as defined by the IEEE 802.11be standard.",
      "Examine how Wi-Fi 7 enforces WPA3 as a mandatory security protocol and its implications for device and network compatibility.",
      "Explore the security challenges and solutions introduced for Multi-Link Operation (MLO) in Wi-Fi 7.",
      "Learn about new protective features like Beacon Protection and their role in safeguarding management frames.",
      "Compare Wi-Fi 7's security enhancements with previous Wi-Fi generations to assess the evolution of wireless protection mechanisms."
    ],
    targetAudience:
      "RF engineers, network planners, wireless system architects, and regulatory compliance professionals",
    prerequisites: "Understanding of 5 GHz spectrum regulations and basic knowledge of radar systems",
  },
  {
    id: "adaptive-dfs",
    title: "Enhancing Channel Selection with Adaptive DFS",
    authors: "Shashank Tadakamadla",
    abstract:
      "Real-Time Wi-Fi Testing refers to the continuous and dynamic evaluation of wireless network performance under live, real-world conditions. Unlike traditional lab-based or static test methods, real-time testing simulates active user scenarios, mobility, and real-world interference — providing immediate insights into network behavior and stability.",
    category: "Network Optimization",
    time: "11:45 AM - 12:45 PM",
    duration: "60 minutes",
    fullDescription:
      "Real-Time Wi-Fi Testing refers to the continuous and dynamic evaluation of wireless network performance under live, real-world conditions. Unlike traditional lab-based or static test methods, real-time testing simulates active user scenarios, mobility, and real-world interference — providing immediate insights into network behavior and stability.",
    objectives: [
      "Define the concept of Real-Time Wi-Fi Testing and how it differs from traditional lab-based or static testing methods.",
      "Explore techniques for simulating real-world user behavior, mobility, and interference in wireless networks.",
      "Understand the tools and frameworks used for conducting real-time testing in dynamic environments.",
      "Evaluate the benefits of real-time insights into network performance, stability, and responsiveness.",
      "Discuss practical applications of real-time testing in network validation, optimization, and deployment readiness."
    ],
    targetAudience:
      "RF engineers, network planners, wireless system architects, and regulatory compliance professionals",
    prerequisites: "Understanding of 5 GHz spectrum regulations and basic knowledge of radar systems",
  },
  {
    id: "adaptive-dfs",
    title: "The problems with spatial reuse",
    authors: "Susinder Gulasekaran",
    abstract:
      "Spatial reuse is an optional new feature introduced in Wi-Fi 6 intended to increase the network efficiency in dense deployments where two or more neighboring access points share the same primary channel. There are two types of spatial reuse defined in the standard - OBSS PD based spatial reuse for downlink transmissions and PSR based spatial reuse for trigggered uplink transmissions. However, there is zero adoption of this feature in practice. This talk gives some insights into the reasons behind it and highlights some fundamental problems which have been overlooked by this feature in WiFi 6 and WiFi 7.",
    category: "Network Optimization",
    time: "11:45 AM - 12:45 PM",
    duration: "60 minutes",
    fullDescription:
      "Spatial reuse is an optional new feature introduced in Wi-Fi 6 intended to increase the network efficiency in dense deployments where two or more neighboring access points share the same primary channel. There are two types of spatial reuse defined in the standard - OBSS PD based spatial reuse for downlink transmissions and PSR based spatial reuse for trigggered uplink transmissions. However, there is zero adoption of this feature in practice. This talk gives some insights into the reasons behind it and highlights some fundamental problems which have been overlooked by this feature in WiFi 6 and WiFi 7.",
    objectives: [
      "Understand the concept of spatial reuse as introduced in Wi-Fi 6 and extended in Wi-Fi 7, including OBSS PD and PSR mechanisms.",
      "Analyze the practical challenges and limitations preventing real-world adoption of spatial reuse in dense wireless deployments.",
      "Explore the technical and architectural shortcomings in the Wi-Fi standards that impact the effectiveness of spatial reuse.",
      "Review empirical observations and case studies that illustrate the disconnect between theoretical gains and actual deployment realities.",
      "Discuss potential directions for improving spatial reuse mechanisms in future Wi-Fi revisions or alternative solutions."
    ],
    targetAudience:
      "RF engineers, network planners, wireless system architects, and regulatory compliance professionals",
    prerequisites: "Understanding of 5 GHz spectrum regulations and basic knowledge of radar systems",
  },
  {
    id: "adaptive-dfs",
    title: "Nuts and Bolts of Wifi and OpenWrt",
    authors: "Shivam Thakur",
    abstract:
      "Brief introduction to linux subsystem to wifi and networking , ⁠Openwrt Architecture and Kernel Frameworks, ⁠What is new in WiFi 7 in kernel Frameworks,  A Live demo on Banana Pi R4: Rust application for managing the WiFi , ⁠Understanding the various Mesh Technologies",
    category: "Network Optimization",
    time: "11:45 AM - 12:45 PM",
    duration: "60 minutes",
    fullDescription:
      "Brief introduction to linux subsystem to wifi and networking , ⁠Openwrt Architecture and Kernel Frameworks, ⁠What is new in WiFi 7 in kernel Frameworks,  A Live demo on Banana Pi R4: Rust application for managing the WiFi , ⁠Understanding the various Mesh Technologies",
    objectives: [
      "Gain a foundational understanding of the Linux networking and Wi-Fi subsystem, including key kernel interfaces.",
      "Explore the architecture of OpenWrt and its integration with Linux kernel networking frameworks.",
      "Understand the enhancements introduced by Wi-Fi 7 in the Linux kernel and how they impact wireless driver development.",
      "Demonstrate practical use of Rust in embedded systems through a live demo on Banana Pi R4 for Wi-Fi management.",
      "Compare and analyze various mesh networking technologies supported in Linux and OpenWrt ecosystems.",
      "Develop the ability to navigate and extend kernel frameworks for wireless and mesh networking use cases."
    ],
    targetAudience:
      "RF engineers, network planners, wireless system architects, and regulatory compliance professionals",
    prerequisites: "Understanding of 5 GHz spectrum regulations and basic knowledge of radar systems",
  },
  {
    id: "candela-assist",
    title: "Built for Engineers. Driven by AI. Introducing Candela Assist",
    authors: "Vardhan, Siva & Sahithi",
    abstract:
      "Candela Assist is an advanced, AI-powered platform designed to streamline wireless testing workflows. It integrates natural language understanding, automation, and visualization tools to empower engineers to design and validate Wi-Fi networks more efficiently.",
    category: "AI & Automation",
    time: "10:30 AM - 11:30 AM",
    duration: "60 minutes",
    fullDescription:
      "Discover how artificial intelligence is transforming wireless network testing with Candela Assist. This session will demonstrate how natural language processing can simplify complex testing procedures, allowing engineers to describe test scenarios in plain English and have them automatically translated into executable test configurations. We'll showcase real-world examples of how AI-driven automation reduces testing time, improves accuracy, and enables more comprehensive network validation.",
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
    id: "seamless-switchover",
    title: "Seamless Switchover Between Wi-Fi and Cellular using Policy Engines",
    authors: "Manoj, Sirisha",
    abstract:
      "To evaluate the performance, reliability, and logic behind seamless transitions between Wi-Fi and 5G networks using programmable policy engines. This includes a demonstration of real-world testing scenarios and KPIs.",
    category: "Network Integration",
    time: "2:00 PM - 3:00 PM",
    duration: "60 minutes",
    fullDescription:
      "As mobile devices increasingly rely on both Wi-Fi and cellular connectivity, seamless handoffs between these technologies become critical for user experience. This session explores programmable policy engines that can intelligently manage network transitions based on signal quality, network load, application requirements, and user preferences. We'll demonstrate real-world testing scenarios and analyze key performance indicators that determine handoff success.",
    objectives: [
      "Understand the challenges of Wi-Fi to cellular handoffs",
      "Learn about programmable policy engines for network selection",
      "Explore KPIs and metrics for evaluating handoff performance",
      "See live demonstrations of seamless network transitions",
    ],
    targetAudience:
      "Mobile network engineers, system integrators, telecom professionals, and mobility solution developers",
    prerequisites: "Knowledge of both Wi-Fi and cellular network technologies",
  },
  {
    id: "client-behavior",
    title: "Looking closer at the client: A deep dive into STA behavior",
    authors: "Sainath, Deepika",
    abstract:
      "Access point performance is often the primary focus during Wi-Fi testing, but understanding the client (STA) behavior is critical. This talk explores techniques to simulate and analyze various client-side conditions and reactions.",
    category: "Client Analysis",
    time: "3:15 PM - 4:15 PM",
    duration: "60 minutes",
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
    id: "traffic-analysis",
    title: "Packet to Panel: Real-Time Network Traffic Analysis Dashboard",
    authors: "Renusree, Nikitha",
    abstract:
      "Traditional analysis of WiFi performance issues is often manual and post-event. This project introduces a real-time dashboard that visualizes network traffic, latency spikes, and device-specific statistics, enabling live debugging.",
    category: "Analytics",
    time: "4:30 PM - 5:30 PM",
    duration: "60 minutes",
    fullDescription:
      "Transform your network troubleshooting approach with real-time visualization and analytics. This session introduces an innovative dashboard that processes network packets in real-time, providing instant insights into traffic patterns, performance bottlenecks, and device-specific issues. Learn how to move from reactive to proactive network management with live monitoring and automated alerting systems.",
    objectives: [
      "Implement real-time packet analysis and visualization",
      "Create interactive dashboards for network monitoring",
      "Develop automated alerting systems for performance issues",
      "Learn best practices for live network debugging",
    ],
    targetAudience:
      "Network administrators, system engineers, DevOps professionals, and network monitoring specialists",
    prerequisites: "Basic networking knowledge and familiarity with packet analysis tools",
  },
  {
      id: "real-time-testing",
      title: "Real Time WiFi Testing",
      authors: "Shashank Tadakamadla",
      abstract:
        "Real-Time Wi-Fi Testing refers to the continuous and dynamic evaluation of wireless network performance under live, real-world conditions. Unlike traditional lab-based or static test methods, real-time testing simulates active user scenarios, mobility, and real-world interference — providing immediate insights into network behavior and stability.",
      category: "Testing & Validation",
      time: "5:45 PM - 6:30 PM",
      duration: "45 minutes",
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
] 