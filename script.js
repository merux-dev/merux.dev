/**
     * Comprehensive Bilingual Dictionary (EN & NL)
     * Ensures instant zero-reload language switching while keeping SEO meta tags synchronized.
     */
    const I18N = {
      en: {
        meta_title: 'merux.dev | Sovereign Cloud Systems, Kubernetes & Enterprise Nextcloud',
        meta_desc:
          'Job (merux.dev) - Cloud Native Engineer & Kubernetes Engineer specializing in EU Digital Sovereignty, Enterprise Nextcloud on Kubernetes, Azure AKS, GitOps, and LGTM Observability.',
        nav_services: 'Solutions & Services',
        nav_nextcloud: 'Nextcloud Architecture',
        nav_projects: 'Enterprise Portfolio',
        nav_charts: 'Helm Charts',
        nav_about: 'About & Stack',
        nav_cta: 'Work With Me',
        hero_badge: 'Open to Sovereign Cloud & Kubernetes Opportunities - Advisory, Interim & Implementation',
        hero_title: 'Digital Sovereignty, Engineered for Production.',
        hero_subtitle:
          'I help organizations, public-sector teams, and self-hosting engineers replace Big Tech lock-in with resilient, EU-compliant infrastructure. From high-availability Nextcloud on Kubernetes to mission-critical Azure AKS automation.',
        hero_cta_primary: 'Discuss an Implementation or Role',
        hero_cta_secondary: 'Explore Nextcloud Architecture',
        aud_org_title: 'Adopt Sovereign Cloud Without Operational Risk',
        aud_org_desc:
          'Looking to reduce Microsoft 365 / Big Tech dependency, harden Azure AKS clusters, or deploy an EU-hosted Nextcloud workplace? I bring hands-on public-sector and railway-grade engineering directly to your team.',
        aud_org_link1: 'View Implementation Services →',
        aud_org_link2: 'Centric & ProRail Track Record →',
        aud_dev_title: 'Production Blueprints & Open-Source Helm Charts',
        aud_dev_desc:
          'Running Nextcloud beyond a single Docker Compose file? Inspect my full Proxmox + Rancher Kubernetes topology, Talk High Performance Backend (HPB) setup, GitOps workflows, and ready-to-use Helm charts.',
        aud_dev_link1: 'Interactive Topology & Design Choices →',
        aud_dev_link2: 'Install Merux Helm Charts →',
        stat_k8s_label: 'Kubernetes & Rancher',
        stat_azure_label: 'Microsoft Azure & IaC',
        stat_obs_label: 'Logging & Observability',
        stat_sov_label: 'Data Residency Focus',
        stat_years: 'Years',
        srv_heading: 'How We Can Work Together',
        srv_subheading:
          'Whether your organization is launching a sovereign digital workplace, modernizing Kubernetes operations, or seeking an experienced Cloud Native Engineer, I deliver pragmatic, code-driven results.',
        srv1_title: 'Sovereign Nextcloud & Digital Workplace',
        srv1_desc:
          'End-to-end architecture and deployment of Nextcloud Enterprise/Hub on Kubernetes or hybrid infrastructure. Includes Nextcloud Talk + High Performance Backend (HPB), Keycloak SSO, ClamAV malware scanning, and strict EU data residency.',
        srv2_title: 'Kubernetes & Azure (AKS) Platform Engineering',
        srv2_desc:
          'Production cluster design, multi-cluster Rancher governance, Ingress modernization (NGINX to Traefik), zero-downtime release pipelines, and Cloud Adoption Framework (CAF) Least-Privilege RBAC security hardening.',
        srv3_title: 'Observability (LGTM) & GitOps Automation',
        srv3_desc:
          'Cut infrastructure overhead and accelerate root-cause analysis by migrating legacy ELK stacks to Grafana, Loki, Tempo, and Mimir-paired with reproducible Infrastructure as Code (Terraform, Bicep, ArgoCD).',
        srv4_title: 'Architecture Audits & Self-Hosting Advisory',
        srv4_desc:
          'Dedicated architectural reviews, custom Helm chart development, and migration roadmaps for IT teams or advanced self-hosters transitioning from single-server Docker setups to resilient clusters.',
        nc_heading: 'Self-Hosting Nextcloud: No Big Tech, Full Control',
        nc_subheading:
          'When relying on hyperscale cloud suites, physical data location and legal jurisdiction are out of your hands. Click any component in the live topology below to inspect how I run Nextcloud in production on Proxmox & Kubernetes.',
        nc_hint: 'Interactive Diagram: Click any node',
        dec1_title: 'Why Kubernetes Over Single-Host Docker?',
        dec1_desc:
          'A serious collaboration platform (storage, caching, signaling, AV, IAM) cannot rely on a single point of failure. Kubernetes delivers self-healing, modular isolation, and rolling updates without downtime.',
        dec2_title: 'Database Outside the Cluster',
        dec2_desc:
          'Running MariaDB on a dedicated Proxmox VM outside Kubernetes makes stateful lifecycle management rock-solid-enabling instant hypervisor snapshots and isolated firewall rules.',
        dec3_title: 'Declarative GitOps via ArgoCD',
        dec3_desc:
          'Zero manual changes in production. Every manifest and Helm release lives in private Bitbucket repositories; ArgoCD continuously reconciles cluster state with Git.',
        dec4_title: 'Talk + High Performance Backend',
        dec4_desc:
          'Offloading WebRTC media streams to a dedicated Spreed Signaling HPB keeps video conferences crisp for teams while protecting core Nextcloud web workers from CPU spikes.',
        proj_heading: 'Enterprise & Public Sector Case Studies',
        proj_subheading:
          'Real-world cloud infrastructure, compliance-by-design, and mission-critical Kubernetes operations delivered in high-stakes Dutch environments.',
        centric_role: 'Role: Infrastructure Specialist / Cloud Engineer',
        centric_c1_title: 'Government Cloud Landing Zones',
        centric_c1_desc:
          'Designed and deployed secure Azure landing zones for Dutch municipalities and government agencies fully as-code using Bicep, adhering strictly to the Microsoft Cloud Adoption Framework (CAF) and national security baselines.',
        centric_c2_title: 'Sovereign Digital Workplace PoC',
        centric_c2_desc:
          'Spearheaded a strategic alternative to standard Big Tech office suites (such as Microsoft 365), enabling public institutions to retain 100% data ownership, jurisdictional control, and operational autonomy.',
        centric_c3_title: 'Lead Architecture: Nextcloud on Kubernetes',
        centric_c3_desc:
          'Leading technical realization of a High-Availability Nextcloud architecture on Kubernetes-combining cloud-native horizontal scalability with strict EU data residency guarantees.',
        prorail_role: 'Role: Cloud Automation Engineer / Kubernetes Operations Engineer',
        prorail_c1_title: 'Zero-Downtime CI/CD & Core Platform',
        prorail_c1_desc:
          'Automated lifecycle management of mission-critical AKS clusters supporting national railway Java applications, including Keycloak IAM and RabbitMQ messaging, enabling monthly patch rollouts with zero downtime via Jenkins & Bitbucket.',
        prorail_c2_title: 'NGINX → Traefik & ELK → LGTM Migration',
        prorail_c2_desc:
          'Executed a major architectural modernization: migrated ingress from NGINX to Traefik and replaced a heavy legacy ELK cluster with Grafana, Loki, Tempo, and Mimir-delivering faster queries, distributed tracing, and lower compute footprint.',
        prorail_c3_title: 'Terraform IaC & Least-Privilege RBAC',
        prorail_c3_desc:
          'Codified cluster provisioning with Terraform and drastically reduced the attack surface by eliminating standing Global Owner/Contributor permissions in favor of fine-grained CAF Least-Privilege RBAC.',
        charts_heading: 'Merux Public Helm Chart Repository',
        charts_subheading:
          'Standardized, hardened Kubernetes Helm charts built from real production deployments-free for both self-hosters and enterprise platform teams.',
        charts_visit: 'Visit charts.merux.dev',
        copy_btn: 'Copy Command',
        chart1_desc:
          'Production-ready Helm chart for deploying Nextcloud Talk integrations on Kubernetes clusters with clean service discovery.',
        chart2_desc:
          'Dedicated Nextcloud Spreed High Performance Backend (HPB) signaling chart for low-latency WebRTC audio/video calls at scale.',
        chart3_desc:
          'Automated ClamAV antivirus daemon chart engineered for seamless integration with Nextcloud file upload scanning pipelines.',
        about_heading: "Hi, I'm Job - Cloud Native Engineer & Kubernetes Engineer",
        about_p1:
          'Operating at the intersection of enterprise cloud reliability and open-source container orchestration, I help organizations navigate a critical shift: reclaiming digital sovereignty without sacrificing modern developer velocity.',
        about_p2:
          'From securing government Azure environments at Centric and modernizing mission-critical railway AKS clusters at ProRail, to architecting self-hosted Nextcloud ecosystems on Kubernetes, my philosophy is simple: automate everything as code, eliminate single points of failure, and keep critical data under your own jurisdiction.',
        contact_badge: 'DIRECT LINE • RESPONSE WITHIN 24H',
        contact_heading: 'Start a Conversation',
        contact_subheading:
          'Interested in implementing a sovereign Nextcloud environment, hiring a Cloud Native / Kubernetes Engineer, or discussing a self-hosting architecture challenge? Compose a structured message below or reach out directly at info@merux.dev.',
        form_role_label: 'I am reaching out as',
        form_topic_label: 'Primary Topic',
        form_name_label: 'Your Name & Organization',
        form_email_label: 'Your Return Email',
        form_msg_label: 'Project Context, Timeline, or Question',
        form_submit: 'Open Pre-Filled Email (info@merux.dev)',
        form_copy_email: 'Copy info@merux.dev',
        footer_tagline: 'Sovereign Cloud Systems & Kubernetes Architecture',
      },
      nl: {
        meta_title: 'merux.dev | Sovereign Cloud Systems, Kubernetes & Enterprise Nextcloud',
        meta_desc:
          'Job (merux.dev) - Cloud Native Engineer & Kubernetes Engineer gespecialiseerd in Digitale Soevereiniteit, Enterprise Nextcloud op Kubernetes, Azure AKS, GitOps en LGTM Observability.',
        nav_services: 'Oplossingen & Diensten',
        nav_nextcloud: 'Nextcloud Architectuur',
        nav_projects: 'Enterprise Portfolio',
        nav_charts: 'Helm Charts',
        nav_about: 'Over Mij & Stack',
        nav_cta: 'Samenwerken',
        hero_badge: 'Beschikbaar voor Sovereign Cloud & Kubernetes Opdrachten - Advies, Interim & Implementatie',
        hero_title: 'Digitale Soevereiniteit, Ontworpen voor Productie.',
        hero_subtitle:
          'Ik help organisaties, publieke instellingen en self-hosting engineers om Big Tech-afhankelijkheid te vervangen door robuuste, EU-soevereine infrastructuur. Van high-available Nextcloud op Kubernetes tot missiekritieke Azure AKS-automatisering.',
        hero_cta_primary: 'Bespreek een Implementatie of Rol',
        hero_cta_secondary: 'Bekijk Nextcloud Architectuur',
        aud_org_title: 'Sovereign Cloud Zonder Operationeel Risico',
        aud_org_desc:
          'Wil je de afhankelijkheid van Microsoft 365 / Big Tech verkleinen, Azure AKS-clusters beveiligen of een eigen Nextcloud-werkplek uitrollen? Ik breng publieke-sector en spoorweg-waardige engineering direct naar jouw team.',
        aud_org_link1: 'Bekijk Implementatiediensten →',
        aud_org_link2: 'Ervaring bij Centric & ProRail →',
        aud_dev_title: 'Productie-Blauwdrukken & Open-Source Helm Charts',
        aud_dev_desc:
          'Draai je Nextcloud voorbij een simpele Docker Compose setup? Bekijk mijn volledige Proxmox + Rancher Kubernetes topologie, Talk High Performance Backend (HPB), GitOps workflows en kant-en-klare Helm charts.',
        aud_dev_link1: 'Interactieve Topologie & Keuzes →',
        aud_dev_link2: 'Installeer Merux Helm Charts →',
        stat_k8s_label: 'Kubernetes & Rancher',
        stat_azure_label: 'Microsoft Azure & IaC',
        stat_obs_label: 'Logging & Observability',
        stat_sov_label: 'Data Residency Focus',
        stat_years: 'Jaar',
        srv_heading: 'Hoe We Kunnen Samenwerken',
        srv_subheading:
          'Of jouw organisatie nu een soevereine digitale werkplek start, Kubernetes-operaties moderniseert of een ervaren Cloud Native Engineer zoekt: ik lever pragmatische, code-gedreven resultaten.',
        srv1_title: 'Soevereine Nextcloud & Digitale Werkplek',
        srv1_desc:
          'End-to-end architectuur en uitrol van Nextcloud Enterprise/Hub op Kubernetes of hybride infrastructuur. Inclusief Nextcloud Talk + High Performance Backend (HPB), Keycloak SSO, ClamAV virusscanning en strikte EU data-residency.',
        srv2_title: 'Kubernetes & Azure (AKS) Platform Engineering',
        srv2_desc:
          'Productie-clusterontwerp, multi-cluster Rancher beheer, Ingress-migraties (NGINX naar Traefik), zero-downtime release pipelines en Cloud Adoption Framework (CAF) Least-Privilege RBAC security hardening.',
        srv3_title: 'Observability (LGTM) & GitOps Automatisering',
        srv3_desc:
          'Verlaag resourcekosten en versnel root-cause analyse door legacy ELK-stacks te migreren naar Grafana, Loki, Tempo en Mimir-gecombineerd met reproduceerbare Infrastructure as Code (Terraform, Bicep, ArgoCD).',
        srv4_title: 'Architectuur Audits & Self-Hosting Advies',
        srv4_desc:
          'Gerichte architectuurreviews, custom Helm chart ontwikkeling en migratie-roadmaps voor IT-teams of gevorderde self-hosters die opschalen van single-server Docker naar hoogbeschikbare clusters.',
        nc_heading: 'Zelf Hosten van Nextcloud: Geen Big Tech, Maar Eigen Regie',
        nc_subheading:
          'Bij grote cloudproviders is het vaak onduidelijk waar je data fysiek staat en onder welk recht deze valt. Klik op een component in de interactieve topologie om te zien hoe ik Nextcloud draai op Proxmox & Kubernetes.',
        nc_hint: 'Interactief Diagram: Klik op een node',
        dec1_title: 'Waarom Kubernetes i.p.v. Single-Host Docker?',
        dec1_desc:
          'Een serieuze samenwerkingsomgeving (opslag, caching, signaling, AV, IAM) mag niet op één kwetsbaar punt leunen. Kubernetes biedt self-healing, modulaire scheiding en updates zonder downtime.',
        dec2_title: 'De Database Buiten het Cluster',
        dec2_desc:
          'Door MariaDB op een dedicated Proxmox VM buiten Kubernetes te draaien blijft stateful databeheer uiterst betrouwbaar-met directe hypervisor-snapshots achter een strikte firewall.',
        dec3_title: 'Geautomatiseerd Beheer via ArgoCD GitOps',
        dec3_desc:
          'Niets wordt handmatig aangepast op productie. Alle manifests en Helm-configuraties staan in private Bitbucket-repositories; ArgoCD synchroniseert continu de gewenste status.',
        dec4_title: 'Talk + High Performance Backend (HPB)',
        dec4_desc:
          'Door WebRTC-videostreams af te handelen via een aparte Spreed Signaling HPB blijven videovergaderingen vloeiend terwijl de Nextcloud web-workers worden ontlast.',
        proj_heading: 'Enterprise & Publieke Sector Case Studies',
        proj_subheading:
          'Bewezen cloud-infrastructuur, compliance-by-design en missiekritieke Kubernetes-operaties gerealiseerd in veeleisende Nederlandse omgevingen.',
        centric_role: 'Rol: Infrastructure Specialist / Cloud Engineer',
        centric_c1_title: 'Government Cloud Landing Zones',
        centric_c1_desc:
          'Ontwerp en uitrol van veilige Azure-landing zones voor Nederlandse gemeenten en overheidsinstanties volledig as-code via Bicep, strikt ingericht volgens het Microsoft Cloud Adoption Framework (CAF).',
        centric_c2_title: 'Proof of Concept: Soevereine Digitale Werkplek',
        centric_c2_desc:
          'Ontwikkeling van een strategisch alternatief voor standaard Big Tech-werkplekken (zoals Microsoft 365), waarmee overheden 100% data-eigenaarschap en regie behouden.',
        centric_c3_title: 'Leidende Architectuur: Nextcloud op Kubernetes',
        centric_c3_desc:
          'Technische realisatie van een High-Availability Nextcloud-opzet op Kubernetes-waarbij moderne schaalbaarheid wordt gecombineerd met strikte EU data-residency eisen.',
        prorail_role: 'Rol: Cloud Automation Engineer / Kubernetes Operations Engineer',
        prorail_c1_title: 'Zero-Downtime CI/CD & Core Platform',
        prorail_c1_desc:
          'Geautomatiseerd beheer van missiekritieke AKS-clusters voor Nederlandse spoorweg-applicaties (Java, Keycloak IAM, RabbitMQ), inclusief maandelijkse patch-updates zonder downtime via Jenkins & Bitbucket.',
        prorail_c2_title: 'NGINX → Traefik & ELK → LGTM Migratie',
        prorail_c2_desc:
          'Complexe architectuurtransitie uitgevoerd: ingress gemigreerd van NGINX naar Traefik en legacy ELK vervangen door Grafana, Loki, Tempo en Mimir-met snellere queries, distributed tracing en lagere resourcekosten.',
        prorail_c3_title: 'Terraform IaC & Least-Privilege RBAC',
        prorail_c3_desc:
          'Cluster-provisioning vastgelegd in Terraform en het aanvalsoppervlak verkleind door permanente Global Owner/Contributor rechten te vervangen door fijnmazige CAF Least-Privilege RBAC.',
        charts_heading: 'Merux Publieke Helm Chart Repository',
        charts_subheading:
          'Gestandaardiseerde, geharde Kubernetes Helm charts uit echte productieomgevingen-vrij beschikbaar voor zowel self-hosters als enterprise platformteams.',
        charts_visit: 'Bezoek charts.merux.dev',
        copy_btn: 'Kopieer Commando',
        chart1_desc:
          'Productie-klare Helm chart voor het uitrollen van Nextcloud Talk integraties op Kubernetes-clusters.',
        chart2_desc:
          'Dedicated Nextcloud Spreed High Performance Backend (HPB) signaling chart voor vloeiende WebRTC audio- en videogesprekken op schaal.',
        chart3_desc:
          'Geautomatiseerde ClamAV virusscanner chart voor naadloze integratie met Nextcloud bestandsuploads.',
        about_heading: 'Hoi, ik ben Job - Cloud Native Engineer & Kubernetes Engineer',
        about_p1:
          'Op het snijvlak van enterprise cloud-betrouwbaarheid en moderne container-orkestratie help ik organisaties bij een cruciale transitie: digitale soevereiniteit terugwinnen zonder in te leveren op snelheid en stabiliteit.',
        about_p2:
          'Van het beveiligen van overheids-Azure omgevingen bij Centric en het moderniseren van missiekritieke AKS-clusters bij ProRail, tot het bouwen van zelf-gehoste Nextcloud-ecosystemen op Kubernetes: automatiseer alles als code, voorkom single points of failure en houd vitale data onder eigen regie.',
        contact_badge: 'DIRECT CONTACT • REACTIE BINNEN 24 UUR',
        contact_heading: 'Start een Gesprek',
        contact_subheading:
          'Interesse in het implementeren van een soevereine Nextcloud-omgeving, het inhuren van een Cloud Native / Kubernetes Engineer, of sparren over een architectuurvraagstuk? Stel hieronder een bericht samen of mail direct naar info@merux.dev.',
        form_role_label: 'Ik neem contact op namens / als',
        form_topic_label: 'Onderwerp',
        form_name_label: 'Jouw Naam & Organisatie',
        form_email_label: 'Jouw E-mailadres',
        form_msg_label: 'Projectcontext, Planning of Vraag',
        form_submit: 'Open Vooringevulde E-mail (info@merux.dev)',
        form_copy_email: 'Kopieer info@merux.dev',
        footer_tagline: 'Sovereign Cloud Systems & Kubernetes Architectuur',
      },
    };

    /**
     * Interactive Architecture Node Details (Bilingual EN & NL)
     */
    const ARCH_NODES = {
      ingress: {
        badge: { en: 'Networking & TLS', nl: 'Netwerk & TLS' },
        title: {
          en: 'MetalLB + Traefik Ingress & Cert-Manager',
          nl: 'MetalLB + Traefik Ingress & Cert-Manager',
        },
        desc: {
          en: "MetalLB provides bare-metal LoadBalancer IPs inside the Proxmox cluster, handing traffic off to Traefik as a cloud-native reverse proxy. Cert-Manager automates Let's Encrypt TLS certificates with zero manual renewal overhead.",
          nl: "MetalLB levert bare-metal LoadBalancer IP's binnen het Proxmox-cluster en stuurt verkeer door naar Traefik als cloud-native reverse proxy. Cert-Manager automatiseert Let's Encrypt TLS-certificaten volledig.",
        },
        enterprise: {
          en: 'Enforces strict TLS termination, security headers, and isolated routing rules across Nextcloud, Talk HPB, and Keycloak.',
          nl: 'Dwingt strikte TLS-terminatie, security headers en geïsoleerde routeringsregels af voor Nextcloud, Talk HPB en Keycloak.',
        },
        tip: {
          en: 'Using Traefik IngressRoutes makes sticky sessions and WebSocket upgrades for Nextcloud Talk reliable out of the box.',
          nl: 'Traefik IngressRoutes maken sticky sessions en WebSocket-upgrades voor Nextcloud Talk direct betrouwbaar.',
        },
      },
      firewall: {
        badge: { en: 'Perimeter Security', nl: 'Perimeter Beveiliging' },
        title: {
          en: 'Strict Edge Firewall & Network Segmentation',
          nl: 'Strikte Edge Firewall & Netwerksegmentatie',
        },
        desc: {
          en: 'All external internet traffic passes through a hardened perimeter firewall before reaching internal VLANs. Management planes, Proxmox hypervisor interfaces, and MariaDB remain completely unreachable from the public internet.',
          nl: 'Al het inkomende internetverkeer passeert eerst een geharde perimeter-firewall. Management-interfaces, Proxmox en MariaDB zijn volledig afgeschermd van het publieke internet.',
        },
        enterprise: {
          en: 'Implements defense-in-depth network isolation aligned with zero-trust segmentation principles.',
          nl: 'Implementeert defense-in-depth netwerkisolatie conform zero-trust segmentatieprincipes.',
        },
        tip: {
          en: 'Only expose ports 80/443 to MetalLB and UDP/TCP TURN ports for Talk HPB; keep Kubernetes API and DB strictly internal.',
          nl: 'Stel alleen poorten 80/443 naar MetalLB en TURN-poorten voor Talk HPB open; houd de Kubernetes API en DB strikt intern.',
        },
      },
      nextcloud: {
        badge: { en: 'Core Collaboration', nl: 'Kernapplicatie' },
        title: {
          en: 'Nextcloud Enterprise / Hub Core Pods',
          nl: 'Nextcloud Enterprise / Hub Core Pods',
        },
        desc: {
          en: 'Runs stateless application workers inside Kubernetes backed by Redis caching and persistent storage. Horizontal scaling ensures responsive file sync, collaborative document editing, and calendar/contact workflows.',
          nl: 'Draait stateless applicatie-workers binnen Kubernetes met Redis-caching en persistent storage voor snelle bestandssynchronisatie en samenwerking.',
        },
        enterprise: {
          en: 'Full GDPR & EU data residency replacement for Big Tech cloud drives with granular audit logging and sharing policies.',
          nl: 'Volledig AVG/GDPR- en EU-compliant alternatief voor Big Tech clouddiensten met uitgebreide audit-logging.',
        },
        tip: {
          en: 'Separate cron background jobs into a dedicated Kubernetes CronJob or sidecar so web workers never stall during heavy indexing.',
          nl: 'Draai achtergrond-cronjobs in een aparte Kubernetes CronJob zodat web-workers nooit vertragen tijdens indexering.',
        },
      },
      talk: {
        badge: { en: 'Real-Time Audio/Video', nl: 'Real-Time Audio/Video' },
        title: {
          en: 'Nextcloud Talk + High Performance Backend (HPB)',
          nl: 'Nextcloud Talk + High Performance Backend (HPB)',
        },
        desc: {
          en: 'Powered by custom Merux Helm charts (nextcloud-aio-talk & nextcloud-spreed), the Spreed Signaling HPB handles WebRTC media routing independently of PHP workers for crystal-clear multi-participant calls.',
          nl: 'Aangedreven door eigen Merux Helm charts (nextcloud-aio-talk & nextcloud-spreed) verwerkt de Spreed Signaling HPB WebRTC-videostreams los van de webapplicatie.',
        },
        enterprise: {
          en: 'Keeps confidential board and public-sector video meetings 100% on-premise without third-party SaaS telemetry.',
          nl: 'Houdt vertrouwelijke videovergaderingen 100% on-premise zonder externe SaaS-telemetrie.',
        },
        tip: {
          en: 'Deploy merux/nextcloud-spreed alongside a dedicated Coturn STUN/TURN setup to traverse strict corporate NATs cleanly.',
          nl: 'Combineer merux/nextcloud-spreed met Coturn STUN/TURN zodat deelnemers achter strikte bedrijfsfirewalls moeiteloos verbinden.',
        },
      },
      keycloak: {
        badge: { en: 'Identity & Access', nl: 'Identiteit & Toegang' },
        title: {
          en: 'Keycloak Identity Provider (Single Sign-On)',
          nl: 'Keycloak Identity Provider (Single Sign-On)',
        },
        desc: {
          en: 'Acts as the central OpenID Connect (OIDC) & SAML Identity Provider across Nextcloud and internal administrative dashboards, enforcing Multi-Factor Authentication (MFA) and centralized group mapping.',
          nl: 'Fungeert als centrale OpenID Connect (OIDC) & SAML Identity Provider voor Nextcloud en beheerportalen, inclusief MFA en centrale groepsrechten.',
        },
        enterprise: {
          en: 'Enables seamless federation with existing enterprise directories while maintaining sovereign identity control.',
          nl: 'Maakt koppeling met bestaande enterprise-directories mogelijk met behoud van soeverein identiteitsbeheer.',
        },
        tip: {
          en: 'Map Keycloak roles directly to Nextcloud groups via OIDC claims to automate user onboarding and offboarding.',
          nl: 'Koppel Keycloak-rollen direct aan Nextcloud-groepen via OIDC-claims om onboarding en offboarding te automatiseren.',
        },
      },
      clamav: {
        badge: { en: 'Automated Malware Defense', nl: 'Malware Beveiliging' },
        title: {
          en: 'ClamAV Antivirus Daemon (merux/clamav)',
          nl: 'ClamAV Antivirus Daemon (merux/clamav)',
        },
        desc: {
          en: 'Continuously updates virus definitions and scans every uploaded file stream inside the cluster before it can be shared or synced across client devices.',
          nl: 'Werkt virusdefinities continu bij en scant elke geüploade bestandsstroom binnen het cluster voordat deze gedeeld of gesynchroniseerd wordt.',
        },
        enterprise: {
          en: 'Protects internal workstations and external collaboration partners against malware propagation.',
          nl: 'Beschermt interne werkplekken en externe samenwerkingspartners tegen verspreiding van malware.',
        },
        tip: {
          en: 'Available directly via `helm install clamav merux/clamav` with tuned memory limits for Kubernetes nodes.',
          nl: 'Direct te installeren via `helm install clamav merux/clamav` met geoptimaliseerde geheugenlimieten voor Kubernetes.',
        },
      },
      mariadb: {
        badge: { en: 'Stateful Reliability', nl: 'Stateful Betrouwbaarheid' },
        title: {
          en: 'Dedicated MariaDB Virtual Machine on Proxmox',
          nl: 'Dedicated MariaDB Virtuele Machine op Proxmox',
        },
        desc: {
          en: 'Intentionally isolated outside the Kubernetes cluster on a dedicated Proxmox VM. This avoids distributed storage complexity for transactional SQL workloads and enables instant hypervisor-level snapshots.',
          nl: 'Bewust buiten het Kubernetes-cluster geplaatst op een dedicated Proxmox VM. Dit voorkomt complexe distributed-storage overhead en maakt directe hypervisor-snapshots mogelijk.',
        },
        enterprise: {
          en: 'Guarantees predictable IOPS, clean point-in-time recovery, and strict firewall isolation between app pods and raw data.',
          nl: 'Garandeert voorspelbare IOPS, snelle point-in-time recovery en strikte firewall-isolatie tussen applicatiepods en database.',
        },
        tip: {
          en: 'Pair nightly logical mysqldump backups with scheduled Proxmox ZFS/PBS snapshots for multi-layered disaster recovery.',
          nl: 'Combineer nachtelijke mysqldump back-ups met Proxmox ZFS/PBS snapshots voor meerlaagse disaster recovery.',
        },
      },
      gitops: {
        badge: { en: 'Zero-Drift Automation', nl: 'Zero-Drift Automatisering' },
        title: {
          en: 'Private Bitbucket + ArgoCD GitOps Engine',
          nl: 'Private Bitbucket + ArgoCD GitOps Engine',
        },
        desc: {
          en: 'All cluster manifests, Helm values, and ingress policies are version-controlled in private Bitbucket repositories. ArgoCD continuously monitors Git and reconciles the live Kubernetes cluster automatically.',
          nl: 'Alle cluster-manifests, Helm-values en ingress-regels staan in private Bitbucket-repositories. ArgoCD bewaakt Git continu en synchroniseert het cluster automatisch.',
        },
        enterprise: {
          en: 'Provides a complete Git audit trail of every infrastructure change and eliminates configuration drift.',
          nl: 'Biedt een volledige Git-audittrail van elke infrastructuurwijziging en voorkomt configuratiedrift.',
        },
        tip: {
          en: 'Never run `kubectl edit` in production-commit the change to Bitbucket and let ArgoCD self-heal the state.',
          nl: 'Gebruik nooit `kubectl edit` op productie-commit de wijziging naar Bitbucket en laat ArgoCD de status herstellen.',
        },
      },
      observability: {
        badge: { en: 'Full-Stack Visibility', nl: 'Volledige Observability' },
        title: {
          en: 'Grafana, Loki & Uptime Kuma Observability',
          nl: 'Grafana, Loki & Uptime Kuma Observability',
        },
        desc: {
          en: 'Aggregates structured container logs in Loki, cluster/node telemetry in Grafana, and external synthetic endpoint checks in Uptime Kuma for proactive alerting.',
          nl: 'Verzamelt gestructureerde container-logs in Loki, cluster-telemetrie in Grafana en externe beschikbaarheidschecks in Uptime Kuma voor proactieve alertering.',
        },
        enterprise: {
          en: 'Delivers clear SLA visibility and rapid root-cause diagnostics without expensive proprietary APM licensing.',
          nl: 'Biedt helder inzicht in beschikbaarheid en snelle foutanalyse zonder dure propriëtaire APM-licenties.',
        },
        tip: {
          en: 'Monitor Nextcloud status.php and Talk signaling health endpoints with Uptime Kuma for instant webhook alerts.',
          nl: 'Monitor Nextcloud status.php en Talk signaling endpoints met Uptime Kuma voor directe webhook-meldingen.',
        },
      },
    };

    let currentLang = 'en';
    let currentNodeKey = 'ingress';

    /**
     * Show a non-blocking, accessible toast notification (never uses alert())
     */
    function showToast(message) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className =
        'pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 dark:bg-elevated text-white border border-emerald-500/40 shadow-xl text-xs sm:text-sm font-medium transition-all duration-300 opacity-0 translate-y-2';
      toast.innerHTML = `
        <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>${message}</span>
      `;
      container.appendChild(toast);

      requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', 'translate-y-2');
      });

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3200);
    }

    /**
     * Copy text to clipboard using document.execCommand('copy') for iframe compatibility
     */
    function copyToClipboardFallback(text, successMsg) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(successMsg);
      } catch (err) {
        showToast(currentLang === 'nl' ? 'Kopiëren mislukt - selecteer handmatig.' : 'Copy failed - please copy manually.');
      }
    }

    function copyCommand(cmd) {
      const msg = currentLang === 'nl' ? 'Helm commando gekopieerd naar klembord!' : 'Helm command copied to clipboard!';
      copyToClipboardFallback(cmd, msg);
    }

    function copyEmailAddress() {
      const msg = currentLang === 'nl' ? 'E-mailadres info@merux.dev gekopieerd!' : 'Email address info@merux.dev copied!';
      copyToClipboardFallback('info@merux.dev', msg);
    }

    /**
     * Update the Interactive Nextcloud Architecture Inspector Panel
     */
    function selectArchNode(nodeKey) {
      if (!ARCH_NODES[nodeKey]) return;
      currentNodeKey = nodeKey;
      const data = ARCH_NODES[nodeKey];

      document.getElementById('inspector-badge').textContent = data.badge[currentLang];
      document.getElementById('inspector-title').textContent = data.title[currentLang];
      document.getElementById('inspector-desc').textContent = data.desc[currentLang];
      document.getElementById('inspector-enterprise').textContent = data.enterprise[currentLang];
      document.getElementById('inspector-tip').textContent = data.tip[currentLang];

      // Highlight selected SVG node
      document.querySelectorAll('.arch-node').forEach((el) => {
        if (el.getAttribute('data-node') === nodeKey) {
          el.classList.add('active-node');
        } else {
          el.classList.remove('active-node');
        }
      });
    }

    /**
     * Switch Language between English ('en') and Dutch ('nl')
     */
    function setLanguage(lang) {
      if (!I18N[lang]) return;
      currentLang = lang;
      document.documentElement.lang = lang;

      const dict = I18N[lang];

      // Update SEO title & meta description dynamically
      document.title = dict.meta_title;
      const metaDesc = document.getElementById('meta-description');
      if (metaDesc) metaDesc.setAttribute('content', dict.meta_desc);

      // Update all data-i18n elements
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      // Update active language button styles
      const btnEn = document.getElementById('btn-lang-en');
      const btnNl = document.getElementById('btn-lang-nl');
      if (lang === 'en') {
        btnEn.className = 'px-2.5 py-1 rounded-lg font-semibold bg-emerald-600 text-white shadow-sm cursor-pointer';
        btnNl.className = 'px-2.5 py-1 rounded-lg font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer';
      } else {
        btnNl.className = 'px-2.5 py-1 rounded-lg font-semibold bg-emerald-600 text-white shadow-sm cursor-pointer';
        btnEn.className = 'px-2.5 py-1 rounded-lg font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer';
      }

      // Refresh active architecture node description in selected language
      selectArchNode(currentNodeKey);

      try {
        localStorage.setItem('merux_lang', lang);
      } catch (e) {
        // Ignore storage restrictions
      }
    }

    /**
     * Toggle Dark / Light Mode
     */
    function toggleTheme() {
      const htmlEl = document.documentElement;
      const isDark = htmlEl.classList.toggle('dark');
      try {
        localStorage.setItem('merux_theme', isDark ? 'dark' : 'light');
      } catch (e) {
        // Ignore storage restrictions
      }
    }

    /**
     * Mobile Navigation Drawer Helpers
     */
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const btn = document.getElementById('mobile-menu-btn');
      const isHidden = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isHidden));
    }

    function closeMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const btn = document.getElementById('mobile-menu-btn');
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }

    /**
     * Structured Contact Inquiry Handler (Static-Hosting Safe via mailto + clipboard fallback)
     */
    function handleInquirySubmit(event) {
      event.preventDefault();
      const role = document.getElementById('visitor-role').value;
      const topic = document.getElementById('visitor-topic').value;
      const name = document.getElementById('visitor-name').value.trim();
      const email = document.getElementById('visitor-email').value.trim();
      const message = document.getElementById('visitor-message').value.trim();

      const subject = `[merux.dev] ${topic} - ${name}`;
      const body = [
        `Name / Organization: ${name}`,
        `Return Email: ${email}`,
        `Profile: ${role}`,
        `Topic: ${topic}`,
        ``,
        `Message:`,
        message,
      ].join('\n');

      const mailtoUrl = `mailto:info@merux.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;

      showToast(
        currentLang === 'nl'
          ? 'E-mailclient wordt geopend voor info@merux.dev...'
          : 'Opening your email client addressed to info@merux.dev...'
      );
    }

    /**
     * Initialize Language & Theme Preferences on Load
     */
    window.addEventListener('DOMContentLoaded', () => {
      try {
        const savedTheme = localStorage.getItem('merux_theme');
        if (savedTheme === 'light') {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}

      // Check URL parameter ?lang=nl or ?lang=en first, then localStorage, then browser language
      const urlParams = new URLSearchParams(window.location.search);
      const paramLang = urlParams.get('lang');
      let initialLang = 'en';

      if (paramLang === 'nl' || paramLang === 'en') {
        initialLang = paramLang;
      } else {
        try {
          const savedLang = localStorage.getItem('merux_lang');
          if (savedLang === 'nl' || savedLang === 'en') {
            initialLang = savedLang;
          } else if (navigator.language && navigator.language.toLowerCase().startsWith('nl')) {
            initialLang = 'nl';
          }
        } catch (e) {}
      }

      setLanguage(initialLang);
    });