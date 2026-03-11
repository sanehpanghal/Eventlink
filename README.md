## EventLink

The ephemeral bridge for real-world connections. Stop scrolling past people you are actually standing next to. EventConnect is a lightweight, self-hostable, and privacy-first networking platform designed to turn events, workshops, and festivals into active communities. No algorithms, no data mining—just discovery.

---

### The Concept

Digital networking often requires a permanent social media presence or surrendering data to a central authority just to say hello to someone in the same room. EventConnect changes this by providing a temporary, event-specific hub where participants can find each other, share goals, and build relationships that outlast the event itself.

1. **Scan:** Enter a venue and hit the QR code.
2. **Discover:** See who else is there and what they are looking for.
3. **Connect:** Swipe or scroll through profiles. If interest is mutual, a direct line opens.

---

### Key Features

* **QR-Based Onboarding:** Instantly join an event room and fetch metadata without a traditional signup process.
* **Quick Discovery:** A fluid, gesture-based UI for browsing participant profiles.
* **Privacy-First:** Local-first architecture. Profiles for different event types are stored in your local SQLite database to avoid repeated customization.
* **WebRTC Chat:** Real-time, peer-to-peer event chat rooms that exist only as long as the event is deployed.
* **Event Dashboard:** Tools for hosts to visualize skill distributions, attendee counts, and data exports.
* **Plugin System:** Highly customizable templates and modules for different event types.
* **Offline-First:** Designed to work over local WiFi (MDNS/Local Discovery) when internet connectivity is unreliable.

---

### Tech Stack

| Layer | Technology |
| --- | --- |
| **Frontend** | Next.js (Web) |
| **Styling** | Tailwind CSS + Shadcn UI |
| **Backend** | NextJS server side|
| **Database** | Supabase (Auth/Remote) + SQLite (Local-first) |
| **Real-time** | WebRTC for ephemeral chat |

---

### FOSS Philosophy

This project is built for the community, prioritizing user autonomy:

* **Self-Hostable:** Ships with a Docker setup so organizers own 100% of their data.
* **No Algorithm Addiction:** No ranking or engagement loops.
* **Local-First:** Sensitive data stays on the user's device whenever possible.
* **Open Contribution:** Community-driven plugins for team formation, icebreakers, and custom templates.

---

### Deployment

```bash
# Clone the repository
git clone https://github.com/Intellistack2026/Eventlink

# Spin up the local environment
docker-compose up -d

```

Deploy to create your first event and generate a Host QR code.

---

### Contributing

Contributions are welcome. Whether you are optimizing WebRTC logic or designing new UI templates, your input helps bridge the gap between physical and digital networking.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/NewFeature`).
3. Commit your Changes (`git commit -m 'Add NewFeature'`).
4. Push to the Branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

