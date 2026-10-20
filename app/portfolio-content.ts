// Public portfolio copy curated from WEBSITE_CONTENT_HANDOFF.md.
// Internal editorial notes are intentionally not included in the client data.
export type StorySection={heading:string;paragraphs:string[]};
export type Experience={name:string;displayName:string;displayNameTh?:string;role:string;th:string;time:string;timeTh:string;kind:string;tag:string;desc:string;descTh:string;body:string;bodyTh:string;context:string;contextTh:string;sections:StorySection[];sectionsTh:StorySection[]};
export const jobs:Experience[]=[
  {
    "name": "Makefunnel",
    "displayName": "MakeFunnel",
    "role": "Co-founder & Software Engineer",
    "th": "ผู้ร่วมก่อตั้งและวิศวกรซอฟต์แวร์",
    "time": "Jan 2026–Present",
    "timeTh": "ม.ค. 2026–ปัจจุบัน",
    "kind": "Work",
    "tag": "Go · MongoDB · Next.js · TypeScript · LINE",
    "desc": "From a LINE message to a completed digital purchase.",
    "descTh": "จากข้อความใน LINE สู่การซื้อและรับสินค้าดิจิทัล",
    "body": "I co-founded MakeFunnel, a marketing automation product for online sellers, and build features across its Go backend and web interfaces. I designed LINE delivery and a keyword-based chatbot so customers can request a product link, pay, and receive digital products without the seller manually replying. My work also covers lead magnet forms, contact scoring, cross-channel contact merging, and email/LINE broadcasts.",
    "bodyTh": "ผมร่วมก่อตั้ง MakeFunnel ระบบการตลาดอัตโนมัติสำหรับผู้ขายออนไลน์ และพัฒนาทั้ง Backend ด้วย Go และหน้าจอใช้งาน ผมออกแบบการส่งสินค้าผ่าน LINE และแชตบอตแบบคีย์เวิร์ด ให้ลูกค้าขอลิงก์ ชำระเงิน และรับสินค้าดิจิทัลได้โดยผู้ขายไม่ต้องตอบด้วยตัวเอง งานที่รับผิดชอบยังรวมถึงฟอร์ม Lead Magnet การให้คะแนน Contact การรวมตัวตนข้ามช่องทาง และ Broadcast ผ่านอีเมลกับ LINE",
    "context": "",
    "contextTh": "",
    "sections": [
      {
        "heading": "Making LINE part of the purchase flow",
        "paragraphs": [
          "MakeFunnel originally delivered products and lead magnets through email. We added LINE as another option for customers familiar with using it. I designed and implemented merchant onboarding, access-token validation, webhook configuration, and LIFF-based customer identification. Merchants can configure the messages delivered with their products or lead magnets.",
          "Early users still had to manually send their shop or product links to customers. In response, I built both the configuration interface and backend for a keyword-based LINE chatbot. Merchants can choose exact or partial matches, assign multiple keywords to a reply, and send text or images. Customers can now message the account, receive a purchase link, pay, and receive their digital product through the connected flow."
        ]
      },
      {
        "heading": "Capturing and understanding customer activity",
        "paragraphs": [
          "I built the lead magnet feature end to end: form and question configuration, data and contact capture, quota checks, content delivery, and submission reporting. I also implemented contact scoring and identity merging so activity from email and LINE can contribute to one customer profile.",
          "Duplicate events and repeated merge requests need to be handled carefully. The implementation uses database-enforced unique keys and atomic operations for event records, and MongoDB transactions for contact merging. Rankings are computed from recorded activity rather than blindly incrementing a score on every incoming request."
        ]
      },
      {
        "heading": "Building with the team",
        "paragraphs": [
          "I designed and implemented LINE integration, the keyword chatbot, lead magnets, contact scoring, and contact merging. For broadcasts, I implemented the design provided by my co-founder, including audience selection, email/LINE channels, quota validation, and delivery tracking. These features have been completed and put into use."
        ]
      }
    ],
    "sectionsTh": [
      {
        "heading": "เชื่อม LINE เข้ากับขั้นตอนการซื้อ",
        "paragraphs": [
          "เดิม MakeFunnel ส่งสินค้าและ Lead Magnet ผ่านอีเมล เราจึงเพิ่ม LINE เป็นอีกทางเลือกสำหรับลูกค้าที่คุ้นเคยกับช่องทางนี้ ผมออกแบบและพัฒนาขั้นตอนเชื่อมบัญชีของผู้ขาย ตรวจสอบ Access Token ตั้งค่า Webhook และระบุตัวตนลูกค้าผ่าน LIFF ผู้ขายสามารถกำหนดข้อความที่จะส่งพร้อมสินค้าหรือ Lead Magnet ของตนเองได้",
          "หลังเปิดใช้งาน ผู้ใช้กลุ่มแรกยังต้องส่งลิงก์ร้านหรือสินค้าให้ลูกค้าด้วยตัวเอง ผมจึงพัฒนาทั้งหน้าตั้งค่าและ Backend ของแชตบอต LINE แบบคีย์เวิร์ด ผู้ขายเลือกได้ว่าจะจับคำแบบตรงทั้งหมดหรือมีคำนั้นอยู่ในข้อความ กำหนดหลายคีย์เวิร์ดต่อคำตอบ และตอบกลับด้วยข้อความหรือภาพ ลูกค้าจึงทัก LINE รับลิงก์ ชำระเงิน และรับสินค้าดิจิทัลต่อเนื่องได้เอง"
        ]
      },
      {
        "heading": "เก็บข้อมูลและเข้าใจกิจกรรมของลูกค้า",
        "paragraphs": [
          "ผมสร้างระบบ Lead Magnet ครบตั้งแต่หน้ากำหนดฟอร์มและคำถาม การเก็บข้อมูลกับ Contact การตรวจโควตา การส่งเนื้อหา และหน้าดูผล รวมถึงพัฒนาการให้คะแนน Contact และการรวมตัวตน เพื่อเชื่อมกิจกรรมจากอีเมลและ LINE เข้ากับลูกค้าคนเดียวกัน",
          "ระบบต้องระวังทั้ง Event ที่เข้ามาซ้ำและคำขอ Merge ที่ถูกเรียกซ้ำ จึงใช้ Unique Key ที่ฐานข้อมูลบังคับร่วมกับ Atomic Operation สำหรับรายการกิจกรรม และใช้ MongoDB Transaction ในการรวม Contact ส่วน Ranking คำนวณจากประวัติกิจกรรม ไม่ได้เพิ่มคะแนนทุกครั้งที่มี Request เข้ามา"
        ]
      },
      {
        "heading": "ขอบเขตที่ทำร่วมกับทีม",
        "paragraphs": [
          "ผมออกแบบและพัฒนา LINE Integration แชตบอตแบบคีย์เวิร์ด Lead Magnet ระบบคะแนน และการรวม Contact ส่วน Broadcast ผมพัฒนาตามแบบของผู้ร่วมก่อตั้งอีกคน ครอบคลุมการเลือกผู้รับ ช่องทางอีเมลหรือ LINE การตรวจโควตา และการติดตามผล ฟีเจอร์เหล่านี้พัฒนาเสร็จและเปิดใช้งานแล้ว"
        ]
      }
    ]
  },
  {
    "name": "Bitkub",
    "displayName": "Bitkub",
    "role": "Software Engineer Intern",
    "th": "นักศึกษาฝึกงานด้านวิศวกรรมซอฟต์แวร์",
    "time": "Sep–Dec 2025",
    "timeTh": "ก.ย.–ธ.ค. 2025",
    "kind": "Work",
    "tag": "Go · MongoDB · Redis · API Integration",
    "desc": "Looking beyond HTTP 200 to find what really happened.",
    "descTh": "ตรวจให้รู้ว่าธุรกรรมสำเร็จจริง แม้ API จะตอบ 200",
    "body": "In Bitkub's Trade/Broker team, I worked on the correctness and performance of a Go-based broker service. I implemented response validation for undocumented external-broker errors, built an OHLCV backfill script to restore missing chart data, and ran performance tests with more than 100,000 simulated requests to verify the target TPS.",
    "bodyTh": "ระหว่างฝึกงานในทีม Trade/Broker ของ Bitkub ผมทำงานด้านความถูกต้องและประสิทธิภาพของระบบ Broker ที่เขียนด้วย Go พัฒนาการตรวจ Response เพื่อรองรับ Error จาก Broker ภายนอกที่ไม่มีในเอกสาร เขียนสคริปต์ดึง OHLCV ย้อนหลังเพื่อเติมกราฟที่ขาด และทดสอบด้วย Request จำลองมากกว่า 100,000 ครั้งเพื่อยืนยัน TPS ตามเป้าหมาย",
    "context": "Trade Team · Broker System",
    "contextTh": "ทีม Trade · ระบบ Broker",
    "sections": [
      {
        "heading": "When a successful HTTP response contains a failure",
        "paragraphs": [
          "The external broker sometimes returned HTTP 200 with an error inside the response body. Existing service-level checks did not cover every case, and some failures were missing from the documentation. I investigated possible business scenarios, reproduced undocumented failures, and implemented a method that mapped responses to internal error codes and messages consistent with other services. The change passed review and was put into use, preventing these failures from being interpreted as successful transactions."
        ]
      },
      {
        "heading": "Recovering missing market data",
        "paragraphs": [
          "Market data arrived through WebSocket and fed the trading charts, but the team sometimes found gaps. I wrote a Go script that retrieved historical OHLCV data through the broker API for specified assets and time ranges and updated stored chart data. The script was used to restore missing chart segments. It addressed data recovery; we had not established the original cause of the gaps."
        ]
      },
      {
        "heading": "Testing realistic transaction flows",
        "paragraphs": [
          "I read multiple services to understand the request flow, then prepared simulated requests and database/Redis state for performance testing. The scenarios had to satisfy transaction ordering and partial-fill rules, including correct totals when an order became fully filled. Tests used more than 100,000 requests, including repeated requests to generate load, and measured throughput, latency, and CPU usage. The service met its target TPS for deployment.",
          "I also enabled existing stop-limit functionality in the new broker pod; I did not build the original order logic."
        ]
      }
    ],
    "sectionsTh": [
      {
        "heading": "เมื่อ HTTP สำเร็จ แต่ธุรกรรมไม่สำเร็จ",
        "paragraphs": [
          "Broker ภายนอกบางครั้งตอบ HTTP 200 แต่ระบุ Error ไว้ใน Response Body การตรวจเงื่อนไขใน Service เดิมยังไม่ครอบคลุมทุกกรณี และบาง Error ไม่มีในเอกสาร ผมวิเคราะห์สถานการณ์ทางธุรกิจ ทดลองจนพบกรณีเหล่านั้น และเขียน Method แปลงผลลัพธ์เป็น Error Code กับข้อความมาตรฐานที่สอดคล้องกับ Service อื่น โค้ดผ่าน Review และถูกนำไปใช้ เพื่อไม่ให้ระบบตีความธุรกรรมที่ล้มเหลวว่าสำเร็จ"
        ]
      },
      {
        "heading": "เติมข้อมูลตลาดที่ขาดหาย",
        "paragraphs": [
          "ระบบรับข้อมูลตลาดผ่าน WebSocket เพื่อนำไปแสดงกราฟ แต่ทีมพบว่าบางช่วงของกราฟขาด ผมเขียนสคริปต์ Go ดึง OHLCV ย้อนหลังผ่าน API โดยกำหนดสินทรัพย์และช่วงเวลา แล้วอัปเดตข้อมูลกราฟที่จัดเก็บไว้ สคริปต์ถูกนำไปใช้เติมช่วงที่ขาดได้จริง งานนี้เป็นการกู้คืนข้อมูล โดยยังไม่ได้ข้อสรุปถึงสาเหตุที่ทำให้ข้อมูลขาดตั้งแต่ต้น"
        ]
      },
      {
        "heading": "ทดสอบด้วยเงื่อนไขของธุรกรรมจริง",
        "paragraphs": [
          "ผมอ่านโค้ดหลาย Service เพื่อเข้าใจเส้นทางของ Request แล้วเตรียม Request จำลองพร้อมข้อมูลในฐานข้อมูลและ Redis สถานการณ์ต้องผ่านกฎเรื่องลำดับ Transaction และ Partial Fill รวมถึงยอดรวมที่ถูกต้องเมื่อคำสั่งซื้อขายถูก Fill ครบ การทดสอบใช้มากกว่า 100,000 Request ซึ่งรวมการยิงซ้ำเพื่อสร้างโหลด วัดทั้ง Throughput, Latency และ CPU Usage และยืนยันว่าได้ TPS ตามเป้าหมายสำหรับการ Deploy",
          "นอกจากนี้ ผมเปิดใช้ความสามารถ Stop-Limit ที่มีอยู่เดิมใน Broker Pod ใหม่ โดยไม่ได้เป็นผู้สร้างตรรกะคำสั่งซื้อขายนี้ขึ้นมาตั้งแต่ต้น"
        ]
      }
    ]
  },
  {
    "name": "Stock Exchange of Thailand",
    "displayName": "The Stock Exchange of Thailand (SET)",
    "role": "Software Engineer Intern",
    "th": "นักศึกษาฝึกงานด้านวิศวกรรมซอฟต์แวร์",
    "time": "Sep 2025–May 2026",
    "timeTh": "ก.ย. 2025–พ.ค. 2026",
    "kind": "Work",
    "tag": "Java · Spring Boot · MySQL · Microsoft Entra ID · Kubernetes",
    "desc": "The right access, down to the agenda and the file.",
    "descTh": "ออกแบบสิทธิ์ให้ละเอียดถึงวาระและเอกสารแต่ละไฟล์",
    "body": "I developed the backend of SET E-Meeting as an internship and university capstone project, building a replacement for an aging internal meeting system. My work covered Spring Boot APIs, hierarchical access control, document versioning, and Microsoft Entra ID integration. The system passed QA testing and was handed over to SET's development team with documentation and knowledge-transfer sessions.",
    "bodyTh": "ผมพัฒนา Backend ของ SET E-Meeting ระหว่างฝึกงานควบคู่กับโปรเจกต์จบ เพื่อสร้างระบบใหม่ทดแทนระบบประชุมภายในเดิม รับผิดชอบ API ด้วย Spring Boot การจัดการสิทธิ์แบบลำดับชั้น เวอร์ชันเอกสาร และการเชื่อม Microsoft Entra ID ระบบผ่านการทดสอบจาก QA และส่งต่อให้ทีมพัฒนาของ SET พร้อมคู่มือและการประชุมถ่ายทอดงาน",
    "context": "University Capstone Project · Chulalongkorn University",
    "contextTh": "ฝึกงานควบคู่โปรเจกต์จบ · จุฬาลงกรณ์มหาวิทยาลัย",
    "sections": [
      {
        "heading": "Permissions that follow the meeting structure",
        "paragraphs": [
          "Meeting access was more detailed than a simple admin/user distinction. An agenda could add or exclude people and groups relative to its meeting, and files could have additional restrictions, such as committee-only access. I designed and implemented a central authorization service with inherited permissions and explicit overrides across meetings, agendas, and files. Reusable templates supported meeting types with similar permission settings."
        ]
      },
      {
        "heading": "Keeping identity data in sync",
        "paragraphs": [
          "I integrated Microsoft Entra ID token validation, user records, and organizational groups. The directory contained more than 1,000 users and tens of thousands of groups. A daily scheduled job synchronized directory data into the application, while pagination and relevant-group filtering kept directory views manageable. Access changes reflected the updated directory data after synchronization, rather than instantly."
        ]
      },
      {
        "heading": "Document history and delivery",
        "paragraphs": [
          "The document system displayed the latest version by default while allowing users to revisit earlier versions. File access used the same central authorization service as meetings and agendas. I deployed using SET's Kubernetes configuration blueprints; QA tested the backend and frontend before the team handed over the system with documentation and developer knowledge-transfer meetings."
        ]
      }
    ],
    "sectionsTh": [
      {
        "heading": "สิทธิ์ที่เปลี่ยนไปตามโครงสร้างการประชุม",
        "paragraphs": [
          "สิทธิ์ของระบบมีรายละเอียดมากกว่าการแบ่ง Admin กับ User วาระหนึ่งอาจเพิ่มหรือตัดบางคนหรือบางกลุ่มออกจากสิทธิ์ของการประชุม และไฟล์ภายในวาระอาจมีข้อจำกัดเพิ่มเติม เช่น ให้เฉพาะคณะกรรมการเข้าถึง ผมออกแบบและพัฒนา Service กลางสำหรับตรวจสิทธิ์ที่สืบทอดตามลำดับการประชุม วาระ และไฟล์ พร้อมรองรับข้อยกเว้นที่กำหนดไว้โดยตรง และ Template สำหรับประเภทการประชุมที่ใช้ชุดสิทธิ์คล้ายกัน"
        ]
      },
      {
        "heading": "ทำให้ข้อมูลบัญชีตามทันองค์กร",
        "paragraphs": [
          "ผมเชื่อมการตรวจ Token ข้อมูลผู้ใช้ และกลุ่มองค์กรจาก Microsoft Entra ID ซึ่งมีผู้ใช้มากกว่า 1,000 คนและกลุ่มหลักหมื่น ระบบใช้ Scheduled Job รายวันเพื่อ Sync ข้อมูลเข้าฐานข้อมูลของแอป พร้อม Pagination และการกรองกลุ่มที่เกี่ยวข้องในการแสดงผล การเปลี่ยนสิทธิ์จึงตามข้อมูลที่อัปเดตหลังรอบ Sync ไม่ใช่การเปลี่ยนแบบทันที"
        ]
      },
      {
        "heading": "ประวัติเอกสารและการส่งมอบ",
        "paragraphs": [
          "ระบบเอกสารแสดงเวอร์ชันล่าสุดเป็นค่าเริ่มต้น และเปิดให้ย้อนดูเวอร์ชันก่อนหน้าได้ การเข้าถึงไฟล์ตรวจผ่าน Service กลางเดียวกับการประชุมและวาระ ผม Deploy ตาม Blueprint ของ Kubernetes ที่ SET กำหนด จากนั้น QA ทดสอบทั้ง Backend และ Frontend ก่อนส่งมอบระบบพร้อมคู่มือและประชุมถ่ายทอดงานให้ทีมพัฒนารับช่วงต่อ"
        ]
      }
    ]
  },
  {
    "name": "AIMET.Tech",
    "displayName": "AIMET.Tech",
    "role": "Software Engineer Intern (Part-time)",
    "th": "นักศึกษาฝึกงานด้านวิศวกรรมซอฟต์แวร์ (พาร์ตไทม์)",
    "time": "May 2023–Jun 2025",
    "timeTh": "พ.ค. 2023–มิ.ย. 2025",
    "kind": "Work",
    "tag": "Go · MongoDB · Redis · WebSocket · Message Queues",
    "desc": "Building the backend behind a multi-model conversation.",
    "descTh": "สร้าง Backend ที่เชื่อมบทสนทนากับโมเดลหลายขั้นตอน",
    "body": "I led task planning and coordination for a five-person student backend team building a mental-health chatbot from requirements through delivery. I developed streaming chat with Go and WebSocket, workflow-template APIs, and API/queue integrations with model services. Prompt engineers could configure graph-based workflows involving more than ten models, while the AI team implemented graph execution.",
    "bodyTh": "ผมวางแผนและแบ่งงานให้ทีม Backend นิสิต 5 คน ร่วมพัฒนาแชตบอตด้านสุขภาพจิตตั้งแต่เก็บ Requirement จนส่งมอบ ลงมือทำระบบแชตแบบ Streaming ด้วย Go และ WebSocket, API จัดการ Workflow Template และการเชื่อมบริการโมเดลผ่าน API กับคิว Prompt Engineer สามารถกำหนด Workflow แบบกราฟที่เกี่ยวข้องกับโมเดลมากกว่า 10 ตัว โดยทีม AI เป็นผู้พัฒนาตัวรันกราฟ",
    "context": "",
    "contextTh": "",
    "sections": [
      {
        "heading": "A configurable path through multiple models",
        "paragraphs": [
          "The chatbot was built for people seeking a place to talk about mental-health concerns. Its processing flow involved more than ten models, with conditional routes rather than a single fixed sequence. Prompt engineers could build reusable graph templates through an interface, connecting execution, condition, and data-transfer nodes.",
          "I worked with the frontend and AI teams and developed the APIs for managing these templates. The AI team owned the code that executed graph nodes. This division let us support configurable workflows while keeping model execution with the team responsible for the models."
        ]
      },
      {
        "heading": "Making the conversation work",
        "paragraphs": [
          "My main hands-on work included WebSocket streaming, message persistence in MongoDB, and API/queue connections to model services. The system supported retries and recorded failed-message status so users could be informed. Redis provided a key-value layer for state and data passed between model steps, with Business Key IDs separating processing contexts. The interface prevented sending a new message while the previous one was still processing."
        ]
      },
      {
        "heading": "Coordinating the backend team",
        "paragraphs": [
          "Alongside development, I created and assigned tasks for a five-person student backend team and coordinated with frontend, product, and AI teams. Company engineers reviewed our code. We delivered a working system that was trialed by users and reviewed by psychiatrists."
        ]
      }
    ],
    "sectionsTh": [
      {
        "heading": "เส้นทางผ่านหลายโมเดลที่ปรับเปลี่ยนได้",
        "paragraphs": [
          "แชตบอตนี้สร้างสำหรับผู้ที่ต้องการพูดคุยเรื่องความกังวลด้านสุขภาพจิต การประมวลผลเกี่ยวข้องกับโมเดลมากกว่า 10 ตัว และเลือกเส้นทางตามเงื่อนไข แทนที่จะใช้ลำดับตายตัว Prompt Engineer สามารถสร้าง Template ผ่านหน้าจอแบบกราฟ โดยเชื่อม Node สำหรับประมวลผล ตรวจเงื่อนไข และส่งต่อข้อมูล",
          "ผมทำงานร่วมกับทีม Frontend และ AI และพัฒนา API สำหรับจัดการ Template เหล่านี้ ส่วนโค้ดที่สั่งรันแต่ละ Node เป็นความรับผิดชอบของทีม AI การแบ่งงานนี้ทำให้รองรับ Workflow ที่ปรับเปลี่ยนได้ โดยทีมโมเดลยังดูแลการประมวลผลของโมเดลโดยตรง"
        ]
      },
      {
        "heading": "ทำให้ระบบแชตใช้งานได้จริง",
        "paragraphs": [
          "ส่วนที่ผมลงมือทำหลัก ๆ คือการส่งข้อความแบบ Streaming ผ่าน WebSocket การเก็บข้อความใน MongoDB และการเชื่อมบริการโมเดลผ่าน API กับคิว ระบบรองรับ Retry และบันทึกสถานะข้อความที่ล้มเหลวเพื่อแจ้งผู้ใช้ Redis เป็นพื้นที่แบบ Key-Value สำหรับ State และข้อมูลที่แต่ละโมเดลส่งต่อกัน โดยใช้ Business Key ID แยกบริบทการประมวลผล หน้าแชตจะปิดการส่งข้อความใหม่ระหว่างที่ข้อความก่อนหน้ายังประมวลผลอยู่"
        ]
      },
      {
        "heading": "ดูแลการทำงานร่วมกันของทีม Backend",
        "paragraphs": [
          "นอกจากเขียนโค้ด ผมสร้างและแบ่ง Task ให้ทีม Backend นิสิต 5 คน รวมถึงประสานงานกับทีม Frontend, Product และ AI โดยมีวิศวกรของบริษัทช่วย Review โค้ด ทีมส่งมอบระบบที่ใช้งานได้ มีผู้ใช้ทดลองจริงและจิตแพทย์เข้ามาตรวจสอบ"
        ]
      }
    ]
  },
  {
    "name": "Chulalongkorn University",
    "displayName": "Chulalongkorn University",
    "displayNameTh": "จุฬาลงกรณ์มหาวิทยาลัย",
    "role": "B.Eng. in Computer Engineering",
    "th": "วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์",
    "time": "2022–Jun 2026",
    "timeTh": "2022–มิ.ย. 2026",
    "kind": "Education",
    "tag": "Computer Engineering · Second-Class Honors",
    "desc": "The foundation behind the work.",
    "descTh": "รากฐานของเส้นทางการเป็นวิศวกร",
    "body": "I graduated in Computer Engineering from Chulalongkorn University in June 2026 with a GPAX of 3.43 and Second-Class Honors. My capstone project was the SET E-Meeting platform, developed alongside my internship at the Stock Exchange of Thailand.",
    "bodyTh": "ผมสำเร็จการศึกษาวิศวกรรมคอมพิวเตอร์จากจุฬาลงกรณ์มหาวิทยาลัยในเดือนมิถุนายน 2026 ด้วยเกรดเฉลี่ย 3.43 และเกียรตินิยมอันดับสอง โดยทำ SET E-Meeting เป็นโปรเจกต์จบควบคู่กับการฝึกงานที่ตลาดหลักทรัพย์แห่งประเทศไทย",
    "context": "",
    "contextTh": "",
    "sections": [],
    "sectionsTh": []
  }
];
export const timelineJobs=[jobs[0],jobs[2],jobs[1],jobs[3],jobs[4]];
export const projects=[
  {
    "name": "MakeFunnel",
    "type": "Marketing Automation · Full-stack Development",
    "typeTh": "ระบบการตลาดอัตโนมัติ · Full-stack Development",
    "desc": "Lead capture, LINE chat automation, and digital product delivery for online sellers.",
    "th": "ระบบเก็บข้อมูลผู้สนใจ แชต LINE อัตโนมัติ และส่งสินค้าดิจิทัลสำหรับผู้ขายออนไลน์",
    "body": "A live product I co-founded and help develop. My work connects lead magnet forms, keyword-based LINE replies, product delivery, contact scoring, and email/LINE broadcasts into merchant workflows. I designed the LINE, lead magnet, and contact features and implemented broadcasts from my co-founder's design.",
    "bodyTh": "ผลิตภัณฑ์ที่ผมร่วมก่อตั้งและพัฒนา โดยเปิดใช้งานจริงแล้ว งานของผมเชื่อมฟอร์ม Lead Magnet การตอบ LINE ตามคีย์เวิร์ด การส่งสินค้า ระบบคะแนน Contact และ Broadcast อีเมล/LINE เข้ากับการทำงานของผู้ขาย ผมออกแบบส่วน LINE, Lead Magnet และ Contact และพัฒนา Broadcast ตามแบบของผู้ร่วมก่อตั้งอีกคน"
  },
  {
    "name": "Photomatch",
    "type": "Project Management",
    "typeTh": "การบริหารโปรเจกต์",
    "desc": "A photographer-client marketplace developed as an Agile team project. My role focused on project management, user stories, and sprint planning.",
    "th": "โปรเจกต์แพลตฟอร์มจับคู่ช่างภาพกับลูกค้าที่พัฒนาเป็นทีมแบบ Agile โดยผมดูแลงานด้าน Project Management, User Story และ Sprint Planning",
    "body": "A photographer-client marketplace developed as an Agile team project. My role focused on project management, user stories, and sprint planning.",
    "bodyTh": "โปรเจกต์แพลตฟอร์มจับคู่ช่างภาพกับลูกค้าที่พัฒนาเป็นทีมแบบ Agile โดยผมดูแลงานด้าน Project Management, User Story และ Sprint Planning"
  },
  {
    "name": "Faculty IT Platform",
    "type": "Backend Development",
    "typeTh": "การพัฒนา Backend",
    "desc": "A faculty announcement and communication platform, with backend work using NestJS and Prisma.",
    "th": "แพลตฟอร์มประกาศและการสื่อสารของคณะ โดยผมพัฒนา Backend ด้วย NestJS และ Prisma",
    "body": "A faculty announcement and communication platform, with backend work using NestJS and Prisma.",
    "bodyTh": "แพลตฟอร์มประกาศและการสื่อสารของคณะ โดยผมพัฒนา Backend ด้วย NestJS และ Prisma"
  }
];
